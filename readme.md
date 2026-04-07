# The Fone Village – Your Mobile Accessories Hub

This is a modern, responsive website for The Fone Village, a premier destination for mobile accessories. The site showcases a wide range of products including chargers, cables, AirPods, handfrees, and more, designed to meet all your mobile device needs.

The website is built using HTML5, CSS3, and vanilla JavaScript for optimal performance and user experience, with a Node.js backend for payment processing.

## ✨ Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons.
- **Product Showcase**: Display of premium mobile accessories with images and descriptions.
- **About Section**: Information about the store and its commitment to quality.
- **Contact Section**: Easy access to contact details and location.
- **Shopping Cart**: Interactive cart with drag-and-drop functionality.
- **Payment Integration**: Multiple payment methods including bank transfer, WhatsApp orders, and cash on delivery.
- **WhatsApp Notifications**: Automatic notifications sent to your WhatsApp when orders are placed.
- **Responsive Design**: Fully optimized for mobile phones, tablets, and desktop browsers.
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior.

## 🚀 WhatsApp Notifications Setup

The website includes automatic WhatsApp notifications for new orders. When a customer places an order, you'll receive a detailed notification on your WhatsApp.

### Setup Instructions:

1. **Get a WhatsApp API Key** (Free option):
   - Visit: https://www.callmebot.com/blog/free-api-whatsapp-messages/
   - Send `/start` to the CallMeBot WhatsApp number: +34 644 10 28 46
   - Follow the instructions to get your free API key

2. **Configure Environment Variables**:
   - Copy `.env.example` to `.env`
   - Add your API key: `WHATSAPP_API_KEY=your-api-key-here`

3. **Alternative Manual Method**:
   - If you don't set up the API key, the server will log WhatsApp URLs in the console
   - You can manually open these URLs in your browser to send notifications

### Notification Format:
```
🚨 NEW COD ORDER 🚨

Order ID: #FV1703123456789
Customer: John Doe
Phone: +92 300 1234567
Address: 123 Main Street, Lahore
Total: 2500 PKR
Items: 2 items
Payment: Cash on Delivery

Please arrange delivery and collect payment upon delivery.
```

## 🔗 Live Demo

You can view a live version of the site here (once deployed via GitHub Pages):

[Insert Your GitHub Pages URL Here] (Example: https://your-username.github.io/the-fone-village/)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Icons**: Font Awesome
- **Typography**: Google Fonts (Poppins and Playfair Display)

## 📱 Product Categories

- Chargers
- Cables
- AirPods & Earbuds
- Handfrees & Headphones
- Phone Cases & Covers
- Screen Protectors

## 💳 Payment Methods

- **Direct Bank Transfer**: Transfer directly to our bank account (Pakistan)
- **WhatsApp Orders**: Contact us directly for custom orders
- **Cash on Delivery**: Pay when you receive your order at your doorstep

## 📢 Order Notifications

When a customer places an order (any payment method):

1. **Server Console Alert**: Complete order details with customer information are logged
2. **COD Special Alerts**: COD orders show prominent 🚨 COD ORDER ALERT 🚨 notifications
3. **WhatsApp Integration**: All orders generate detailed WhatsApp messages with delivery information
4. **Customer Data**: Name, phone, and address are collected for all payment methods

**All orders require delivery information** - arrange delivery based on customer details provided.

## 📞 Contact Information

For inquiries or to visit the store:

- **Address**: T F V Longridge, 57 Berry Lane, Longridge PR3 3NH
- **Phone**: [Insert Phone Number Here]
- **Email**: [Insert Email Here]

## ⚙️ Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/the-fone-village.git
   cd the-fone-village
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Deployment

1. For frontend-only deployment (static), use the `bbb.html` file
2. For full functionality with payments, deploy both frontend and backend
3. Set environment variables on your hosting platform
4. Configure Stripe webhooks with your production domain

## 🔒 Security Notes

- Never commit `.env` files with real API keys
- Use HTTPS in production
- Regularly update dependencies
- Monitor Stripe dashboard for suspicious activity

## 📝 API Endpoints

- `POST /confirm-order` - Confirm order after payment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
   ```
   git clone https://github.com/your-username/the-fone-village.git
   ```

2. Open `bbb.html` in your web browser to view the site.

3. For development, you can use any code editor (e.g., VS Code) and a local server for better testing.

## 📝 License

This project is open source. Feel free to use and modify as needed.

Clone the Repository:

Bash

git clone https://github.com/YOUR_USERNAME/mr-broast.git
Navigate to the folder:

Bash

cd mr-broast
Open: Open the index.html file in your preferred web browser (or use a local development server like VS Code's Live Server extension).