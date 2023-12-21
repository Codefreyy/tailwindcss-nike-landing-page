import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="max-container justify-center flex flex-1 gap-9 max-lg:flex-col">
      {services.map((service, idx) => {
        return <ServiceCard {...service} key={idx} />
      })}
    </div>
  )
}

export default Services
