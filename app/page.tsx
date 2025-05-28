import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Flame, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('/flames.gif')] bg-cover bg-center opacity-20 z-0" />
        
        
        <div className="relative z-10 px-4">
          
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500 tracking-tight">
            LUCHA MUERE
          </h1>
          
          
          <p className="text-xl md:text-3xl font-medium mb-8 text-gray-300 max-w-3xl mx-auto">
            <span className="text-red-500">EL ÚNICO TORNEO</span> DONDE LOS PERDEDORES NO VUELVEN A CASA
          </p>
          
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-red-900 hover:bg-red-800 text-white py-6 px-8 text-lg">
              <Link href="/dashboard">
                <Flame className="mr-2 h-6 w-6" />
                ENTRAR AL INFIERNO
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-red-900 text-red-400 hover:bg-red-950 py-6 px-8 text-lg">
              <Link href="/about">
                CONOCE LAS REGLAS
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Efecto de scroll indicador */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-red-600 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>
      
      {/* Sección de citas impactantes */}
      <section className="py-20 bg-black px-4">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-4xl font-bold text-center text-white">
            <span className="text-red-600">&ldquo;</span> 
              En este mundo solo hay dos tipos de personas: los que luchan y los que mueren. 
            <span className="text-red-600">&rdquo;</span>
          </blockquote>

          <p className="text-right mt-6 text-red-400 text-lg">— Carolina la Conquistadora</p>
        </div>
      </section>
      
     
      
      {/* Sección final de advertencia */}
      <section className="py-16 bg-red-950/50 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/blood-texture.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            <span className="text-red-500">ADVERTENCIA</span> DE CAROLINA
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Este sistema está protegido por la guardia pretoriana de Carolina. Cualquier intento de acceso no autorizado será castigado con la participación inmediata en el próximo torneo mortal.
          </p>
          <div className="animate-pulse">
            <Button className="bg-black text-red-500 hover:bg-red-900 hover:text-white border border-red-900 py-6 px-8 text-lg">
              <AlertTriangle className="mr-2 h-6 w-6" />
              ENTRAR BAJO TU PROPIO RIESGO
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


function FightCard({ fighters, date, lethal }: { fighters: [string, string], date: string, lethal: boolean }) {
  return (
    <div className="bg-black/70 border border-red-900/50 rounded-xl overflow-hidden hover:border-red-600 transition-all hover:scale-105">
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <span className="text-xl font-bold text-white">{fighters[0]}</span>
          <div className="my-2 flex items-center">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="mx-3 text-red-500 font-bold">VS</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <span className="text-xl font-bold text-white">{fighters[1]}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Fecha:</span>
          <span className="text-white">{new Date(date).toLocaleDateString()}</span>
        </div>
        
        <div className="flex justify-between text-sm mt-4">
          <span className="text-gray-400">Tipo:</span>
          <span className={lethal ? "text-red-500" : "text-green-500"}>
            {lethal ? "COMBATE MORTAL" : "SIN MUERTE"}
          </span>
        </div>
      </div>
    </div>
  );
}