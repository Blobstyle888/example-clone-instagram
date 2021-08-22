/* eslint-disable jsx-a11y/img-redundant-alt */
import "./index.css";

import Navigation from './components/Navigation'
import Stories from './components/Stories'
import Article from './components/Article'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
      <Navigation />
      <main>
        <section className="max-w-screen-lg mx-auto md:px-4 md:pt-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 lg:col-span-2 xl:col-span-2">
              <Stories />
              <Article />
            </div>
            <div className="hidden lg:block lg:col-span-1 ml-3">
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
