import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics } from "../constants"
import { useState } from "react"
import { bigShoe1 } from "../assets/images"
import { shoes } from "../constants/index"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShowImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center min-h-screen gap-10 max-container select-none">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 ">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montefont-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.{" "}
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex flex-row flex-wrap gap-16 w-full mt-20 justify-start items-start">
          {statistics.map((stat, idx) => {
            return (
              <div key={idx}>
                <p className="text-4xl font-palanquin flex-wrap w-full mt-20 gap-16">
                  {stat.value}
                </p>
                <p
                  className="leading-7 font-montserrat text-slate-gray
                "
                >
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="rounded-xl relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center ">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10 top-[-6rem]"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((img, idx) => (
            <ShoeCard
              key={idx}
              imgURL={img}
              changeBigShoeImage={(shoe) => setBigShowImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
