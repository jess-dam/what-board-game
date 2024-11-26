import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center bg-black text-white p-2">
        {children}
      </body>
    </html>
  );
}
