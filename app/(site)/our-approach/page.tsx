import ItemBox from "@/components/ItemBox";
import ItemTitle from "@/components/ItemTitle";
import PageContentWrapper from "@/components/PageContentWrapper";
import PageTitleCover from "@/components/PageTitleCover";
import ShareWidget from "@/components/ShareWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* PageTitleCover */}
       <PageTitleCover title="Our Approach" subtitle="" label="Explore More ..." link="#" />
       <PageContentWrapper>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fugit!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id mollitia maxime omnis, suscipit dignissimos dolore ullam aut qui obcaecati fuga! Nulla incidunt in ullam architecto debitis, veritatis sequi quibusdam quo sunt, mollitia qui quidem voluptate tenetur ut ad corrupti voluptas? Ratione laboriosam officia quisquam optio delectus accusantium, eligendi sit.</p>
       </PageContentWrapper>
       <ShareWidget />
    </main>
  );
}
