import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Plus, Minus, Trash2, Check, ArrowRight, Star, Instagram, Mail, Heart, Sparkles, ShieldCheck } from 'lucide-react';

// --- MOCK DATA ---
const PRODUCTS = [
  {
    id: 1,
    name: "Engaged Ring Platter",
    category: "Resin Art",
    price: 1500,
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Customised resin ring platter with real dried flowers, gold flakes, and elegant typography for your special day."
  },
  {
    id: 2,
    name: "Varmala Frame",
    category: "Preservation",
    price: 3500,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Immortalize your wedding garlands. Suspended in crystal clear, UV-resistant resin to last a lifetime."
  },
  {
    id: 3,
    name: "Onyx Coasters",
    category: "Home Decor",
    price: 800,
    image: "https://images.unsplash.com/photo-1616628188506-4bf98fc91176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Hand-poured resin coasters mimicking deep onyx marble with hand-painted gold edges. (Set of 4)"
  },
  {
    id: 4,
    name: "Vanilla Bean Candle",
    category: "Candles",
    price: 450,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Aesthetic bubble candles made from 100% soy wax and premium vanilla bean fragrance oils."
  },
  {
    id: 5,
    name: "Floral Initial",
    category: "Accessories",
    price: 200,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Personalised initial keychains encasing real baby's breath flowers and 24k gold foil."
  },
  {
    id: 6,
    name: "Lipan Mirror Art",
    category: "Wall Art",
    price: 1200,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Authentic mud and mirror work (Lipan Kaam) handcrafted on MDF board, directly from Kutch."
  }
];

const REVIEWS = [
  { id: 1, name: "Priya S.", rating: 5, text: "The Varmala preservation brought me to tears. Absolutely stunning work!" },
  { id: 2, name: "Ananya D.", rating: 5, text: "Ordered coasters for a bridal shower. Everyone loved the premium marble look." },
  { id: 3, name: "Rohan K.", rating: 5, text: "Ring platter was exactly what we envisioned. Safe delivery to Mumbai." },
  { id: 4, name: "Meera P.", rating: 5, text: "The Lipan art totally transformed my living room. Real Kutch craftsmanship!" }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [activeFilter, setActiveFilter] = useState('All');

  const shopCategories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      .glass-nav { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
      .gradient-text { background: linear-gradient(135deg, #f43f5e 0%, #f97316 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`✨ Added ${product.name} to cart!`);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const getCartTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const getCartCount = () => cart.reduce((count, item) => count + item.quantity, 0);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- COMPONENTS ---

  const Navbar = () => (
    <div className="fixed w-full top-4 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
      <nav className="glass-nav border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl pointer-events-auto transition-all">
        
        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-rose-900 p-1">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Links Left */}
        <div className="hidden md:flex items-center space-x-8 w-1/3">
          <button onClick={() => navigate('home')} className={`text-sm font-semibold tracking-wide transition ${currentPage === 'home' ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'}`}>HOME</button>
          <button onClick={() => navigate('shop')} className={`text-sm font-semibold tracking-wide transition ${currentPage === 'shop' ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'}`}>SHOP</button>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center justify-center w-1/3 cursor-pointer" onClick={() => navigate('home')}>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-rose-900 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            Crafty Cure
          </h1>
        </div>

        {/* Links Right */}
        <div className="flex items-center justify-end space-x-6 w-1/3">
          <button onClick={() => navigate('about')} className={`hidden md:block text-sm font-semibold tracking-wide transition ${currentPage === 'about' ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'}`}>STORY</button>
          <button onClick={() => navigate('cart')} className="relative flex items-center justify-center w-10 h-10 bg-rose-50 rounded-full text-rose-600 hover:bg-rose-100 transition">
            <ShoppingBag className="w-5 h-5" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center rounded-full shadow-sm border-2 border-white">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white rounded-3xl shadow-xl border border-rose-100 p-6 flex flex-col space-y-4 pointer-events-auto md:hidden animate-fade-in-up">
          <button onClick={() => navigate('home')} className="text-xl font-serif text-left text-gray-800 hover:text-rose-500 py-2 border-b border-rose-50">Home</button>
          <button onClick={() => navigate('shop')} className="text-xl font-serif text-left text-gray-800 hover:text-rose-500 py-2 border-b border-rose-50">Shop Collection</button>
          <button onClick={() => navigate('about')} className="text-xl font-serif text-left text-gray-800 hover:text-rose-500 py-2">Our Story</button>
        </div>
      )}
    </div>
  );

  const Toast = () => {
    if (!toast.show) return null;
    return (
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100] animate-fade-in-up">
        <div className="bg-rose-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 text-sm font-medium">
          <span>{toast.message}</span>
        </div>
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-rose-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-rose-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-full text-rose-600 shadow-sm">
          {product.category}
        </div>
      </div>
      
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight mb-1">{product.name}</h3>
          <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <span className="text-base sm:text-lg font-bold text-gray-900">₹{product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-500 hover:text-white transition-colors"
            title="Add to cart"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // --- VIEWS ---

  const HomeView = () => (
    <div className="bg-[#fffdfc] min-h-screen overflow-x-hidden">
      
      {/* Catchy Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/50 rounded-full mix-blend-multiply filter blur-[80px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-200/40 rounded-full mix-blend-multiply filter blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-100 text-rose-600 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>Handcrafted in Kutch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            Turn memories into <br/> <span className="gradient-text">Timeless Art</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Beautifully crafted resin preservation, custom varmalas, and aesthetic decor. Made with love, just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={() => navigate('shop')} className="w-full sm:w-auto bg-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_20px_rgb(244,63,94,0.3)] hover:bg-rose-600 hover:-translate-y-1 transition-all flex items-center justify-center">
              Shop Collection <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button onClick={() => navigate('about')} className="w-full sm:w-auto bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold hover:border-rose-300 hover:text-rose-600 transition-all">
              Our Story
            </button>
          </div>
        </div>

        {/* Hero Imagery */}
        <div className="lg:w-1/2 relative mt-16 lg:mt-0 h-[400px] sm:h-[500px] w-full">
          <div className="absolute right-0 sm:right-10 top-0 w-3/4 sm:w-2/3 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl animate-float border-4 border-white">
             <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Varmala" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-0 sm:left-10 bottom-0 w-3/5 sm:w-1/2 h-2/3 rounded-[3rem] overflow-hidden shadow-2xl animate-float-delayed border-4 border-white">
             <img src="https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Candles" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Pair-by-Pair Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Trending Masterpieces</h2>
          <p className="text-gray-500">Hand-picked aesthetic pieces to elevate your space.</p>
        </div>
        
        {/* Strictly 2-columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PRODUCTS.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => navigate('shop')} className="inline-flex items-center justify-center bg-rose-50 text-rose-600 font-bold px-8 py-3 rounded-full hover:bg-rose-100 transition">
            View All Products
          </button>
        </div>
      </div>

      {/* Vibe / Categories Section */}
      <div className="bg-rose-500 py-24 rounded-t-[3rem] sm:rounded-t-[5rem] mt-10 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Made with Magic</h2>
          <p className="text-rose-100 max-w-2xl mx-auto text-lg">Explore our signature categories designed to capture the beauty of your most cherished moments.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
          {[
            { title: "Resin Keepsakes", img: "https://images.unsplash.com/photo-1616628188506-4bf98fc91176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { title: "Aesthetic Candles", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { title: "Custom Framing", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
          ].map((cat, idx) => (
            <div key={idx} onClick={() => navigate('shop')} className="group cursor-pointer bg-white p-2 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform duration-300">
               <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4">
                 <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
               </div>
               <h3 className="text-center font-bold text-gray-900 text-lg pb-3 group-hover:text-rose-500 transition-colors">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#fffdfc] py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Client Diaries</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Loved by Many</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-white border border-rose-50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
              <div className="flex text-orange-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 italic flex-grow text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="font-bold text-gray-900 text-sm">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ShopView = () => {
    const filteredProducts = activeFilter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeFilter);

    return (
      <div className="bg-[#fffdfc] min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">The Collection</h1>
            <p className="text-gray-500 text-lg">Curated aesthetic pieces just for you.</p>
          </div>
          
          {/* Aesthetic Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {shopCategories.map((cat, i) => (
               <button 
                  key={i} 
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === cat ? 'bg-rose-500 text-white shadow-[0_4px_15px_rgb(244,63,94,0.3)]' : 'bg-white border border-gray-200 text-gray-600 hover:border-rose-300 hover:text-rose-500'}`}
                >
                 {cat}
               </button>
            ))}
          </div>

          {/* Pair-by-Pair Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
             <div className="text-center py-24 text-gray-400 font-medium">
                No magic found in this category yet.
             </div>
          )}
        </div>
      </div>
    );
  };

  const AboutView = () => (
    <div className="bg-[#fffdfc] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl border border-rose-50 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
             <img src="https://images.unsplash.com/photo-1544967082-b9d25d840d44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Artist at work" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent lg:hidden"></div>
          </div>
          
          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
              <Sparkles className="w-4 h-4 mr-2" /> The Studio
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">Crafting magic in <br/><span className="text-rose-500">Bhuj, Kutch.</span></h1>
            
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Hello! I am a certified resin artist dedicated to turning your fleeting moments into permanent masterpieces. 
              </p>
              <p>
                Whether it's preserving your precious wedding Varmala or crafting custom aesthetic home decor, every single piece is poured, polished, and packaged with immense love and care.
              </p>
            </div>

            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <h4 className="font-bold text-gray-900 mb-3">Quick Studio Policies:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><Check className="w-4 h-4 text-rose-500 mr-2 mt-0.5" /> 100% Customized to your vibe.</li>
                <li className="flex items-start"><Check className="w-4 h-4 text-rose-500 mr-2 mt-0.5" /> No cancellations after order confirmation.</li>
                <li className="flex items-start"><Check className="w-4 h-4 text-rose-500 mr-2 mt-0.5" /> Secure Pan-India Shipping.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CartView = () => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = () => {
      setIsCheckingOut(true);
      setTimeout(() => {
        setCart([]);
        setIsCheckingOut(false);
        showToast("💖 Order confirmed! Thank you!");
        navigate('home');
      }, 2000);
    };

    return (
      <div className="bg-[#fffdfc] min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8">Your Cart</h1>
          
          {cart.length === 0 ? (
            <div className="bg-white p-12 sm:p-20 text-center rounded-[3rem] border border-rose-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-rose-300" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">It's empty here!</h2>
              <p className="text-gray-500 mb-8">Let's find some beautiful art to fill it up.</p>
              <button 
                onClick={() => navigate('shop')}
                className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_20px_rgb(244,63,94,0.3)] hover:bg-rose-600 transition"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-[2rem] border border-rose-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <li key={item.id} className="p-4 sm:p-6 flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl bg-rose-50" />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-rose-500 font-semibold mb-3">₹{item.price}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-rose-50 rounded-full p-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-rose-600 hover:bg-white rounded-full transition">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-rose-600 hover:bg-white rounded-full transition">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-rose-500 p-2 transition">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gray-50/50 p-6 sm:p-8 border-t border-rose-50">
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-xl font-bold text-gray-900 border-t border-gray-200 pt-6 mb-8">
                  <span>Total</span>
                  <span className="text-rose-600">₹{getCartTotal()}</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-gray-900 text-white py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-lg disabled:opacity-70 flex justify-center items-center"
                >
                  {isCheckingOut ? "Processing securely..." : "Checkout Securely"}
                </button>
                <div className="mt-4 text-center flex items-center justify-center text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 mr-1 text-green-500" /> Safe & secure payment.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-white border-t border-rose-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-rose-900 mb-2 flex items-center justify-center md:justify-start gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              Crafty Cure
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">Creating beautiful memories through handcrafted art in Bhuj, Kutch.</p>
          </div>

          <div className="flex gap-4">
            <button onClick={() => showToast("Opening Instagram...")} className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-500 hover:text-white transition shadow-sm">
              <Instagram className="w-5 h-5" />
            </button>
            <button onClick={() => showToast("Opening Email...")} className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-500 hover:text-white transition shadow-sm">
              <Mail className="w-5 h-5" />
            </button>
          </div>
          
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Crafty Cure Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <button className="hover:text-rose-500 transition">Privacy</button>
            <button className="hover:text-rose-500 transition">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <main>
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'shop' && <ShopView />}
        {currentPage === 'about' && <AboutView />}
        {currentPage === 'cart' && <CartView />}
      </main>
      <Footer />
      <Toast />
    </div>
  );
}
