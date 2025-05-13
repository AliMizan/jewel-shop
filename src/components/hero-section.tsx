
import hero from "../../public/Hero2.jpg"


const HeroSection = () => {
  return (
    // <div className="relative h-[70vh] md:h-[80vh] bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80')`}}>
    //   <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    //   <div className="absolute inset-0 flex items-center justify-center">
    //     <div className="text-center px-4">
    //       <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Timeless Elegance</h1>
    //       <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Discover our exclusive collection of handcrafted jewelry pieces</p>
    //       <Link to="/products">
    //         <Button size="lg" className="bg-primary hover:bg-primary/80">
    //           Explore Collection
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="relative">
  <img src={hero} className="w-full h-[70vh] md:h-[80vh] object-cover" />

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Text content */}
  <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Timeless Elegance</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Discover our exclusive collection of handcrafted jewelry pieces</p>
          
        </div>
      </div>
</div>
  );
};

export default HeroSection;
