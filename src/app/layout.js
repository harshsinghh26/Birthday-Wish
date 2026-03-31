import "./globals.css";

export const metadata = {
  title: "Your Birthday Surprise is Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
