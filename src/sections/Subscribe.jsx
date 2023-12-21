import Button from "../components/Button"

const Subscribe = () => {
  return (
    <>
      <section
        id="contact-us"
        className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
      >
        <h3 className="z-10 font-palanquin text-4xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">
          Sign Up from{" "}
          <span className="text-coral-red inline-block"> Updates</span> &
          Newsletter
        </h3>
        <div className="w-full lg:max-w-[50%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray rounded-full">
          <input
            className="input"
            type="text"
            placeholder="subscribe@nike.com"
          />
          <div className="flex items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
