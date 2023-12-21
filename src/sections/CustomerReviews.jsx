import CustomerCard from "../components/CustomerCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <>
      <h3 className="z-10 font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red inline-block">Customers</span>{" "}
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <section className="max-container mt-24 gap-14 justify-evenly flex flex-1 max-lg:flex-col  max-lg:gap-20">
        {reviews.map((review, idx) => {
          return <CustomerCard key={idx} {...review} />
        })}
      </section>
    </>
  )
}

export default CustomerReviews
