import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="">
      <Header />

    <div className="absolute flex flex-col top-0 -z-50 w-full h-screen">
      <div className="relative w-full">
        <img 
          src="/about/blob-scene-haikei-mbl.svg" 
          alt="bg" 
          className="flex lg:hidden w-full h-full object-cover"
        />
        <img 
          src="/about/blob-scene-haikei.svg" 
          alt="bg" 
          className="hidden lg:flex w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full transform scale-x-[-1]">
        <img 
          src="/about/blob-scene-haikei-mbl.svg" 
          alt="bg" 
          className="flex lg:hidden w-full h-full object-cover"
        />
        <img 
          src="/about/blob-scene-haikei.svg" 
          alt="bg" 
          className="hidden lg:flex w-full h-full object-cover"
        />
      </div>
      </div>

        <div className="mt-16">
          <div className="mt-5">
            <div className="flex flex-col justify-end mx-10">
              <p className="font-semibold text-xl text-black mt-5 italic underline text-end">ERP Home</p>
              <p className="font-normal text-xs lg:text-lg text-black mt-2 ml-5 lg:ml-80 text-right">Welcome to ERP Home, where we redefine business management with cutting-edge solutions tailored for the modern entrepreneur. As your trusted partner, we are dedicated to transforming the way you handle your business operations. Our mission is to empower entrepreneurs and businesses of all sizes by providing an intuitive and efficient ERP system that not only simplifies but also revolutionizes the management of inventory, sales, and profits.</p>
            </div>
            <div className="flex flex-col justify-center items-center my-5 lg:my-10">
              <Image 
                src="/about/undraw_data_points_re_vkpq.svg" 
                alt="Data Points"
                width={400} // Set your desired width
                height={300} // Set your desired height
                className="flex justify-center"
              />
            </div>
            <div className="flex flex-col justify-start items-center my-5">
              <p className="font-bold text-xs lg:text-lg text-black mx-10 mr-32 lg:mr-96 text-left italic">"Join the growing community of businesses that trust for their ERP needs. Let us help you streamline your operations, maximize your profits, and achieve your business goals."</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="mt-5">
            <div className="flex flex-col justify-end mx-10">
              <p className="font-semibold text-xl text-black mt-5 italic underline text-end">ERP Home</p>
              <p className="font-normal text-xs lg:text-lg text-black mt-2 ml-5 lg:ml-80 text-right">Welcome to ERP Home, where we redefine business management with cutting-edge solutions tailored for the modern entrepreneur. As your trusted partner, we are dedicated to transforming the way you handle your business operations. Our mission is to empower entrepreneurs and businesses of all sizes by providing an intuitive and efficient ERP system that not only simplifies but also revolutionizes the management of inventory, sales, and profits.</p>
            </div>
            <div className="flex flex-col justify-center items-center my-5 lg:my-10">
              <Image 
                src="/about/undraw_data_points_re_vkpq.svg" 
                alt="Data Points"
                width={400} // Set your desired width
                height={300} // Set your desired height
                className="flex justify-center"
              />
            </div>
            <div className="flex flex-col justify-start items-center my-5">
              <p className="font-bold text-xs lg:text-lg text-black mx-10 mr-32 lg:mr-96 text-left italic">"Join the growing community of businesses that trust for their ERP needs. Let us help you streamline your operations, maximize your profits, and achieve your business goals."</p>
            </div>
          </div>
        </div>
    </main>
  );
}
