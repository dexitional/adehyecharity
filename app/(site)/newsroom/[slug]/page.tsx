import ArticleHeader from "@/components/ArticleHeader";
import PageContentWrapper from "@/components/PageContentWrapper";
import ShareWidget from "@/components/ShareWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* <PageTitleCover title="Our Story" subtitle="Building the best collaboration" /> */}
       <ArticleHeader 
          title="ISRAEL BREACHES INTERNATIONAL HUMANITARIAN LAW BY FORCING 250,000 PALESTINIANS IN GAZA INTO “DEATH TRAP”" 
          publishedAt="July 6, 2024" 
       />
       <PageContentWrapper>
          <p>Adehye Charity Organisation is an affiliate of the international networked in 87 countries as part of a global movement for change.</p>
          <div>Our mission is to build lasting solutions to poverty and injustice, focusing on improving lives and promoting the rights of women and girls.</div>
          <div>We work directly with communities, partners and womens rights organizations to challenge the systems perpetuating inequality and keeping people poor. Together we seek to influence those in power to ensure that women trapped in poverty have a say in the critical decisions that affect them, their families and entire communities.</div>
          <blockquote>Poverty is a problem rooted in inequality. If we fight inequality, we will beat poverty.</blockquote>
          <br />
          <h2>WE HAVE BEEN IN CANADA SINCE 1963</h2>
          <p>The name ACO comes from the Oxford Committee for Famine Relief, founded in Britain in 1942 by a group of intellectuals, social activists, and Oxford academics. During the Second World War, the group campaigned for food supplies to be sent through an allied naval blockade to starving women and children in enemy-occupied Greece.</p>
          <p>Kobby is going to do well <a href="">Click to link</a></p>
       </PageContentWrapper>
       <ShareWidget />
       

    </main>
  );
}
