import Footer from "@/components/Footer";
import GlobalInsightWidget from "@/components/GlobalInsightWidget";
import Header from "@/components/Header"
import NewsLetterWidget from "@/components/NewsLetterWidget";
import NewsTitle from "@/components/NewsTitle";
import NewsWidget from "@/components/NewsWidget";
import PageContentWrapper from "@/components/PageContentWrapper";
import PageTitleCover from "@/components/PageTitleCover";
import PressBox from "@/components/PressBox";
import ShareWidget from "@/components/ShareWidget";
import SpotlightMain from "@/components/SpotlightMain";
import TakeActionWidget from "@/components/TakeActionWidget";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start">
       {/* <PageTitleCover title="Our Story" subtitle="Building the best collaboration" /> */}
       <NewsTitle />
       <div className="w-full bg-red-50">
          <div className="px-4 py-14 md:mx-auto md:max-w-6xl font-sans grid grid-cols-1 gap-10">
              <PressBox
                 title="TOP 1 PERCENT BAGS OVER $40 TRILLION IN NEW WEALTH DURING PAST DECADE AS TAXES ON THE RICH REACH HISTORIC LOWS"
                 link="/newsroom/slug"
                 category="Press Release"
                 categoryLink="#"
                 publishedAt="July 24, 2024"
              />
              <PressBox
                 title="TOP 1 PERCENT BAGS OVER $40 TRILLION IN NEW WEALTH DURING PAST DECADE AS TAXES ON THE RICH REACH HISTORIC LOWS"
                 link="#"
                 category="Press Release"
                 categoryLink="#"
                 publishedAt="July 24, 2024"
              />
              <PressBox
                 title="TOP 1 PERCENT BAGS OVER $40 TRILLION IN NEW WEALTH DURING PAST DECADE AS TAXES ON THE RICH REACH HISTORIC LOWS"
                 link="#"
                 category="Press Release"
                 categoryLink="#"
                 publishedAt="July 24, 2024"
              />
              <div className="py-10 flex items-center justify-center">
                    <button className="px-7 py-2.5 bg-[#44881b]">
                      <span className="text-xl text-white ">Load More ...</span>
                    </button>
              </div>
          </div>
       </div>
       <ShareWidget />
       

    </main>
  );
}
