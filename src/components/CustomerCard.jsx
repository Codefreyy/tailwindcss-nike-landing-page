import { star } from "../assets/icons"

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          src={imgURL}
          alt={`${customerName} profile`}
          className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating star icon" width={20} height={20} />
          <p className="font-montserrat md:text-lg text-sm leading-normal text-slate-gray font-semibold">
            {rating}
          </p>
        </div>

        <h3 className="mt-2 leading-normal font-semibold font-palanquin text-xl md:text-xxl">
          {customerName}
        </h3>
      </div>
    </>
  )
}

export default CustomerCard
