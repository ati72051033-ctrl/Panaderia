import { ShoppingCart, Phone, Truck, MapPin } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
      {/* Carrito */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-600 p-3 rounded-full">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl text-amber-900">Carrito</h4>
        </div>
        <div className="text-center py-8 text-gray-500">
          <p className="mb-2">Tu carrito está vacío</p>
          <p className="text-sm">Agrega productos para comenzar</p>
        </div>
        <div className="border-t border-amber-200 pt-4">
          <div className="flex justify-between text-lg mb-4">
            <span className="text-gray-700">Total:</span>
            <span className="text-amber-900">S/. 0.00</span>
          </div>
          <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg transition-all">
            Finalizar Compra
          </button>
        </div>
      </div>
      
      {/* Contacto */}
      <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Phone className="w-6 h-6" />
          </div>
          <h4 className="text-xl">Contáctanos</h4>
        </div>
        <p className="mb-2">¿Tienes dudas? Llámanos</p>
        <p className="text-2xl mb-4">+51 916 303 949</p>
        <p className="text-sm text-amber-100">Lun - Sáb: 8:00 - 20:00</p>
      </div>
      
      {/* Delivery */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-600 p-3 rounded-full">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl text-green-900">Envíos / Delivery</h4>
        </div>
        <p className="text-gray-700 mb-3">
          Entregamos en toda la ciudad
        </p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>✓ Envío gratis en compras +S/. 50</li>
          <li>✓ Entrega en 60 minutos</li>
          <li>✓ Productos frescos garantizados</li>
        </ul>
      </div>
      
      {/* Ubicación */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl text-blue-900">Nuestra Ubicación</h4>
        </div>
        <p className="text-gray-700 mb-2">
          169 Av. Elvira García y García
        </p>
        <p className="text-gray-700">
          Lima, Perú
        </p>
      </div>
    </aside>
  );
}