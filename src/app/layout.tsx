import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center place-self-center bg-black text-white p-2 w-screen h-screen md:max-w-[768px]">
        {children}
      </body>
    </html>
  );
}
