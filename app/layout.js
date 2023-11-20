import { Roboto } from "next/font/google";
import "./globals.css";

const poppins = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Balashaq",
  description: "Вырастите физически и психически здорового ребенка",
  content: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
