/** Resources */
import { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { Footer, Menu } from '@components';

/** Styles */
import './styles.css';

/** Font configuration */
const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Marvel Comics Library',
  description: 'Practice project: a Marvel comics library with details about stories, characters, and creators. Explore the Marvel universe!',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body id='root' className={inter.className}>
        <Menu />
        <main id='main' data-testid='main'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};
