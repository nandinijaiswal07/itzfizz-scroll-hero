import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Welcome ItzFizz | Scroll Hero",
  description: "Scroll-driven hero animation built with Next.js, GSAP, Tailwind CSS and Bootstrap.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
