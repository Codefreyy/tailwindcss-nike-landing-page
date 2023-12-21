import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="max-container justify-center flex flex-wrap gap-9 ">
      {services.map((service, idx) => {
        return <ServiceCard {...service} key={idx} />
      })}
    </div>
  )
}

export default Services
