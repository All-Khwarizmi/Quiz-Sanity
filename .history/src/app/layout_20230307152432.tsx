import './globals.css'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'QuizoO',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
