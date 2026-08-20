import Header from "@/components/LandingPage/layout/Header";
import Footer from "@/components/LandingPage/layout/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
