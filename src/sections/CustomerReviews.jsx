import CustomerCard from "../components/CustomerCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container gap-40 justify-center flex flex-1 max-lg:flex-col  max-lg:gap-20">
      {reviews.map((review, idx) => {
        return <CustomerCard key={idx} {...review} />
      })}
    </section>
  )
}

export default CustomerReviews
