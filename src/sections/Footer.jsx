import { copyrightSign, facebook, instagram, twitter } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <section className="flex max-lg:flex-col justify-between text-white gap-20 ">
          <div className="flex flex-col  gap-8">
            <img
              src={footerLogo}
              alt="nike footer logo"
              width={150}
              height={46}
            />
            <p className="max-w-md font-montserrat  text-slate-gray">
              {" "}
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store.{" "}
            </p>
            <div className="flex gap-2 items-center ">
              {socialMedia.map((icon) => (
                <div
                  key={icon.alt}
                  className="bg-white rounded-full w-[32px] h-[32px] flex justify-center items-center"
                >
                  <a href="#">
                    <img src={icon.src} alt={icon.alt} width={16} height={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex  justify-between gap-20 font-montserrat max-md:flex-wrap max-md:justify-start">
            {footerLinks.map((menu) => {
              return (
                <div key={menu.title}>
                  <h4 className="font-medium mb-5 text-xl">{menu.title}</h4>
                  <ul className="space-y-3 text-slate-gray">
                    {menu.links.map((item) => (
                      <li key={item.name} className="hover:text-coral-red">
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>
        <section>
          <div className="flex  justify-between text-slate-gray mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <img
                src={copyrightSign}
                alt="copyright sign"
                width={20}
                height={20}
                className="rounded-full m-0"
              />
              <p>Copyright. All rights reserved.</p>
            </div>
            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
