<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crafty Cure Studio | Aesthetic Resin Art & Gifts</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- React & ReactDOM via CDN -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
    
    <!-- Babel for JSX compilation in browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            background-color: #fffdfc;
        }
        h1, h2, h3, .font-serif {
            font-family: 'Playfair Display', serif;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .glass-nav { 
            background: rgba(255, 255, 255, 0.85); 
            backdrop-filter: blur(12px); 
            -webkit-backdrop-filter: blur(12px); 
        }
        .gradient-text { 
            background: linear-gradient(135deg, #f43f5e 0%, #f97316 100%); 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; 
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.4s ease-out forwards; }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        // --- CUSTOM ICONS (No external dependencies) ---
        const Icon = ({ name, className = "w-5 h-5" }) => {
            const icons = {
                heart: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
                shoppingBag: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>,
                menu: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>,
                x: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>,
                plus: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>,
                minus: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"/></svg>,
                trash: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>,
                arrowRight: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>,
                star: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
                sparkles: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>,
                shield: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
                instagram: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                mail: <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            };
            return icons[name] || null;
        };

        // --- MOCK DATA ---
        const PRODUCTS = [
            { id: 1, name: "Engaged Ring Platter", category: "Resin Art", price: 1500, image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Customised resin ring platter with real dried flowers and gold flakes.", tag: "Bestseller" },
            { id: 2, name: "Varmala Frame", category: "Preservation", price: 3500, image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Immortalize your wedding garlands in crystal clear, UV-resistant resin.", tag: "Popular" },
            { id: 3, name: "Onyx Coasters", category: "Home Decor", price: 800, image: "https://images.unsplash.com/photo-1616628188506-4bf98fc91176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Set of 4 hand-poured resin coasters mimicking deep onyx marble." },
            { id: 4, name: "Vanilla Bean Candle", category: "Candles", price: 450, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Aesthetic bubble candles made from 100% soy wax." },
            { id: 5, name: "Floral Initial", category: "Accessories", price: 200, image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Personalised initial keychains encasing real baby's breath flowers." },
            { id: 6, name: "Lipan Mirror Art", category: "Wall Art", price: 1200, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Authentic mud and mirror work handcrafted directly from Kutch." },
            { id: 7, name: "Ocean Wave Clock", category: "Home Decor", price: 2500, image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "12-inch functional wall clock with realistic 3D ocean waves.", tag: "New" },
            { id: 8, name: "Rose Quartz Candle", category: "Candles", price: 650, image: "https://images.unsplash.com/photo-1602874801007-bd458cb6b896?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Infused with real rose quartz crystals and a soft peony scent." },
            { id: 9, name: "Custom Geode Tray", category: "Resin Art", price: 1800, image: "https://images.unsplash.com/photo-1580920461011-8f5bcaf8ccbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Large serving tray with crushed glass edges simulating a natural geode." },
            { id: 10, name: "Botanical Bookmarks", category: "Accessories", price: 450, image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Set of 3 clear resin bookmarks featuring pressed seasonal ferns." },
            { id: 11, name: "Couple Name Plaque", category: "Wall Art", price: 1100, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Customizable name board perfect for housewarmings or wedding gifts.", tag: "Only 2 Left!" },
            { id: 12, name: "Hexagon Trinket Box", category: "Resin Art", price: 750, image: "https://images.unsplash.com/photo-1616628188506-4bf98fc91176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", description: "Small storage box with a floral lid, perfect for jewelry." }
        ];

        const REVIEWS = [
            { id: 1, name: "Priya Sharma", rating: 5, text: "The Varmala preservation brought me to tears. Absolutely stunning work, the flowers look exactly like they did on my wedding day!" },
            { id: 2, name: "Ananya Desai", rating: 5, text: "Ordered coasters for a bridal shower. Everyone loved the premium marble look. Packaging was 10/10." },
            { id: 3, name: "Rohan Kapoor", rating: 5, text: "Ring platter was exactly what we envisioned. Safe delivery to Mumbai without a single scratch." },
            { id: 4, name: "Meera Patel", rating: 5, text: "The Lipan art totally transformed my living room. You can feel the real Kutch craftsmanship." },
            { id: 5, name: "Simran J.", rating: 5, text: "The vanilla bubble candles smell divine even when they aren't lit. So aesthetic!" },
            { id: 6, name: "Karan T.", rating: 4, text: "Bought the ocean wave clock for my office. Gets compliments from everyone who walks in." }
        ];

        // --- MAIN APP COMPONENT ---
        const App = () => {
            const [currentPage, setCurrentPage] = useState('home');
            const [cart, setCart] = useState([]);
            const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
            const [toast, setToast] = useState({ show: false, message: '' });
            const [activeFilter, setActiveFilter] = useState('All');

            const shopCategories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

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

            // --- SUB-COMPONENTS ---
            const Navbar = () => (
                <div className="fixed w-full top-4 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
                    <nav className="glass-nav border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl pointer-events-auto transition-all">
                        
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-rose-900 p-1">
                            {isMobileMenuOpen ? <Icon name="x" className="w-6 h-6" /> : <Icon name="menu" className="w-6 h-6" />}
                        </button>

                        <div className="hidden md:flex items-center space-x-8 w-1/3">
                            <button onClick={() => navigate('home')} className={`text-sm font-semibold tracking-wide transition ${currentPage === 'home' ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'}`}>HOME</button>
                            <button onClick={() => navigate('shop')} className={`text-sm font-semibold tracking-wide transition ${currentPage === 'shop' ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'}`}>SHOP</button>
                        </div>

                        <div className="flex-shrink-0 flex items-center justify-center w-1/3 cursor-pointer" onClick={() => navigate('home')}>
                            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-rose-900 flex items-center gap-2">
                                <Icon name="heart" className="w-5 h-5 text-rose-500" />
                                Crafty Cure
                            </h1>
                        </div>

                        <div className="flex items-center justify-end space-x-6 w-1/3">
                            <button onClick={() => navigate('about')} className={`hidden md:block text-sm font-semibold tracking-wide transition ${currentPage === 'about' ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'}`}>STORY</button>
                            <button onClick={() => navigate('cart')} className="relative flex items-center justify-center w-10 h-10 bg-rose-50 rounded-full text-rose-600 hover:bg-rose-100 transition shadow-inner">
                                <Icon name="shoppingBag" className="w-5 h-5" />
                                {getCartCount() > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center rounded-full shadow-sm border-2 border-white">
                                        {getCartCount()}
                                    </span>
                                )}
                            </button>
                        </div>
                    </nav>

                    {isMobileMenuOpen && (
                        <div className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-rose-100 p-6 flex flex-col space-y-2 pointer-events-auto md:hidden animate-fade-in-up z-50">
                            <button onClick={() => navigate('home')} className="text-2xl font-serif text-left text-gray-800 hover:text-rose-500 py-3 border-b border-rose-50">Home</button>
                            <button onClick={() => navigate('shop')} className="text-2xl font-serif text-left text-gray-800 hover:text-rose-500 py-3 border-b border-rose-50">Shop Collection</button>
                            <button onClick={() => navigate('about')} className="text-2xl font-serif text-left text-gray-800 hover:text-rose-500 py-3 border-b border-rose-50">Our Story</button>
                            <button onClick={() => navigate('cart')} className="text-2xl font-serif text-left text-rose-500 py-3 flex items-center justify-between">
                                Cart <span className="bg-rose-100 text-rose-600 text-sm py-1 px-3 rounded-full">{getCartCount()} Items</span>
                            </button>
                        </div>
                    )}
                </div>
            );

            const Toast = () => {
                if (!toast.show) return null;
                return (
                    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100] animate-fade-in-up">
                        <div className="bg-rose-500 text-white px-6 py-3 rounded-full shadow-[0_10px_40px_rgb(244,63,94,0.4)] flex items-center space-x-2 text-sm font-bold tracking-wide">
                            <span>{toast.message}</span>
                        </div>
                    </div>
                );
            };

            const ProductCard = ({ product }) => (
                <div className="bg-white rounded-[1.5rem] p-3 sm:p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-rose-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative">
                    {product.tag && (
                        <div className="absolute top-0 right-4 -translate-y-1/2 z-10 bg-orange-400 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                            {product.tag}
                        </div>
                    )}
                    <div className="relative aspect-square overflow-hidden rounded-[1rem] mb-4 bg-rose-50">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full text-rose-600 shadow-sm">
                            {product.category}
                        </div>
                    </div>
                    
                    <div className="flex flex-col flex-grow justify-between px-1">
                        <div>
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight mb-1.5">{product.name}</h3>
                            <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{product.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                            <span className="text-base sm:text-lg font-bold text-gray-900">₹{product.price}</span>
                            <button onClick={() => addToCart(product)} className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-500 hover:text-white transition-colors shadow-sm" title="Add to cart">
                                <Icon name="plus" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            );

            // --- PAGE VIEWS ---

            const HomeView = () => (
                <div className="animate-fade-in-up">
                    {/* Hero Section */}
                    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-rose-200/50 rounded-full mix-blend-multiply filter blur-[80px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-orange-200/40 rounded-full mix-blend-multiply filter blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

                        <div className="lg:w-1/2 text-center lg:text-left z-10">
                            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-100 text-rose-600 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                                <Icon name="sparkles" className="w-3 h-3" />
                                <span>Handcrafted in Kutch</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
                                Turn memories into <br/> <span className="gradient-text">Timeless Art</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Beautifully crafted resin preservation, custom varmalas, and aesthetic decor. Made with love, just for you.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <button onClick={() => navigate('shop')} className="w-full sm:w-auto bg-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_20px_rgb(244,63,94,0.3)] hover:bg-rose-600 hover:-translate-y-1 transition-all flex items-center justify-center">
                                    Shop Collection <Icon name="arrowRight" className="w-5 h-5 ml-2" />
                                </button>
                                <button onClick={() => navigate('about')} className="w-full sm:w-auto bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold hover:border-rose-300 hover:text-rose-600 transition-all">
                                    Our Story
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative mt-16 lg:mt-0 h-[350px] sm:h-[500px] w-full">
                            <div className="absolute right-0 sm:right-10 top-0 w-3/4 sm:w-2/3 h-4/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl animate-float border-4 border-white">
                                <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Varmala" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute left-0 sm:left-10 bottom-0 w-3/5 sm:w-1/2 h-2/3 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl animate-float-delayed border-4 border-white">
                                <img src="https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Candles" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Pair Grid Section */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Trending Masterpieces</h2>
                            <p className="text-gray-500">Hand-picked aesthetic pieces to elevate your space.</p>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                            {PRODUCTS.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}
                        </div>

                        <div className="mt-12 text-center">
                            <button onClick={() => navigate('shop')} className="inline-flex items-center justify-center bg-rose-50 text-rose-600 font-bold px-8 py-4 rounded-full hover:bg-rose-100 transition shadow-sm">
                                View Full Gallery
                            </button>
                        </div>
                    </div>

                    {/* Categories Vibe */}
                    <div className="bg-rose-500 py-20 sm:py-24 rounded-[3rem] sm:rounded-[5rem] mx-2 sm:mx-8 mb-8 relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        
                        <div className="px-4 relative z-10 text-center text-white mb-12 sm:mb-16">
                            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Made with Magic</h2>
                            <p className="text-rose-100 max-w-2xl mx-auto text-base sm:text-lg">Explore our signature categories designed to capture the beauty of your most cherished moments.</p>
                        </div>

                        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                            {[
                                { title: "Resin Keepsakes", img: "https://images.unsplash.com/photo-1616628188506-4bf98fc91176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                                { title: "Aesthetic Candles", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                                { title: "Custom Framing", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
                            ].map((cat, idx) => (
                                <div key={idx} onClick={() => navigate('shop')} className="group cursor-pointer bg-white p-2.5 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform duration-300">
                                    <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4">
                                        <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    </div>
                                    <h3 className="text-center font-bold text-gray-900 text-lg pb-2 group-hover:text-rose-500 transition-colors">{cat.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );

            const ShopView = () => {
                const filteredProducts = activeFilter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeFilter);
                return (
                    <div className="pt-32 pb-24 animate-fade-in-up">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="mb-12 text-center max-w-2xl mx-auto">
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">The Collection</h1>
                                <p className="text-gray-500 text-lg">Curated aesthetic pieces just for you.</p>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                                {shopCategories.map((cat, i) => (
                                    <button key={i} onClick={() => setActiveFilter(cat)} className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeFilter === cat ? 'bg-rose-500 text-white shadow-[0_4px_15px_rgb(244,63,94,0.3)]' : 'bg-white border border-gray-200 text-gray-600 hover:border-rose-300 hover:text-rose-500'}`}>
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                                    {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
                                </div>
                            ) : (
                                <div className="text-center py-24 text-gray-400 font-medium">No magic found in this category yet.</div>
                            )}
                        </div>
                    </div>
                );
            };

            const AboutView = () => (
                <div className="pt-32 pb-24 animate-fade-in-up">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-rose-50 overflow-hidden flex flex-col lg:flex-row mb-16">
                            <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-auto">
                                <img src="https://images.unsplash.com/photo-1544967082-b9d25d840d44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Artist at work" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            
                            <div className="lg:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
                                <span className="text-rose-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 flex items-center">
                                    <Icon name="sparkles" className="w-4 h-4 mr-2" /> The Studio
                                </span>
                                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">Crafting magic in <br/><span className="text-rose-500">Bhuj, Kutch.</span></h1>
                                
                                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                                    <p>Hello! I am a certified resin artist dedicated to turning your fleeting moments into permanent masterpieces.</p>
                                    <p>Whether it's preserving your precious wedding Varmala or crafting custom aesthetic home decor, every single piece is poured, polished, and packaged with immense love and care.</p>
                                </div>

                                <div className="bg-rose-50 rounded-2xl p-5 sm:p-6 border border-rose-100">
                                    <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">Studio Policies & Process:</h4>
                                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                                        <li className="flex items-start"><Icon name="arrowRight" className="w-4 h-4 text-rose-500 mr-2 shrink-0" /> 100% Customized to your aesthetic vibe.</li>
                                        <li className="flex items-start"><Icon name="arrowRight" className="w-4 h-4 text-rose-500 mr-2 shrink-0" /> Processing time is 10-15 business days for resin.</li>
                                        <li className="flex items-start"><Icon name="arrowRight" className="w-4 h-4 text-rose-500 mr-2 shrink-0" /> Strict no cancellation policy after confirmation.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Grid */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Client Diaries</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {REVIEWS.map(review => (
                                <div key={review.id} className="bg-white border border-rose-50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col">
                                    <div className="flex text-orange-400 mb-4">
                                        {[...Array(review.rating)].map((_, i) => <Icon key={i} name="star" className="w-4 h-4" />)}
                                    </div>
                                    <p className="text-gray-600 italic flex-grow text-sm leading-relaxed mb-4">"{review.text}"</p>
                                    <p className="font-bold text-gray-900 text-sm">— {review.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );

            const CartView = () => {
                const [isCheckingOut, setIsCheckingOut] = useState(false);

                const handleCheckout = () => {
                    if(cart.length === 0) return;
                    setIsCheckingOut(true);
                    setTimeout(() => {
                        setCart([]);
                        setIsCheckingOut(false);
                        showToast("💖 Securely processed! Thank you for your order.");
                        navigate('home');
                    }, 2000);
                };

                return (
                    <div className="pt-32 pb-24 animate-fade-in-up">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8">Your Cart</h1>
                            
                            {cart.length === 0 ? (
                                <div className="bg-white p-12 sm:p-20 text-center rounded-[2rem] sm:rounded-[3rem] border border-rose-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Icon name="shoppingBag" className="w-10 h-10 text-rose-300" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4">It's empty here!</h2>
                                    <p className="text-gray-500 mb-8 text-sm sm:text-base">Let's find some beautiful art to fill it up.</p>
                                    <button onClick={() => navigate('shop')} className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_20px_rgb(244,63,94,0.3)] hover:bg-rose-600 transition">
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-2/3 bg-white rounded-[2rem] border border-rose-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden h-fit">
                                        <ul className="divide-y divide-gray-100">
                                            {cart.map((item) => (
                                                <li key={item.id} className="p-4 sm:p-6 flex items-center">
                                                    <img src={item.image} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-[1rem] bg-rose-50" />
                                                    <div className="ml-4 flex-grow">
                                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.name}</h3>
                                                        <p className="text-rose-500 font-bold text-sm mb-3">₹{item.price}</p>
                                                        
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center bg-rose-50 rounded-full p-1">
                                                                <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-rose-600 hover:bg-white rounded-full transition shadow-sm">
                                                                    <Icon name="minus" className="w-3 h-3" />
                                                                </button>
                                                                <span className="w-8 text-center font-bold text-xs sm:text-sm">{item.quantity}</span>
                                                                <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-rose-600 hover:bg-white rounded-full transition shadow-sm">
                                                                    <Icon name="plus" className="w-3 h-3" />
                                                                </button>
                                                            </div>
                                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-rose-500 p-2 transition bg-gray-50 rounded-full">
                                                                <Icon name="trash" className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="lg:w-1/3">
                                        <div className="bg-white rounded-[2rem] border border-rose-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 sticky top-28">
                                            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Order Summary</h3>
                                            <div className="space-y-4 text-sm text-gray-600 mb-6">
                                                <div className="flex justify-between">
                                                    <span>Subtotal ({getCartCount()} items)</span>
                                                    <span className="font-bold text-gray-900">₹{getCartTotal()}</span>
                                                </div>
                                                <div className="flex justify-between text-green-600 font-medium">
                                                    <span>Shipping</span>
                                                    <span>Free</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-between items-center text-xl font-bold text-gray-900 border-t border-gray-100 pt-6 mb-8">
                                                <span>Total</span>
                                                <span className="text-rose-600">₹{getCartTotal()}</span>
                                            </div>
                                            
                                            <button onClick={handleCheckout} disabled={isCheckingOut} className="w-full bg-rose-500 text-white py-4 rounded-full font-bold hover:bg-rose-600 transition shadow-[0_8px_20px_rgb(244,63,94,0.3)] disabled:opacity-70 flex justify-center items-center">
                                                {isCheckingOut ? "Processing securely..." : "Checkout Securely"}
                                            </button>
                                            <div className="mt-6 text-center flex flex-col items-center justify-center text-xs text-gray-400">
                                                <Icon name="shield" className="w-5 h-5 mb-2 text-green-500" /> 
                                                <span>256-bit Secure Checkout.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            };

            const Footer = () => (
                <footer className="bg-white border-t border-rose-50 pt-16 pb-8 mt-auto">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-rose-900 mb-3 flex items-center justify-center md:justify-start gap-2 cursor-pointer" onClick={() => navigate('home')}>
                                    <Icon name="heart" className="w-5 h-5 text-rose-500" />
                                    Crafty Cure
                                </h3>
                                <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">Creating beautiful memories through handcrafted art in Bhuj, Kutch.</p>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => showToast("Opening Instagram...")} className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-500 hover:text-white transition shadow-sm">
                                    <Icon name="instagram" className="w-5 h-5" />
                                </button>
                                <button onClick={() => showToast("Opening Email...")} className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-500 hover:text-white transition shadow-sm">
                                    <Icon name="mail" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
                            <p>&copy; {new Date().getFullYear()} Crafty Cure Studio. All rights reserved.</p>
                            <div className="flex space-x-6">
                                <button onClick={() => showToast("Privacy Policy page")} className="hover:text-rose-500 transition">Privacy</button>
                                <button onClick={() => showToast("Terms page")} className="hover:text-rose-500 transition">Terms</button>
                            </div>
                        </div>
                    </div>
                </footer>
            );

            return (
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        {currentPage === 'home' && <HomeView />}
                        {currentPage === 'shop' && <ShopView />}
                        {currentPage === 'about' && <AboutView />}
                        {currentPage === 'cart' && <CartView />}
                    </main>
                    <Footer />
                    <Toast />
                </div>
            );
        };

        // Render the app
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
