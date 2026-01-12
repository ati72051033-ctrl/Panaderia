import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductsSection } from './components/ProductsSection';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      
      <HeroBanner />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Contenido principal */}
          <ProductsSection />
          
          {/* Barra lateral */}
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}