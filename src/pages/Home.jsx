import Footer from "../components/footer"
import Header from "../components/Header"

function Home() {
    return<>

    <Header/>
 
   <div className="sm:flex justify-center mt-10 gap-10">
    <div>
    <h1 className="text-3xl text-purple-800 font-semibold py-2 px-2">Hello I'm <br></br> Aisha Mohamed</h1>
    <p class="text-lg text-gray-700 leading-relaxed max-w-xl">
  Hello! I'm a statistician, web developer, and beginner graphic designer 
  with a strong passion for data, design, and technology. I love transforming complex data into clear insights,
   building responsive and user-friendly websites, and exploring the creative side of visual design. 
   I'm always eager to learn and grow across all these fields while creating impactful digital experiences.

</p>
<button className="px-7 py-4 mt-6 text-white bg-purple-600">Let's Contact</button>
</div>
<div className="">
<img className="w-[290px] h-[330px] rounded shadow-[0 10px 20px rgb(0,0,0,0.1) ] object-cover " src="https://i.pinimg.com/736x/6c/9d/e8/6c9de8223788c69def510bd88089a8da.jpg" alt="" />
</div>
   </div>

<Footer/>
    </>
    
}
export default Home