import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex-1">{children}</body>
    </html>
  );
}
