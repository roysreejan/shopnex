# ShopNex

ShopNex is a modern e-commerce platform built with **React** and **Vite**. It provides a seamless shopping experience with features like product browsing, detailed product pages, a shopping cart, and contact forms.

## Features

- **Home Page**: A visually appealing homepage showcasing featured products.
- **Product Details**: Detailed product pages with descriptions, prices, and an "Add to Cart" feature.
- **Contact Page**: A stylish contact form for users to reach out.
- **About Us Page**: Learn more about the mission and vision of ShopNex.
- **Products Page**: A grid layout showcasing all available products.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **Smooth Animations**: Powered by `framer-motion` for a modern UI experience.

---

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Animations**: Framer Motion
- **Icons**: React Icons

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/roysreejan/shopnex
   ```

2. Navigate to the project directory:
     ```bash
   cd shopnex
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Folder Structure

```
shopnex/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx    # Header component
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Sidebar.jsx   # Sidebar component
│   │   └── ...           # Other reusable components
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Home page
│   │   ├── Products.jsx  # Products page
│   │   ├── ProductDetails.jsx # Product details page
│   │   ├── Contact.jsx   # Contact page
│   │   ├── About.jsx     # About Us page
│   │   └── ...           # Other pages
│   ├── contexts/         # Context API for state management
│   │   ├── ProductContext.jsx # Product context
│   │   ├── CartContext.jsx    # Cart context
│   │   └── SidebarContext.jsx # Sidebar context
│   ├── assets/           # Static assets like images and logos
│   │   ├── logo.svg      # Logo file
│   │   └── ...           # Other assets
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point of the application
│   └── index.css         # Global CSS styles
├── public/               # Public assets
│   ├── favicon.ico       # Favicon
│   └── ...               # Other public files
├── README.md             # Project documentation
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration file
├── .gitignore            # Git ignore file
└── LICENSE               # License file (if applicable)
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The `vercel.json` file ensures that all routes are rewritten to `index.html` for a single-page application.
The live project is available at: `https://shopnexx.vercel.app/`

To deploy:

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel

2. Deploy the project:

   ```bash
   vercel

## Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Run ESLint to check for code quality issues.

## Pages

1. **Home Page**  
   The homepage displays featured products and a hero section.

2. **Products Page**  
   A grid layout showcasing all available products.

3. **Product Details Page**  
   Detailed information about a specific product, including price, description, and an "Add to Cart" button.

4. **Contact Page**  
   A contact form for users to send inquiries.

5. **About Us Page**  
   Information about the mission and vision of ShopNex.

## Acknowledgments

- Built with ❤️ using React and TailwindCSS.
- Icons and images sourced from the project's assets folder.