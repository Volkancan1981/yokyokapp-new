import React, { useState, useEffect } from 'react';
import { Search, Eye, Edit, Trash, CheckCircle, XCircle, Plus, Users, BarChart3, Upload } from 'lucide-react';

const YokYokApp = () => {
  const [currentLanguage, setCurrentLanguage] = useState('de');
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [flyers, setFlyers] = useState([]);

  // Translations
  const translations = {
    de: {
      title: 'YokYok',
      subtitle: 'Hier fehlt an nichts!',
      search: 'Suche nach Geschäften, Produkten...',
      categories: {
        all: 'Alle',
        turkish: 'Türkische Märkte',
        arabic: 'Arabische Geschäfte',
        asian: 'Asiatische Märkte',
        african: 'Afrikanische Geschäfte',
        european: 'Europäische Märkte',
        latin: 'Lateinamerikanische'
      },
      nav: {
        home: 'Startseite',
        flyers: 'Prospekte',
        stores: 'Geschäfte',
        admin: 'Admin'
      }
    },
    tr: {
      title: 'YokYok',
      subtitle: 'Avrupadaki tüm marketlerin indirimlerini YOKYOK.app`te bulabilirsiniz!',
      search: 'Mağaza, ürün ara...',
      categories: {
        all: 'Tümü',
        turkish: 'Türk Marketleri',
        arabic: 'Arap Mağazaları',
        asian: 'Asya Marketleri',
        african: 'Afrika Mağazaları',  
        european: 'Avrupa Marketleri',
        latin: 'Latin Amerika'
      },
      nav: {
        home: 'Ana Sayfa',
        flyers: 'Broşürler',
        stores: 'Mağazalar',
        admin: 'Yönetim'
      }
    },
    ar: {
      title: 'يوك يوك',
      subtitle: 'اكتشف أفضل العروض من الأسواق العرقية',
      search: 'ابحث عن المتاجر والمنتجات...',
      categories: {
        all: 'الكل',
        turkish: 'الأسواق التركية',
        arabic: 'المتاجر العربية',
        asian: 'الأسواق الآسيوية',
        african: 'المتاجر الأفريقية',
        european: 'الأسواق الأوروبية',
        latin: 'أمريكا اللاتينية'
      },
      nav: {
        home: 'الرئيسية',
        flyers: 'النشرات',
        stores: 'المتاجر',
        admin: 'الإدارة'
      }
    }
  };

  // Sample data
  const sampleFlyers = [
    {
      id: 1,
      storeName: 'Özkan Market',
      title: 'Wochenangebote',
      category: 'turkish',
      validFrom: '2025-05-20',
      validTo: '2025-05-27',
      status: 'live',
      views: 1250,
      location: 'Berlin, Kreuzberg'
    },
    {
      id: 2,
      storeName: 'Al-Nour Supermarkt',
      title: 'Ramadan Spezial',
      category: 'arabic',
      validFrom: '2025-05-18',
      validTo: '2025-05-25',
      status: 'live',
      views: 980,
      location: 'München, Maxvorstadt'
    },
    {
      id: 3,
      storeName: 'Asia Food Center',
      title: 'Frühlingsfest Angebote',
      category: 'asian',
      validFrom: '2025-05-15',
      validTo: '2025-05-30',
      status: 'pending',
      views: 0,
      location: 'Hamburg, St. Pauli'
    },
    {
      id: 4,
      storeName: 'Afrikan Store',
      title: 'Exotische Früchte',
      category: 'african',
      validFrom: '2025-05-22',
      validTo: '2025-05-29',
      status: 'live',
      views: 650,
      location: 'Köln, Ehrenfeld'
    }
  ];

  useEffect(() => {
    setFlyers(sampleFlyers);
  }, []);

  const t = translations[currentLanguage];

  const filteredFlyers = flyers.filter(flyer => {
    const matchesSearch = flyer.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         flyer.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || flyer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = {
    totalFlyers: flyers.length,
    liveFlyers: flyers.filter(f => f.status === 'live').length,
    pendingFlyers: flyers.filter(f => f.status === 'pending').length,
    totalViews: flyers.reduce((sum, f) => sum + f.views, 0),
    totalStores: new Set(flyers.map(f => f.storeName)).size
  };

  // Components
  const Header = () => (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <div className="text-2xl font-bold text-red-500">🛒</div>
          </div>
          <div>
            <h1 className="text-4xl font-bold">{t.title}</h1>
            <p className="text-xl opacity-90">{t.subtitle}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {Object.keys(translations).map(lang => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                currentLanguage === lang 
                  ? 'bg-white text-red-500' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {lang === 'de' ? '🇩🇪' : lang === 'tr' ? '🇹🇷' : '🇸🇦'}
            </button>
          ))}
        </div>
      </div>
      
      <nav className="flex gap-4">
        {['home', 'flyers', 'stores', 'admin'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === tab 
                ? 'bg-white text-red-500 font-medium' 
                : 'hover:bg-red-600'
            }`}
          >
            {t.nav[tab]}
          </button>
        ))}
      </nav>
    </div>
  );

  const SearchAndFilter = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <div className="flex gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        {Object.entries(t.categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === key
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );

  const FlyerCard = ({ flyer }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-2xl mb-2">🛒</div>
          <div className="font-bold">{flyer.storeName}</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{flyer.title}</h3>
        <p className="text-gray-600 mb-2">{flyer.location}</p>
        <p className="text-sm text-gray-500 mb-3">
          Gültig: {flyer.validFrom} - {flyer.validTo}
        </p>
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs ${
            flyer.status === 'live' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {flyer.status === 'live' ? 'Live' : 'Pending'}
          </span>
          <span className="text-sm text-gray-500">
            <Eye className="w-4 h-4 inline mr-1" />
            {flyer.views}
          </span>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-6">
      <SearchAndFilter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFlyers.map(flyer => (
          <FlyerCard key={flyer.id} flyer={flyer} />
        ))}
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold">{stats.totalFlyers}</div>
          <div className="text-gray-600">Total Flyers</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold">{stats.liveFlyers}</div>
          <div className="text-gray-600">Live</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <XCircle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold">{stats.pendingFlyers}</div>
          <div className="text-gray-600">Pending</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Eye className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold">{stats.totalViews}</div>
          <div className="text-gray-600">Total Views</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Users className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
          <div className="text-2xl font-bold">{stats.totalStores}</div>
          <div className="text-gray-600">Stores</div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Plus className="w-6 h-6 mr-2" />
          Prospekt hochladen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Geschäftsname"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
          <input
            type="text"
            placeholder="Prospekt Titel"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
            <option value="">Kategorie wählen</option>
            <option value="turkish">Türkischer Markt</option>
            <option value="arabic">Arabisches Geschäft</option>
            <option value="asian">Asiatischer Markt</option>
            <option value="african">Afrikanisches Geschäft</option>
          </select>
          <input
            type="text"
            placeholder="Standort"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>
        <div className="mt-4">
          <div className="border-2 border-dashed border-red-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <p className="text-gray-600">Prospekt-Dateien hier hochladen</p>
            <p className="text-sm text-gray-500">PDF, JPG, PNG bis 10MB</p>
          </div>
        </div>
        <button className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
          Prospekt veröffentlichen
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <Header />
        
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'flyers' && <HomePage />}
        {activeTab === 'stores' && <HomePage />}
        {activeTab === 'admin' && <AdminDashboard />}
      </div>
    </div>
  );
};

export default YokYokApp;
