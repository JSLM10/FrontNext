import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} The Rise of Carolina the Conqueror. All rights reserved.
          </p>

          
          <div className="flex space-x-6">
            
            <div className="flex items-center space-x-4">
              <Link 
                href="https://github.com/miguel142434" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
                aria-label="GitHub de Juan Pablo"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com/JSLM10" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition-colors"
                aria-label="GitHub de Zuleta"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>



            
            <Link 
              href="http://linkedin.com/in/juan-pablo-muñoz-corchos-8720bb304" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn de Juan Pablo "
            >
              <Linkedin className="h-5 w-5" />
            </Link>

             <Link 
              href="https://www.linkedin.com/in/miguel-zuleta-68370a218" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn de Zuleta "
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};