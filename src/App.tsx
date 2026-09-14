import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import type { TechnologiesType } from './assets/types/type.ts';
import { Suspense, useEffect } from "react";
import ExploreTheTechnologies from "./components/explore-the-technologies/ExploreTheTechnologies.tsx";
import { Flip, ToastContainer } from "react-toastify";
import LoadingSpinner from "./components/loading/LoadingSpinner.tsx";


const fetchTechnologies = async (): Promise<TechnologiesType[]> => {

  const res = await fetch('technologies-data.json');
  const data = await res.json();

  return data;
}
const technologiesPromise = fetchTechnologies();
function App() {

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
  }, [])

  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <ExploreTheTechnologies technologiesPromise={technologiesPromise}></ExploreTheTechnologies>
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