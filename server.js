const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../'));
app.use(express.static('./'));

// WhatsApp notification function
async function sendWhatsAppNotification(message) {
  return new Promise((resolve, reject) => {
    // Using a free WhatsApp API service (you can replace with your preferred service)
    const whatsappNumber = '923327775218'; // Your WhatsApp number
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&apikey=${process.env.WHATSAPP_API_KEY || ''}`;

    // Alternative: Use WhatsApp URL scheme (opens WhatsApp on your device)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    console.log('📱 WhatsApp notification URL:', whatsappUrl);

    // For production, you would use an actual WhatsApp API
    // For now, we'll log the WhatsApp URL that you can manually open
    console.log('📱 To send manually, open this URL in your browser:', whatsappUrl);

    // Try to send via API if API key is available
    if (process.env.WHATSAPP_API_KEY && process.env.WHATSAPP_API_KEY !== 'your-whatsapp-api-key-here') {
      https.get(apiUrl, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          console.log('✅ WhatsApp API response:', data);
          resolve(data);
        });
      }).on('error', (err) => {
        console.error('❌ WhatsApp API error:', err);
        console.log('💡 Fallback: Open this URL manually to send the notification:', whatsappUrl);
        resolve('fallback');
      });
    } else {
      console.log('ℹ️  No WhatsApp API key configured. Manual notification required.');
      console.log('📱 Open this URL to send the notification:', whatsappUrl);
      resolve('manual');
    }
  });
}

// Order confirmation endpoint
app.post('/confirm-order', async (req, res) => {
  const { items, total, customerInfo, paymentMethod } = req.body;

  try {
    // Here you would typically save to database and send confirmation
    console.log('Order received:', { items, total, customerInfo, paymentMethod });

    const orderId = 'FV' + Date.now();
    let notificationMessage = '';

    // Handle different payment methods with appropriate notifications
    if (paymentMethod === 'cod') {
      console.log('🚨 COD ORDER ALERT 🚨');
      console.log(`COD Order #${orderId}`);
      console.log(`Customer: ${customerInfo?.name || 'N/A'}`);
      console.log(`Phone: ${customerInfo?.phone || 'N/A'}`);
      console.log(`Address: ${customerInfo?.address || 'N/A'}`);
      console.log(`Total: ${total} PKR`);
      console.log(`Items: ${items?.length || 0} items`);
      console.log('Please arrange delivery and collect payment upon delivery.');
      console.log('='.repeat(50));

      notificationMessage = `🚨 *NEW COD ORDER* 🚨\n\nOrder ID: #${orderId}\nCustomer: ${customerInfo?.name || 'N/A'}\nPhone: ${customerInfo?.phone || 'N/A'}\nAddress: ${customerInfo?.address || 'N/A'}\nTotal: ${total} PKR\nItems: ${items?.length || 0} items\nPayment: Cash on Delivery\n\nPlease arrange delivery and collect payment upon delivery.`;
    } else if (paymentMethod === 'bank') {
      console.log('💳 BANK TRANSFER ORDER 💳');
      console.log(`Bank Transfer Order #${orderId}`);
      console.log(`Customer: ${customerInfo?.name || 'N/A'}`);
      console.log(`Phone: ${customerInfo?.phone || 'N/A'}`);
      console.log(`Address: ${customerInfo?.address || 'N/A'}`);
      console.log(`Total: ${total} PKR`);
      console.log(`Items: ${items?.length || 0} items`);
      console.log('Customer will send bank transfer confirmation via WhatsApp.');
      console.log('='.repeat(50));

      notificationMessage = `💳 *NEW BANK TRANSFER ORDER* 💳\n\nOrder ID: #${orderId}\nCustomer: ${customerInfo?.name || 'N/A'}\nPhone: ${customerInfo?.phone || 'N/A'}\nAddress: ${customerInfo?.address || 'N/A'}\nTotal: ${total} PKR\nItems: ${items?.length || 0} items\nPayment: Bank Transfer\n\nCustomer will send bank transfer confirmation via WhatsApp.`;
    } else if (paymentMethod === 'whatsapp') {
      console.log('📱 WHATSAPP ORDER 📱');
      console.log(`WhatsApp Order #${orderId}`);
      console.log(`Customer: ${customerInfo?.name || 'N/A'}`);
      console.log(`Phone: ${customerInfo?.phone || 'N/A'}`);
      console.log(`Address: ${customerInfo?.address || 'N/A'}`);
      console.log(`Total: ${total} PKR`);
      console.log(`Items: ${items?.length || 0} items`);
      console.log('Customer will coordinate payment and delivery via WhatsApp.');
      console.log('='.repeat(50));

      notificationMessage = `📱 *NEW WHATSAPP ORDER* 📱\n\nOrder ID: #${orderId}\nCustomer: ${customerInfo?.name || 'N/A'}\nPhone: ${customerInfo?.phone || 'N/A'}\nAddress: ${customerInfo?.address || 'N/A'}\nTotal: ${total} PKR\nItems: ${items?.length || 0} items\nPayment: WhatsApp Order\n\nCustomer will coordinate payment and delivery via WhatsApp.`;
    }

    // Send WhatsApp notification
    if (notificationMessage) {
      try {
        await sendWhatsAppNotification(notificationMessage);
        console.log('✅ WhatsApp notification sent successfully');
      } catch (whatsappError) {
        console.error('❌ Failed to send WhatsApp notification:', whatsappError);
      }
    }

    res.json({
      success: true,
      orderId: orderId,
      message: paymentMethod === 'cod' ? 'COD order placed successfully! Our delivery partner will contact you soon.' : 'Order confirmed successfully!'
    });

  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process order. Please try again.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});