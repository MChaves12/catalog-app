import { Hero, About, ShopByEssentials, WhoWeAre } from "./sections";
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
      
    </main>
  )
}