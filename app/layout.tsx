import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from './header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rede Esperanca Viva',
  description:
    'Portal semantico para apresentar projetos sociais e cadastrar colaboradores com validacoes e mascaras de entrada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <footer className="site-footer">
          <div className="container">
            <p>Rede Esperanca Viva - solidariedade organizada com transparencia.</p>
            <a href="mailto:contato@redeesperancaviva.org">
              contato@redeesperancaviva.org
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
