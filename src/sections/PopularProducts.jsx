import PopularProductCard from "../components/PopularProductCard"
import ShoeCard from "../components/ShoeCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <>
      <h1 className="z-10 font-palanquin text-4xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">
        Our <span className="text-coral-red inline-block"> Popular</span>{" "}
        Products
      </h1>
      <p className="font-montserrat text-slate-gray text-md max-sm:text-sm leading-8 mt-6 mb-14 sm:max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design and value.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:gap-4 gap-8">
        {products.map((img, idx) => {
          return <PopularProductCard key={idx} img={img} />
        })}
      </div>
    </>
  )
}

export default PopularProducts
