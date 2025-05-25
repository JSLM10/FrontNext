import { AlertTriangle, Sword, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center bg-[url('/blood-pattern.png')] bg-cover">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500">
            LAS REGLAS DEL JUEGO
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            En <span className="text-red-500">LUCHA MUERE</span>, solo hay una regla: <span className="font-bold text-white">gana o muere</span>
          </p>
          <Button asChild className="bg-red-900 hover:bg-red-800 text-white py-6 px-8 text-lg">
            <Link href="/dashboard">
              <Flame className="mr-2 h-6 w-6" />
              ACCEDER AL SISTEMA
            </Link>
          </Button>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          <span className="text-red-600">LA HISTORIA</span> DETRÁS DEL TORNEO
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Todo comenzó cuando <span className="text-red-500 font-bold">Carolina la Conquistadora</span>, una ex-estudiante de desarrollo web frustrada, decidió tomar venganza contra el sistema que la rechazó.
            </p>
            <p className="text-lg mb-6">
              Después de dominar las artes oscuras del código y la inteligencia artificial, Carolina estableció un nuevo orden donde los desarrolladores web son forzados a pelear por su supervivencia.
            </p>
            <p className="text-lg">
              Lo que comenzó como un pequeño torneo en <span className="font-bold">Universidad EIA</span> se ha convertido en el evento más sangriento del continente.
            </p>
          </div>
          <div className="bg-black/50 border border-red-900/50 rounded-xl p-6 h-full flex items-center justify-center">
            <Sword className="w-32 h-32 text-red-500 opacity-70" />
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            <span className="text-red-600">CÓMO</span> FUNCIONA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-red-900/50 rounded-xl p-8 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Los Contendientes</h3>
              <p className="text-gray-400">Estudiantes, profesores y prisioneros son forzados a pelear. Solo los más fuertes sobreviven.</p>
            </div>
            <div className="bg-black/50 border border-red-900/50 rounded-xl p-8 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Los Combates</h3>
              <p className="text-gray-400">Eventos semanales donde los participantes luchan a muerte o hasta la rendición.</p>
            </div>
            <div className="bg-black/50 border border-red-900/50 rounded-xl p-8 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">El Sistema</h3>
              <p className="text-gray-400">Carolina controla todo a través de esta plataforma, desde asignaciones hasta ejecuciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertencia */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-red-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ADVERTENCIA DE CAROLINA
          </h2>
          <p className="text-xl mb-8">
            "Este sistema es mi creación perfecta. Cualquier intento de sabotaje o acceso no autorizado será castigado con participación inmediata en el próximo torneo. No hay excepciones."
          </p>
          <Button asChild variant="outline" className="border-red-700 text-red-400 hover:bg-red-900/50 py-6 px-8 text-lg">
            <Link href="/">
              VOLVER AL INICIO
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}