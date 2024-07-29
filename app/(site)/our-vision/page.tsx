import ItemBox from "@/components/ItemBox";
import ItemTitle from "@/components/ItemTitle";
import PageContentWrapper from "@/components/PageContentWrapper";
import PageTitleCover from "@/components/PageTitleCover";
import ShareWidget from "@/components/ShareWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* PageTitleCover */}
       <PageTitleCover title="Our Mission, Vision And Values" subtitle="" label="Explore More ..." link="#" />
       <PageContentWrapper>
          <h2>WE’VE BEEN IN GHANA SINCE 2022</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id mollitia maxime omnis, suscipit dignissimos dolore ullam aut qui obcaecati fuga! Nulla incidunt in ullam architecto debitis, veritatis sequi quibusdam quo sunt, mollitia qui quidem voluptate tenetur ut ad corrupti voluptas? Ratione laboriosam officia quisquam optio delectus accusantium, eligendi sit.</p>
       </PageContentWrapper>
       
       <div className="w-full">
          <div className="px-3 py-6 md:py-10 mx-auto md:max-w-6xl font-sans grid grid-cols-1 gap-4 md:gap-10">
              <ItemTitle title="OUR VALUES" />
              <ItemBox
                title="EQUALITY"
                content="We believe everyone has the right to be treated fairly and to have the same rights and opportunities."
                label="Learn More"
                link=""
              />

              <ItemBox
                title="EMPOWERMENT"
                content="We acknowledge and seek to expand people’s agency over their lives and the decisions that impact them."
                label="Learn More"
                link=""
              />

              <ItemBox
                title="INCLUSIVENESS"
                content="We embrace diversity and difference and value the perspectives and contributions of all people and communities in their fight against poverty and injustice."
                label="Learn More "
                link=""
              />
             
          </div>
          <ShareWidget />
       </div>
    </main>
  );
}
