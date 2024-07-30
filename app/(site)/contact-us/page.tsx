import ItemBox from "@/components/ItemBox";
import ItemTitle from "@/components/ItemTitle";
import PageContentWrapper from "@/components/PageContentWrapper";
import PageTitleCover from "@/components/PageTitleCover";
import ShareWidget from "@/components/ShareWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* PageTitleCover */}
       <PageTitleCover title="Contact Us" subtitle="We are here to help. Reach out to us anytime." label="Donate Now" link="#" />
       <PageContentWrapper>
          <h2>HOW TO REACH US</h2>
          <h3>Our national office is located in Accra, Ghana. We work with partners, supporters, volunteers and philanthropists across the country. No matter where you live in Ghana, we are here for you.</h3>
          <p>If an employee, volunteer, partner, consultant or contractor suspects misconduct has occurred, or is about to occur, we encourage you to communicate your suspicions without fear of reprisal and in the knowledge that you will be protected from victimization and dismissal.</p>
          <p>To report misconduct, please <a>fill out our confidential reporting form here</a>, email us at <a>info@adehyecharity.com</a> or Call us at Phone: <a>27-767-0000</a></p>
          <hr/>
          <div className="py-6 md:mx-auto md:w-4/5 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm md:text-lg">
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">MAILING ADDRESS</h4>
              <p>
                Adehye Charity Organisation<br/>
                Accra<br/>
                Ghana - West Africa
              </p>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">CONTACT US BY PHONE</h4>
              <p>
                Tel: +233 (24) 000-3456 <br />
                Fax: +233 (24) 000-3456
              </p>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">CONTACT US BY EMAIL</h4>
              <p>
                General Inquiries
                info@adehyecharity.com <br />

                Donor inquiries 
                info@adehyecharity.com
              </p>
            </div>
            <div className="flex flex-col space-y-1 md:space-y-6">
              <h4 className="text-base md:text-xl font-bold">MEDIA REQUESTS</h4>
              <p>
                Elizabeth<br/>
                Manager, Communications <br />
                (277) 767-0000 <br />
                adehyecharity@gmail.com
              </p>
            </div>
          </div>
       </PageContentWrapper>
       <ShareWidget />
    </main>
  );
}
