

export const metadata = {
  title: 'QuizoO',
  description: 'Réviser autrement',
  icons: "/cerveau.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body >
   
        {children}
      
      </body>
    </html>
  );
}
