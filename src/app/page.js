import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import Service from "@/components/Service/Service";
import Slider from "@/components/Slider/Slider";
import serviceData from '@/data/service.json'
import PaymentGatewayTwo from './../components/PaymentGateway/PaymentGatewayTwo';
import FormRequest from "@/components/FormRequest/FormRequest";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
          <TopNav/>
          <Menu/>
      </header>
      <main className="content">
        <Slider/>
        <Service data={serviceData}/>
        <PaymentGateway/>
        <CaseStudy/>
        <PaymentGatewayTwo/>
        <FormRequest/>
      </main>
    </div>
  );
}
