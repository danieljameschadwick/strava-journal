import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "../styles/globals.css";

export const metadata = {
  title: "Strava Journal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
