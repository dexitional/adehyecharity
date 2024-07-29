import ItemBox from "@/components/ItemBox";
import ItemTitle from "@/components/ItemTitle";
import PageContentWrapper from "@/components/PageContentWrapper";
import PageTitleCover from "@/components/PageTitleCover";
import ShareWidget from "@/components/ShareWidget";
import Image from "next/image";
import Bg from '@/public/b3.jpg'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BioCard from "@/components/BioCard";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* PageTitleCover */}
       <PageTitleCover title="Our People" subtitle="We believe that the best people to help communities living in poverty are community members themselves" label="Donate Now" link="#" />
       <PageContentWrapper>
          <h2>ADEHYE CHARITY ORGANISATION IS PART OF A GLOBAL MOVEMENT OF PEOPLE</h2>
          <h3>We depend on and value our staff, volunteers and Board, whose hard work, experience, commitment, and vision ensures our organization achieves its goals.</h3>
       </PageContentWrapper>
       <div className="w-full">
          <div className="px-3 py-6 md:py-10 mx-auto md:max-w-4xl font-sans grid grid-cols-1 gap-4 md:gap-10">
              <h3 className="text-[1.7rem] font-black">BOARD OF DIRECTORS, 2022-2025</h3>
              
              <div className="py-3 w-full md:py-6 grid grid-cols-1 md:grid-cols-1 gap-20">
                <BioCard />
                <BioCard />
                <BioCard />
              </div>
          </div>
       </div>
       <ShareWidget />
    </main>
  );
}
