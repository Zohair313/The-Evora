# THE EVORA - Luxury E-commerce Website

A premium, fully responsive e-commerce website built with React, Vite, Tailwind CSS, and Framer Motion. Featuring a luxury fashion brand aesthetic with minimal, clean design.

## 🎨 Design Philosophy

THE EVORA embodies luxury through simplicity. The design features:
- **Minimal Aesthetic**: Generous white space, clean lines, and elegant typography
- **Premium Typography**: Playfair Display for headlines, Inter for body text
- **Luxury Color Palette**: Off-white backgrounds, deep blacks, and warm gold accents
- **Smooth Interactions**: Subtle Framer Motion animations for refined user experience
- **Fully Responsive**: Mobile-first design that works beautifully on all devices

## ✨ Features

### Pages
- **Home Page**: Hero section, featured products, category showcase, promotional banner, and trust section
- **Shop Page**: Responsive product grid with filters (category, price, size, color)
- **Product Detail Page**: Large product images, detailed info, size/color selection, quantity control
- **Cart Page**: Full cart management with dummy items, promo codes, and order summary

### Components
- **Navbar**: Sticky navigation with mobile menu and cart icon
- **Footer**: Company info, links, newsletter signup, social links
- **ProductCard**: Reusable component with hover effects and product information
- **Responsive Grid**: Adaptive layouts for all screen sizes

### UI/UX Features
- Smooth hover effects on products
- Animated sections on scroll
- Color and size selection
- Quantity controls
- Promo code support
- Mobile-optimized navigation
- Accessibility-first approach

## 🛠 Tech Stack

- **React 18**: Latest React with hooks
- **Vite**: Ultra-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Framer Motion**: Subtle animations and transitions
- **JavaScript (ES6+)**: Modern JavaScript features

## 📁 Project Structure

```
the-evora/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Cart.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. **Create the project directory:**
```bash
mkdir the-evora
cd the-evora
```

2. **Initialize the project:**
```bash
npm init -y
```

3. **Install dependencies:**
```bash
npm install react react-dom react-router-dom framer-motion
npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

4. **Create Tailwind config files:**
```bash
npx tailwindcss init -p
```

5. **Create project structure:**
```bash
mkdir -p src/components src/pages src/data
```

6. **Copy all files** from the provided file list into their respective locations

### File Organization

Create these directories and copy the files accordingly:

**Configuration Files** (root directory):
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `package.json`

**Source Files** (src/ directory):
- `main.jsx` - Entry point
- `App.jsx` - Main app component
- `index.css` - Global styles
- `components/Navbar.jsx`
- `components/Footer.jsx`
- `components/ProductCard.jsx`
- `pages/Home.jsx`
- `pages/Shop.jsx`
- `pages/ProductDetail.jsx`
- `pages/Cart.jsx`
- `data/products.js`

### Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:3000`

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  'primary': '#1A1A1A',      // Main dark color
  'accent': '#D4A373',       // Gold accent
  'light': '#F9F8F5',        // Off-white
  // ... more colors
}
```

### Typography
The design uses:
- **Display**: Playfair Display (elegant, serif)
- **Body**: Inter (clean, sans-serif)

Fonts are loaded from Google Fonts in `index.css`

### Product Images
All product images are from Unsplash. Replace the URLs in `data/products.js` with your own images.

## 📱 Responsive Design

The site is fully responsive across all breakpoints:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1440px+

Test responsiveness with browser dev tools or visit on different devices.

## 🔧 Key Features Explained

### Promo Codes (Cart Page)
Try these test codes:
- `LUXURY20` - 20% discount
- `WELCOME10` - 10% discount

### Product Filtering
- Filter by category (Women, Men, Accessories)
- Price range slider
- Size selection
- Color picker

### Dynamic Features
- Cart counter in navbar
- Product ratings and reviews
- Stock status indicators
- Discount badges
- Related products section

## 🎯 Performance Optimizations

- Lazy loading of images
- Optimized animations (only essential)
- Clean CSS with Tailwind utilities
- Efficient React component structure
- Fast dev server with Vite

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized `dist/` folder.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

## 🌟 Best Practices Used

- Component-based architecture
- Reusable components
- Clean code structure
- Semantic HTML
- CSS utility-first approach
- Mobile-first responsive design
- Accessibility considerations
- Performance optimization
- Environmental variables ready

## 🔄 Future Enhancements

Consider adding:
- Backend API integration
- User authentication
- Real shopping cart (localStorage/backend)
- Product search functionality
- Wishlist feature
- User reviews and ratings
- Payment integration (Stripe/PayPal)
- Email notifications
- Analytics tracking

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues:
1. Check the React, Vite, and Tailwind documentation
2. Review the code comments
3. Test in different browsers
4. Check console for error messages

## 🎉 Ready to Go!

Your premium e-commerce website is ready to use. Customize it with your own brand, products, and content. The foundation is solid and scalable!

---

**Built with ❤️ using React, Vite, and Tailwind CSS**