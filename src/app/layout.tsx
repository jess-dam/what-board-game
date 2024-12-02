import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <body className="flex items-center place-self-center p-5 w-screen h-screen md:max-w-[768px]">
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
