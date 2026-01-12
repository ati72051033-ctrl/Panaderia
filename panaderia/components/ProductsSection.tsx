import { ShoppingCart, Eye, Flame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Pan Mantequilla',
    price: 1.00,
    priceLabel: '4 por S/ 1.00',
    image: 'https://images.unsplash.com/photo-1573544907760-ccb387b08760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBicmVhZCUyMHJvbGx8ZW58MXx8fHwxNzYzOTU0NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    hot: true
  },
  {
    id: 2,
    name: 'Pan Italiano',
    price: 1.00,
    priceLabel: '4 por S/ 1.00',
    image: 'https://images.unsplash.com/photo-1666713866563-6c1e4d051e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYnJlYWR8ZW58MXx8fHwxNzYzOTU0NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    hot: true
  },
  {
    id: 3,
    name: 'Pastel Flan',
    price: 2.50,
    priceLabel: 'S/ 2.50 x porción',
    image: 'https://images.unsplash.com/photo-1653988354010-39637252a2db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFuJTIwZGVzc2VydHxlbnwxfHx8fDE3NjM5NTA0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hot: false
  },
  {
    id: 4,
    name: 'Empanadas de Globo',
    price: 0.50,
    priceLabel: 'S/ 0.50 c/u',
    image: 'https://images.unsplash.com/photo-1762207654337-73ccc93a80c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBlbXBhbmFkYXxlbnwxfHx8fDE3NjM5MjUzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hot: true
  },
  {
    id: 5,
    name: 'Torta',
    price: 25.00,
    priceLabel: 'S/ 25.00',
    image: 'https://images.unsplash.com/photo-1641848421644-a1603f016f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwdG9ydGF8ZW58MXx8fHwxNzYzOTUwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hot: false
  },
  {
    id: 6,
    name: 'Pastel de Chocolate',
    price: 22.00,
    priceLabel: 'S/ 22.00',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MzkxNTU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    hot: false
  }
];

export function ProductsSection() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border-2 border-amber-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl text-amber-900 mb-2">
          Productos más comprados en nuestra panadería…
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-200 relative"
          >
            {/* Badge de producto caliente */}
            {product.hot && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-lg">
                <Flame className="w-4 h-4" />
                <span className="text-sm">Hot</span>
              </div>
            )}
            
            <div className="h-48 overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="p-4">
              <h4 className="text-lg text-amber-900 mb-2">{product.name}</h4>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl text-amber-700">{product.priceLabel}</span>
                <button className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
              
              <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-all">
                <Eye className="w-4 h-4" />
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}