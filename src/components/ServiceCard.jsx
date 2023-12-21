const ServiceCard = ({ imgURL, label, subtext }) => {
  console.log(imgURL, 1)
  return (
    <div className="flex flex-col flex-1  w-full rounded-3xl shadow-3xl px-10 py-16 gap-3">
      <img src={imgURL} alt={label} className="w-[40px] h-[40px]" />
      <h2 className="font-montserrat text-xl font-bold">{label}</h2>
      <p className="mt-3 break-words font-montserrat md:text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard
