import Nav from "./components/Nav"
import {
  SpecialOffer,
  PopularProducts,
  Footer,
  Services,
  Hero,
  SuperQuality,
  CustomerReviews,
  Subscribe,
} from "./sections"

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-64 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-y">
      <Footer />
    </section>
  </main>
)

export default App
