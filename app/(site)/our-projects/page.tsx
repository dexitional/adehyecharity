import ItemBox from "@/components/ItemBox";
import ItemTitle from "@/components/ItemTitle";
import PageContentWrapper from "@/components/PageContentWrapper";
import PageTitleCover from "@/components/PageTitleCover";
import ShareWidget from "@/components/ShareWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* PageTitleCover */}
       <PageTitleCover title="Our Projects" subtitle="" label="Explore More ..." link="#" />
       <PageContentWrapper>
          <h2>LONG-TERM SOLUTIONS FOR A MORE EQUAL WORLD</h2>
          <h3>We work with local partners to come up with long-lasting, far-reaching solutions that enable people in poverty, especially women and girls, to provide for themselves, their families and communities in a sustainable way — because food security, safety, education, and earning a decent living are rights, not privileges.</h3>
       </PageContentWrapper>
       
       <div className="w-full">
          <div className="px-3 py-6 md:py-10 mx-auto md:max-w-6xl font-sans grid grid-cols-1 gap-4 md:gap-10">
              <ItemTitle title="EXPLORE OUR PROJECTS" />
              
              <ItemBox
                title="BOREHOLE PROJECTS IN ASINADZE COMMUNITIES"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi odio maxime repellat. A ab, minima doloremque culpa totam expedita placeat."
                label="Learn More"
                link=""
              />

              <ItemBox
                title="DONATION OF SEEDS AND SEEDLINGS TO FARMERS IN KWAO EAST MUNICIPALITY"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi odio maxime repellat. A ab, minima doloremque culpa totam expedita placeat."
                label="Learn More "
                link=""
              />
             
          </div>
          <ShareWidget />
       </div>
    </main>
  );
}
