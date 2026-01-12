import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, Mail, Phone, Lock } from 'lucide-react';

export function HeroBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Banner principal */}
        <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1650626105236-2e3b1f933fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBvdmVuJTIwZnJlc2h8ZW58MXx8fHwxNzYzOTQ5OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Panadería"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/50"></div>
          
          {/* Contenido */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-8">
            <div>
              <h2 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                El sabor que endulza tus días
              </h2>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-colors">
                Ver Productos
              </button>
            </div>
          </div>
        </div>
        
        {/* Panel de inicio de sesión */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200 h-fit">
          <h3 className="text-2xl text-amber-900 mb-6 text-center">
            Inicia sesión o Regístrate
          </h3>
          
          <form className="space-y-4">
            <div>
              <label className="block text-amber-800 mb-2">Nombre</label>
              <div className="flex items-center bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <User className="w-5 h-5 text-amber-600 mr-2" />
                <input 
                  type="text" 
                  placeholder="Tu nombre completo"
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-amber-800 mb-2">E-mail</label>
              <div className="flex items-center bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <Mail className="w-5 h-5 text-amber-600 mr-2" />
                <input 
                  type="email" 
                  placeholder="tucorreo@email.com"
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-amber-800 mb-2">Teléfono</label>
              <div className="flex items-center bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <Phone className="w-5 h-5 text-amber-600 mr-2" />
                <input 
                  type="tel" 
                  placeholder="+51 900 000 000"
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-amber-800 mb-2">Contraseña</label>
              <div className="flex items-center bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <Lock className="w-5 h-5 text-amber-600 mr-2" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg text-lg shadow-lg transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}