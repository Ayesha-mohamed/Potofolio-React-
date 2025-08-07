import { Link } from "react-router-dom"

function Footer() {
  return <>
  <div className="bg-gray-900 text-white py-12 mt-6">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
  
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-bold">Aisha Mohamed</h2>
        <p className="text-gray-400 mt-2">Statistician & Web Developer & BG:Graphic designer</p>
      </div>

     
      <div className="mb-6 md:mb-0">
        <ul className="flex flex-wrap justify-center gap-6">
            <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
        </ul>
      </div>

      
      <div className="flex space-x-6">
        <a href="https://github.com/ayesha-mohamed" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-400 transition transform hover:-translate-y-1">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/the_silent_eyes1" target="_blank" rel="noopener noreferrer"  className="text-2xl hover:text-purple-400 transition transform hover:-translate-y-1">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/614937829" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-400 transition transform hover:-translate-y-1">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:ayeshamohamed833@gmail.com"  className="text-2xl hover:text-purple-400 transition transform hover:-translate-y-1">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>

  
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; <span id="currentYear"></span> Aisha Mohamed. All rights reserved.</p>
      <p className="mt-2 text-sm">Made with <i class="fas fa-heart text-red-500"></i> and Tailwind CSS</p>
    </div>
  </div>

</div>
  </>
  
}
export default Footer