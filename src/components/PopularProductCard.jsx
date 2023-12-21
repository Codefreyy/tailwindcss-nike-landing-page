import { star } from "../assets/icons"

function PopularProductCard({ img }) {
  return (
    <>
      <div className="flex flex-1 flex-col max-md:flex-row gap-4 w-full">
        <img
          src={img.imgURL}
          alt={img.name}
          width={300}
          height={200}
          className="object-contain"
        />

        <div>
          <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating icon" width={20} height={20} />
            <p className="font-montserrat md:text-lg text-sm leading-normal text-slate-gray font-semibold">
              4.5
            </p>
          </div>

          <h3 className="mt-2 leading-normal font-semibold font-palanquin text-xl md:text-xxl">
            {img.name}
          </h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl md:text-xxl leading-normal">
            {img.price}
          </p>
        </div>
      </div>
    </>
  )
}

export default PopularProductCard
