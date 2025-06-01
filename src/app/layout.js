// src/app/layout.js
import './globals.css'; // Import global styles
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata = {
  title: 'IndusPlast Co. - Industrial Solutions',
  description: 'Delivering high-quality, durable plastic components for various industries.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon link can go here, e.g., <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}