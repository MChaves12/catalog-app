import { Hero, About, ShopByEssentials, WhoWeAre, Footer } from "./sections";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main>
      <Nav />

      <section>
       <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <ShopByEssentials />
      </section>

      <section>
        <WhoWeAre />
      </section>

      <section className="bg-black padding-x padding-t pb-8 mt-10">
        <Footer />
      </section>
      
    </main>
  )
}