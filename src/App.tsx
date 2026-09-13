import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import type { TechnologiesType } from './assets/types/type.ts';
import { Suspense } from "react";
import ExploreTheTechnologies from "./components/explore-the-technologies/ExploreTheTechnologies.tsx";
import { Flip, ToastContainer } from "react-toastify";
import LoadingSpinner from "./components/loading/LoadingSpinner.tsx";


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

      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <ExploreTheTechnologies technologiesPromise={technologiesPromise()}></ExploreTheTechnologies>
      </Suspense>
      <Footer></Footer>

      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        transition={Flip}
        closeOnClick={true}
        pauseOnFocusLoss={false}
        autoClose={2500}
      ></ToastContainer>
    </>
  )


}


export default App;