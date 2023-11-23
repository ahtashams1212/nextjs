import Button from "@/component/button";
import Button2 from "@/component/button2";
import Image from "next/image";
import ss from "../../public/ss.jpg"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
     <Image src={ss} width={300} height={200} alt={""} className="border-2 border-white-500 square-3xl "></Image>
      <h1 className="font-bold text-3xl text-Black-500">
       Unlock Your True Potential and Soar to New Heights with Samina Shafique

      </h1>
      <p>
        Power Eagles 🦅🔥
Transforming Lives: Your Path to Becoming a 7-Figure Earner in Pakistan Awaits
      </p>
      <p>
      Join the movement of students, doctors, and teachers achieving financial freedom through innovative work-from-home opportunities.
      </p>
      <div>
        
        <Button2 href ="https://surveyheart.com/form/63956548e5e6aa233204092f">Join us</Button2>
      </div>
    </main>
  );
}