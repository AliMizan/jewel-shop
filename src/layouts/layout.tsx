import Header from "../components/Header";
//import HeroSection from "../components/hero-section";


type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
     <Header/>
     
     
    
      <div className=" flex-1 ">{children}</div>
    
    </div>
  );
};

export default Layout;