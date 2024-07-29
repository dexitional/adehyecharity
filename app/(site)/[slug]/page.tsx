import ItemBox from "@/components/ItemBox";
import ItemTitle from "@/components/ItemTitle";
import PageContentWrapper from "@/components/PageContentWrapper";
import PageTitleCover from "@/components/PageTitleCover";
import ShareWidget from "@/components/ShareWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* PageTitleCover */}
       <PageTitleCover title="OUR PAGES" subtitle="" label="Explore More ..." link="#" />
       <PageContentWrapper>
          <h2>OTHER PAGES CONTENT SUB TITLES</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis laborum deleniti nesciunt ab vel quos voluptates suscipit aut tenetur quaerat nisi dolores necessitatibus non et rem distinctio, consectetur, officia tempore ipsum quam. Incidunt, hic voluptate qui, tempora explicabo iure maxime repellat nostrum cupiditate autem voluptates reprehenderit dolores neque minima possimus natus sequi reiciendis. Repudiandae facilis placeat ratione magni assumenda magnam doloribus atque iusto quam a quia blanditiis molestias sed quod dolores inventore veniam impedit error, et repellendus voluptates quibusdam. Aliquid, ab. Beatae sit deleniti blanditiis sint asperiores expedita, repudiandae maiores hic nostrum. Placeat necessitatibus numquam facilis, laboriosam quas impedit?</p>
          <p>Please use the test link. <a href="">Click to link</a></p>
       </PageContentWrapper>
       <ShareWidget className="shadow-[0px_-2px_8px_#f1f2f3]" />
    </main>
  );
}
