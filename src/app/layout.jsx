import "./globals.css";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Montserrat } from "next/font/google";
import SearchBar from "./_components/SearchBar";
import DeliveryProgress from "./_components/DeliveryProgress";
import ScrollToTop from "./_components/ScrollToTop";

const cinzel = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Baron | Thashaq Qocku",
  description: "Daha iyisi gelmedi. Mis mis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.className} antialiased bg-zinc-50 min-h-dvh flex flex-col`}
      >
        <div className="sticky top-0 z-50">
          <Header />
          <SearchBar />
        </div>
        <DeliveryProgress />
        <main className="flex flex-col gap-4 flex-1 bg-white">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
