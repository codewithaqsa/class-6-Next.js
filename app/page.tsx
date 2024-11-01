import Image from "next/image";
import HeroImage from "@/public/Hero.png.png";
export default function Home() {
  return (
   

    <div className="flex justify-between items-center h-screen">
      <div className="w-1/2 mx-12">
      <div className="flex flex-col gap-6">
      <h1 className="font-bold text-5xl">Welcome to our Website</h1>
      

      <p className="text-[32px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </p>
      <button className="bg-black text-white w-[237px] h-[66px] ">
        Contact Us
      </button>
    </div>
      </div>

      <div className="w-1/2 ">
      
      <div className="w-[502px] h-[465px]">
        <Image src={HeroImage} alt="Hero-Image"
        style={{border: '1px solid bold'}}/>
      </div>

      {/* <div className="w-[502px] h-[465px] bg-slate-600 "> */}

      </div>
      </div>
    
  );
}