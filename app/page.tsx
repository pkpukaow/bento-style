import Footer from "@/components/footer";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full h-full gap-6 mx-auto xl:gap-10 xl:flex-row">
      {/* Left Side */}
      <LeftSide />
      {/* Right Side */}
      <RightSide />
      <div className="flex w-full p-8 pb-10 xl:hidden">
        <Footer />
      </div>
    </main>
  );
}
