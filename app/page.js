import Image from "next/image";
import Services from "./_components/service";
import { AnimatedBeams } from "./_components/animatedbg";

export default function Home() {
  return (
    <div>

      <div className="w-screen h-screen relative z-0 ">
        <AnimatedBeams />
      </div>

      <div className='pt-20 md:pt-5 relative z-0 '>
        <Services />
      </div>
    </div>
  );
}
