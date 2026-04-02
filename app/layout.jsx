export const metadata = {
  title: "Stephen Scott",
  description: "Educational Vitae"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
