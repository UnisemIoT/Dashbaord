# UnisemIoT Landing Page

A modern, responsive landing page for UnisemIoT.com - an AI-Integrated IoT Platform built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and purple gradients
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Interactive Components**: Demo dashboard, testimonial carousel, pricing comparison
- **Contact Form**: Integrated with reCAPTCHA for security
- **GDPR Compliance**: Cookie consent popup
- **AI Chatbot**: Interactive FAQ assistant widget
- **Google Maps**: Embedded office location map

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Lucide React icon library
- **EmailJS** - Contact form integration
- **Google reCAPTCHA** - Form security
- **Vite** - Fast development and build tool

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone (https://github.com/UnisemIoT/Dashbaord.git)
   cd unisemiot-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`



## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on push



## 📱 Responsive Design

The landing page is optimized for all screen sizes:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first navigation with hamburger menu
- Responsive grid layouts
- Optimized font sizes and spacing
- Touch-friendly interactive elements

## 🔒 Security Features

- **GDPR Compliance**: Cookie consent popup
- **reCAPTCHA**: Form spam protection
- **Content Security**: No inline scripts or styles
- **HTTPS Ready**: Secure deployment configuration

## 📊 Performance

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Optimized bundle sizes
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed images and minified code

## 🤖 Chatbot Integration

The AI chatbot widget includes:
- **FAQ Responses**: Pre-defined answers for common questions
- **Real-time UI**: Typing indicators and message animations
- **Persistent State**: Maintains conversation during session
- **Mobile Optimized**: Responsive design for all devices

To enhance the chatbot:
1. Integrate with a backend API for dynamic responses
2. Add more sophisticated NLP capabilities
3. Connect to your support ticket system

## 📈 Analytics

To add analytics tracking:

1. **Google Analytics:**
   ```bash
   npm install gtag
   ```

2. **Add tracking code** to `index.html`

3. **Track events** in component interactions

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working:**
   - Ensure Framer Motion is properly installed
   - Check for JavaScript errors in console

2. **Responsive issues:**
   - Test on actual devices, not just browser resize
   - Check Tailwind breakpoint usage

3. **Form submission fails:**
   - Verify reCAPTCHA configuration
   - Check network connectivity
   - Ensure CORS settings if using external APIs

## 📞 Support

For technical support or customization requests:
- Email: info@unisemiot.com
- Documentation: Check component comments for detailed usage
- Issues: Create GitHub issues for bugs or feature requests

**Built with ❤️ for UnisemIoT - Empowering IoT Networks with Intelligent AI**
