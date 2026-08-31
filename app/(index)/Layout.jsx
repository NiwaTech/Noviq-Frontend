import Header from "@/components/builders/LandingPage/layout/Header";
import Footer from "@/components/builders/LandingPage/layout/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
