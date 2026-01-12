import { Search, ShoppingCart, Croissant } from 'lucide-react';

export function Navbar() {
  const menuItems = ['Inicio', 'Productos', 'Servicios', 'Catálogo', 'Contáctanos'];
  
  return (
    <nav className="bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 border-b border-amber-700">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-600 p-3 rounded-full">
              <Croissant className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl">Panadería Pastelería</h1>
              <p className="text-amber-200">Maria Elena</p>
            </div>
          </div>
          
          {/* Búsqueda y carrito */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="bg-transparent outline-none text-white placeholder-amber-200 w-64"
              />
              <Search className="w-5 h-5 text-amber-200" />
            </div>
            
            <button className="relative bg-amber-600 hover:bg-amber-700 p-3 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
        
        {/* Menu */}
        <div className="flex items-center justify-center gap-8 py-3">
          {menuItems.map((item) => (
            <button
              key={item}
              className="text-amber-100 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
