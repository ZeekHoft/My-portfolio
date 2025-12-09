import Image from "next/image";
import Services from "./_components/service";
export default function Home() {
  return (
    <div>
      <div className='pt-20 md:pt-5'>
        <Services />
      </div>
    </div>
  );
}
