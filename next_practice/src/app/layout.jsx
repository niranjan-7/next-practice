import { Poppins } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next Practice',
  description: 'Sample next app',
  keywords:
    'next, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
