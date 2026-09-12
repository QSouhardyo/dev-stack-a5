import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { TechnologyType } from "./type";
import Footer from "./components/Footer";



const fetchDevs = async (): Promise<TechnologyType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {

  // const devPromises = fetchDevs()

  const [devPromises] = useState(() => fetchDevs())


  return (
    <div>
      <Navbar></Navbar>
      <main className="md:max-w-[700px] lg:max-w-[1200px] mx-auto pt-16 lg:pt-0 ">
        <Banner></Banner>

        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Technologies devPromises={devPromises}></Technologies>
        </Suspense>


      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;