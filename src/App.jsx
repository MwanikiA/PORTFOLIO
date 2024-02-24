import { useState } from 'react'
import Nav from './components/navbar/nav.jsx'


function App(){

    return(
        <>
        <div>
         <Nav/>
        </div>
        <section className="text-gray-400 bg-gray-900 body-font" >
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Where empathy meets problem solving.
            
            </h1>
            <p className="mb-8 leading-relaxed text-2xl">Abby Mwaniki</p>
            <p className="mb-8 leading-relaxed text-2xl">Clinical Officer & Developer</p>
            <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Resume</button>
           <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Contacts</button>
           </div>
         </div>
         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
         <img className="object-cover object-center rounded" alt="hero" src="https://static.vecteezy.com/system/resources/previews/006/712/974/non_2x/abstract-health-medical-science-healthcare-icon-digital-technology-doctor-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-for-wallpaper-template-web-design-vector.jpg"/>
          </div>
             </div>
        </section>
        
        </>
    )
}


export default App
