import HumanoidCard from "@/components/builders/AuthPage/HumanoidCard";
import Authcard from "@/components/builders/AuthPage/AuthCard";

export default function Auth() {
  return (
    <main className="min-h-screen zoom-[90%] overflow-hidden bg-[#faf7ff]">
      <div className="relative mx-auto grid min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#ffffff_0%,#f3ebff_50%,#eae0ff_100%)] lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.92fr_1.08fr]">
        <HumanoidCard />
        <Authcard />
      </div>
    </main>
  );
}