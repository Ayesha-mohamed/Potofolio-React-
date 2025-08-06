import Footer from "../components/footer"
import Header from "../components/Header"

function Contact (){
    return<>

    <Header/>
     <div>
        <h2 class="text-2xl font-bold mb-5 text-center mt-6">Get In Touch</h2>
     <div className="">
        <form className="max-w-2xl  mx-auto bg-white p-8 rounded-lg shadow-md">
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparen" placeholder="Name"/>
            <input type="text" className="w-full px-4 mt-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparen" placeholder="Email"/>
            <textarea name="" className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent min-h-[150px]" placeholder="Masseg" ></textarea>
         <button className="bg-purple-600 mt-6 ml-60 text-white px-10 py-3 rounded-md font-medium transition-all duration-300 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-md inline-flex items-center gap-2">Submit</button>
        </form>
        </div>
     </div>

     <Footer/>

    </>
}
export default Contact