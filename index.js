<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>YokYok - Ethnische Prospekte</title>
    <meta name="theme-color" content="#d73027">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="YokYok">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
            min-height: 100vh;
            overflow-x: hidden;
            touch-action: manipulation;
        }

        .app-container {
            max-width: 100%;
            min-height: 100vh;
            position: relative;
        }

        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-image {
            width: 45px;
            height: 45px;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .logo-svg {
            width: 100%;
            height: 100%;
            background-image: url('yokyok-logo.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 8px;
        }

        .logo-text {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }

        .header-actions {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .search-btn, .menu-toggle {
            background: none;
            border: none;
            color: #333;
            font-size: 24px;
            cursor: pointer;
            padding: 8px;
            border-radius: 12px;
            transition: background-color 0.2s;
        }

        .search-btn:active, .menu-toggle:active {
            background: rgba(0, 0, 0, 0.1);
        }

        .search-container {
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }

        .search-bar {
            width: 100%;
            padding: 15px 20px;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            background: white;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            outline: none;
        }

        .nav-tabs {
            display: flex;
            overflow-x: auto;
            padding: 0 20px 10px;
            gap: 10px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            scrollbar-width: none;
            -ms-overflow-style: none;
        }

        .nav-tabs::-webkit-scrollbar {
            display: none;
        }

        .nav-tab {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
            min-width: fit-content;
        }

        .nav-tab.active {
            background: white;
            color: #ff6b35;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .main-content {
            padding: 20px;
            min-height: calc(100vh - 200px);
            padding-bottom: 100px;
        }

        .page {
            display: none;
            animation: fadeInUp 0.4s ease;
        }

        .page.active {
            display: block;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .welcome-section {
            text-align: center;
            color: white;
            margin-bottom: 30px;
        }

        .welcome-title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .welcome-subtitle {
            font-size: 18px;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .country-flags {
            display: flex;
            justify-content: center;
            gap: 15px;
            font-size: 32px;
            margin-bottom: 20px;
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 30px;
        }

        .category-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 25px 15px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .category-card:active {
            transform: scale(0.95);
            background: rgba(255, 255, 255, 0.25);
        }

        .category-icon {
            font-size: 40px;
            margin-bottom: 10px;
            display: block;
        }

        .category-title {
            font-size: 16px;
            font-weight: bold;
            color: white;
            margin-bottom: 5px;
        }

        .category-count {
            font-size: 14px;
            color: white;
            opacity: 0.8;
        }

        .prospekt-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }

        .prospekt-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .prospekt-card:active {
            transform: scale(0.95);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .prospekt-image {
            width: 100%;
            height: 120px;
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 32px;
            position: relative;
        }

        .prospekt-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(255, 255, 255, 0.9);
            color: #ff6b35;
            padding: 4px 8px;
            border-radius: 10px;
            font-size: 12px;
            font-weight: bold;
        }

        .prospekt-info {
            padding: 15px;
        }

        .prospekt-title {
            font-size: 14px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }

        .prospekt-date {
            font-size: 12px;
            color: #666;
            margin-bottom: 8px;
        }

        .prospekt-discount {
            background: #ff6b35;
            color: white;
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: bold;
            display: inline-block;
        }

        .stores-grid {
            display: grid;
            gap: 20px;
            margin-bottom: 20px;
        }

        .store-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .store-card:active {
            transform: scale(0.98);
            background: rgba(255, 255, 255, 0.25);
        }

        .store-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .store-avatar {
            width: 50px;
            height: 50px;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin-right: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .store-info h3 {
            font-size: 18px;
            font-weight: bold;
            color: white;
            margin-bottom: 5px;
        }

        .store-meta {
            display: flex;
            gap: 15px;
            font-size: 14px;
            color: white;
            opacity: 0.8;
        }

        .store-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .store-tag {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 500;
        }

        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 10px 0 20px;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
            backdrop-filter: blur(20px);
            z-index: 100;
        }

        .nav-items {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #666;
            font-size: 12px;
            font-weight: 500;
            padding: 8px;
            border-radius: 12px;
            transition: all 0.3s ease;
            min-width: 60px;
            cursor: pointer;
        }

        .nav-item.active {
            color: #ff6b35;
            background: rgba(255, 107, 53, 0.1);
        }

        .nav-icon {
            font-size: 20px;
            margin-bottom: 4px;
        }

        @media (min-width: 768px) {
            .prospekt-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            .categories-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="app-container">
        <header class="header">
            <div class="logo-container">
                <div class="logo-image">
                    <div class="logo-svg"></div>
                </div>
                <div class="logo-text">YokYok</div>
            </div>
            <div class="header-actions">
                <button class="search-btn" onclick="toggleSearch()">🔍</button>
                <button class="menu-toggle" onclick="toggleMenu()">☰</button>
            </div>
        </header>

        <div class="search-container" id="searchContainer" style="display: none;">
            <input type="text" class="search-bar" placeholder="Suche nach Geschäften, Produkten..." id="searchInput">
        </div>

        <div class="nav-tabs">
            <button class="nav-tab active" onclick="showCategory('alle')">Alle</button>
            <button class="nav-tab" onclick="showCategory('tuerkisch')">🇹🇷 Türkisch</button>
            <button class="nav-tab" onclick="showCategory('arabisch')">🇸🇦 Arabisch</button>
            <button class="nav-tab" onclick="showCategory('asiatisch')">🇨🇳 Asiatisch</button>
            <button class="nav-tab" onclick="showCategory('afrikanisch')">🇪🇹 Afrikanisch</button>
            <button class="nav-tab" onclick="showCategory('europaeisch')">🇪🇺 Europäisch</button>
        </div>

        <main class="main-content">
            <div id="home" class="page active">
                <div class="welcome-section">
                    <h1 class="welcome-title">Burada yokyok!</h1>
                    <p class="welcome-subtitle">Entdecke Angebote aus ethnischen Supermärkten</p>
                    <div class="country-flags">
                        <span>🇩🇪</span><span>🇹🇷</span><span>🇸🇦</span><span>🇨🇳</span><span>🇪🇹</span>
                    </div>
                </div>

                <div class="categories-grid">
                    <div class="category-card" onclick="showCategory('tuerkisch')">
                        <span class="category-icon">🇹🇷</span>
                        <div class="category-title">Türkische Märkte</div>
                        <div class="category-count">12 Geschäfte</div>
                    </div>
                    
                    <div class="category-card" onclick="showCategory('arabisch')">
                        <span class="category-icon">🇸🇦</span>
                        <div class="category-title">Arabische Geschäfte</div>
                        <div class="category-count">8 Geschäfte</div>
                    </div>
                    
                    <div class="category-card" onclick="showCategory('asiatisch')">
                        <span class="category-icon">🇨🇳</span>
                        <div class="category-title">Asiatische Märkte</div>
                        <div class="category-count">15 Geschäfte</div>
                    </div>
                    
                    <div class="category-card" onclick="showCategory('afrikanisch')">
                        <span class="category-icon">🇪🇹</span>
                        <div class="category-title">Afrikanische Geschäfte</div>
                        <div class="category-count">6 Geschäfte</div>
                    </div>
                </div>

                <h2 style="color: white; font-size: 24px; margin-bottom: 20px; font-weight: bold;">📢 Aktuelle Angebote</h2>
                <div class="prospekt-grid">
                    <div class="prospekt-card" onclick="openProspekt('altin-market')">
                        <div class="prospekt-image">
                            🏪
                            <div class="prospekt-badge">NEU</div>
                        </div>
                        <div class="prospekt-info">
                            <div class="prospekt-title">Altın Market</div>
                            <div class="prospekt-date">Gültig bis 15.06.2025</div>
                            <div class="prospekt-discount">Bis -50%</div>
                        </div>
                    </div>
                    
                    <div class="prospekt-card" onclick="openProspekt('asia-world')">
                        <div class="prospekt-image">
                            🏮
                            <div class="prospekt-badge">HOT</div>
                        </div>
                        <div class="prospekt-info">
                            <div class="prospekt-title">Asia World</div>
                            <div class="prospekt-date">Gültig bis 20.06.2025</div>
                            <div class="prospekt-discount">Bis -30%</div>
                        </div>
                    </div>
                    
                    <div class="prospekt-card" onclick="openProspekt('habibi-market')">
                        <div class="prospekt-image">🕌</div>
                        <div class="prospekt-info">
                            <div class="prospekt-title">Habibi Market</div>
                            <div class="prospekt-date">Gültig bis 12.06.2025</div>
                            <div class="prospekt-discount">Bis -40%</div>
                        </div>
                    </div>
                    
                    <div class="prospekt-card" onclick="openProspekt('africa-store')">
                        <div class="prospekt-image">🌍</div>
                        <div class="prospekt-info">
                            <div class="prospekt-title">Africa Store</div>
                            <div class="prospekt-date">Gültig bis 18.06.2025</div>
                            <div class="prospekt-discount">Bis -25%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="prospekte" class="page">
                <h2 style="color: white; font-size: 24px; margin-bottom: 20px; font-weight: bold;">📄 Alle Prospekte</h2>
                <div class="prospekt-grid">
                    <div class="prospekt-card" onclick="openProspekt('metro-turk')">
                        <div class="prospekt-image">🏪</div>
                        <div class="prospekt-info">
                            <div class="prospekt-title">Metro Türk</div>
                            <div class="prospekt-date">Gültig bis 22.06.2025</div>
                            <div class="prospekt-discount">Bis -35%</div>
                        </div>
                    </div>
                    
                    <div class="prospekt-card" onclick="openProspekt('istanbul-basar')">
                        <div class="prospekt-image">🕌</div>
                        <div class="prospekt-info">
                            <div class="prospekt-title">Istanbul Basar</div>
                            <div class="prospekt-date">Gültig bis 25.06.2025</div>
                            <div class="prospekt-discount">Bis -20%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="geschaefte" class="page">
                <h2 style="color: white; font-size: 24px; margin-bottom: 20px; font-weight: bold;">🏪 Geschäfte</h2>
                <div class="stores-grid">
                    <div class="store-card" onclick="openStore('altin-market')">
                        <div class="store-header">
                            <div class="store-avatar">🇹🇷</div>
                            <div class="store-info">
                                <h3>Altın Market</h3>
                                <div class="store-meta">
                                    <span>📍 2.1 km</span>
                                    <span>⭐ 4.5</span>
                                    <span>🕐 Offen</span>
                                </div>
                            </div>
                        </div>
                        <div class="store-tags">
                            <span class="store-tag">Türkische Spezialitäten</span>
                            <span class="store-tag">Halal</span>
                        </div>
                    </div>
                    
                    <div class="store-card" onclick="openStore('asia-world')">
                        <div class="store-header">
                            <div class="store-avatar">🇨🇳</div>
                            <div class="store-info">
                                <h3>Asia World</h3>
                                <div class="store-meta">
                                    <span>📍 1.5 km</span>
                                    <span>⭐ 4.7</span>
                                    <span>🕐 Offen</span>
                                </div>
                            </div>
                        </div>
                        <div class="store-tags">
                            <span class="store-tag">Asiatische Küche</span>
                            <span class="store-tag">Sushi</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div class="bottom-nav">
            <div class="nav-items">
                <div class="nav-item active" onclick="showPage('home')">
                    <span class="nav-icon">🏠</span>
                    <span>Start</span>
                </div>
                <div class="nav-item" onclick="showPage('prospekte')">
                    <span class="nav-icon">📄</span>
                    <span>Prospekte</span>
                </div>
                <div class="nav-item" onclick="showPage('geschaefte')">
                    <span class="nav-icon">🏪</span>
                    <span>Geschäfte</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentPage = 'home';
        let currentCategory = 'alle';

        function toggleSearch() {
            const searchContainer = document.getElementById('searchContainer');
            if (searchContainer) {
                const isVisible = searchContainer.style.display !== 'none';
                searchContainer.style.display = isVisible ? 'none' : 'block';
                if (!isVisible) {
                    const searchInput = document.getElementById('searchInput');
                    if (searchInput) {
                        searchInput.focus();
                    }
                }
            }
        }

        function toggleMenu() {
            console.log('Menu toggled');
        }

        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => item.classList.remove('active'));
            
            const activeNavItem = document.querySelector(`[onclick="showPage('${pageId}')"]`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }
            
            currentPage = pageId;
        }

        function showCategory(category) {
            currentCategory = category;
            
            const tabs = document.querySelectorAll('.nav-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            const activeTab = document.querySelector(`[onclick="showCategory('${category}')"]`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
            
            console.log('Filtering by category:', category);
        }

        function openProspekt(prospektId) {
            alert(`Öffne Prospekt: ${prospektId}`);
        }

        function openStore(storeId) {
            alert(`Öffne Geschäft: ${storeId}`);
        }

        document.addEventListener('DOMContentLoaded', function() {
            showPage('home');
            showCategory('alle');
        });
    </script>
</body>
</html>
