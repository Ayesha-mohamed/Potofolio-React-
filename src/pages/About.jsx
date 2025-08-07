import Footer from "../components/footer"
import Header from "../components/Header"

function About() {
    return <>

    <Header/>
    <div className="mt-10 ml-10 ">
        <h1 className="text-3xl font-semibold text-purple-500 px-16 py-2 ">About Me</h1>
        <img className=" mt-6 border-2 border-purple-800 ml-4 rounded-[50%] shadow-[0 10px 20px rgb(0,0,0,0.1) ] object-cover w-[250px] h-[250px]" src= "https://i.pinimg.com/736x/d6/1e/2c/d61e2ce8304f79611f8648f5bc01791a.jpg" alt="" />
         <div className="px-8 py-4">
         <p>Hello! I'm Aisha Mohamed, a dedicated university student pursuing Economics and Management with a specialization in Statistics and Planning at the faculty level.</p>
        <p>Alongside my academic studies, I'm passionately learning web development and have reached an intermediate level in HTML, CSS, and GitHub. I'm currently expanding my knowledge in JavaScript and have recently begun exploring the world of graphic design.</p>
        <p>My unique combination of statistical knowledge and growing technical skills allows me to approach problems with both analytical and creative perspectives.</p>
          </div>
            <button className="px-7 py-4 mt-6 ml-5 text-white bg-purple-600">Let's Contact</button>
              </div>
          
           <h2  className="text-2xl font-bold mb-8 sm:ml-8  text-center mt-7 sm:mt-0">My Skills</h2>
<div className="flex flex-wrap gap-8 mt-8 sm:ml-0 ml">
    <div className="flex-1 min-w-[250px] ml-3">
        <h3 className="text-xl font-semibold">Web Development</h3>
        <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">HTML</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">CSS</span>
            <span className="bg-[#9b88c9] text-white px-3 py-1 rounded-full text-sm opacity-80">JavaScript</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Git/GitHub</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Responsive Design</span>
        </div>
    </div>
    <div className="flex-1 min-w-[250px]">
        <h3 className="text-xl font-semibold">Statistics & Planning</h3>
        <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Data Analysis</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Statistical Modeling</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Economic Planning</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Research Methods</span>
        </div>
    </div>
    <div className="flex-1 min-w-[250px]">
        <h3 className="text-xl font-semibold">Emerging Skills</h3>
        <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-[#9b88c9] text-white px-3 py-1 rounded-full text-sm opacity-80">Graphic Design</span>
            <span className="bg-[#9b88c9] text-white px-3 py-1 rounded-full text-sm opacity-80">UI/UX Principles</span>
        </div>
    </div>
</div>

    <h2 className="text-2xl font-bold mb-8 mt-5 ml-6">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
       
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 hover:-translate-y-2">
            <img src="https://i.pinimg.com/736x/9b/ab/b4/9babb4afd8351ddf31cdc73edbb336e9.jpg" alt="My First Project" className="w-[600px] h-48 object-cover"></img>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">My First Web Project</h3>
                <p className="text-gray-600 mb-4">My initial exploration into web development, showcasing basic HTML and CSS skills as I began my coding journey.</p>
                <div className="flex gap-4 mt-4">
                    <a href="https://ayesha-mohamed.github.io/my-first-project-/" class="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 inline-flex items-center gap-2" target="_blank">
                        <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/ayesha-mohamed/my-first-project-" class="border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 inline-flex items-center gap-2" target="_blank">
                        <i className="fab fa-github"></i> View Code  </a>
                   </div>
                  </div>
                </div>


        

        
        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 hover:-translate-y-2">
            <img src="https://i.pinimg.com/736x/7d/36/78/7d36784742965f2d91dd5b67ae6f977f.jpg" alt="My First Project" className="w-[600px] h-48 object-cover"></img>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-purple-600 mb-2">Economic Data Visualization</h3>
                <p class="text-gray-600 mb-4">A project combining my statistics knowledge with basic web technologies to present economic data visually.</p>
                <div class="flex gap-4 mt-4">
                    <a href="#" class="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 inline-flex items-center gap-2">
                        <i class="fas fa-external-link-alt"></i> Coming Soon
                    </a>
                </div>
            </div>
        </div>

        
        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-200 hover:-translate-y-2">
          <img src="https://i.pinimg.com/736x/7f/1a/7e/7f1a7ecf08df696d1e2eab9be73382cb.jpg" alt="My First Project" className="w-full h-48 object-cover"></img>
            <div class="p-5">
                <h3 class="text-xl font-semibold text-purple-600 mb-2">Graphic Design Exploration</h3>
                <p class="text-gray-600 mb-4">My first attempts at graphic design, learning the fundamentals of visual composition and design tools.</p>
                <div class="flex gap-4 mt-4">
                 <a href="#" class="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 inline-flex items-center gap-2">
                 <i class="fas fa-external-link-alt"></i> Coming Soon
                    </a>
                </div>
              </div>
             </div>
            </div>
            <Footer/>

    </>
    
}
export default About

