import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10"
      >
        <div>
          <h1 className="z-10 font-palanquin text-4xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">
            We Provide You
            <br />
            <span className="text-coral-red inline-block">
              {" "}
              Super Quality
            </span>{" "}
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-md max-sm:text-sm leading-8 mt-6 sm:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed eto elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="font-montserrat text-slate-gray text-md max-sm:text-sm leading-8 mt-6 mb-8 sm:max-w-lg">
            Our dedication to detail and excellence ensures your satisfaction.
          </p>

          <Button label="View Details" />
        </div>

        <div>
          <img
            src={shoe8}
            alt="Shoe img"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </>
  )
}

export default SuperQuality
