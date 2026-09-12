import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import type { TechnologiesType } from './assets/types/type.ts';
import { Suspense } from "react";
import ExploreTheTechnologies from "./components/explore-the-technologies/ExploreTheTechnologies.tsx";


const technologiesPromise = async (): Promise<TechnologiesType[]> => {

  const res = await fetch('technologies-data.json');
  const data = await res.json();

  return data;
}


function App() {


  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense>
        <ExploreTheTechnologies technologiesPromise={technologiesPromise()}></ExploreTheTechnologies>
      </Suspense>
      <Footer></Footer>
    </>
  )


}


export default App;