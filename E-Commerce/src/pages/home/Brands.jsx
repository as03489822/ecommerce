import Brand1 from "../../assets/brand/Group (1).png"
import Brand2 from "../../assets/brand/Group.png"
import Brand3 from "../../assets/brand/gucci-logo-1 1.png"
import Brand4 from "../../assets/brand/Vector (3).png"
import Brand5 from "../../assets/brand/zara-logo-1 1.png"

export default function Brands(){
    const brandImages = [
        { src: Brand2, alt: "Brand 2" },
        { src: Brand5, alt: "Zara Logo" },
        { src: Brand3, alt: "Gucci Logo" },
        { src: Brand1, alt: "Brand 1" },
        { src: Brand4, alt: "Brand 4" }
      ];
    return(
        <div className="flex justify-around py-5  flex-wrap md:justify-around  items-center h-[146px] md:h-[122px]" >
            {brandImages.map((brand , index) => (
                <img key={index} src={brand.src} alt={brand.alt}  className="  h-[27px] object-cover " />
            ))}
        </div>
    )
}