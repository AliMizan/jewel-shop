import { Link } from "react-router-dom";
import necklace from "../assets/necklace.png";
import ear from "../assets/ear.png";
import bracelet from "../assets/bracelet.png";
import ring from "../assets/ring.png";
Link
const categories = [
    {
        name: "Necklaces",
        image: necklace,
        link: "/products/necklaces"
    },
    {
        name: "Earrings",
        image: ear,
        link: "/products/earrings"
    },
    {
        name: "Bracelets",
        image: bracelet,
        link: "/products/bracelets"
    },
    {
        name: "Rings",
        image: ring,
        link: "/products/rings"
    }
];

const CategoriesSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">Our Collections</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <Link key={index} to={category.link} className="group">
                            <div className="relative overflow-hidden rounded-lg h-64">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center" >
                                    <p className="text-xl text-white">{category.name}</p>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
