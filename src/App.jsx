import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Menu, X, Clock, MapPin, Star, Heart } from 'lucide-react';

// Importing page components
const Homepage = () => {
    const [activeTab, setActiveTab] = useState('Startseite');
    
    return (
        <div className="homepage-content">
            <div className="striped-background">
                <div className="stripes-container">
                    {Array.from({ length: 21 }, (_, i) => (
                        <div
                            key={i}
                            className={`stripe ${i % 2 === 0 ? 'red' : 'white'}`}
                        />
                    ))}
                </div>
                <div className="content-wrapper">
                    <div className="content-box">
                        <div className="main-header">
                            <div className="title-animation">
                                <h1 className="main-title">
                                    nifty thrifty
                                </h1>
                                <div className="sparkles">
                                    <div className="sparkle"></div>
                                    <div className="sparkle"></div>
                                    <div className="sparkle"></div>
                                </div>
                            </div>
                            <h2 className="sub-title">
                                - 1st Class 2nd Hand -
                            </h2>
                        </div>
                        
                        <div className="text-content">
                            <div className="welcome-card">
                                <p className="text-paragraph">
                                    <strong>Hallo, Ihr Lieben!</strong><br /><br />
                                    Herzlich willkommen in meinem einzigartigen Thrift Store. Auf über 350 Quadratmetern präsentiere ich Euch in einem Ambiente, das seinesgleichen sucht, ein riesiges Angebot an wundervoller Secondhand Mode – sowohl für die Dame als auch für den Hernn. Vintage- und Designermode, Schuhe, Taschen, Modeschmuck, Accessoires, Mobiliar, Geschenkartikel – alles will von Euch entdeckt werden. Lasst Euch inspirieren und verzaubern! Ich freue mich auf Euren Besuch!<br /><br />
                                    <i>Euer Thomas Meyer</i>
                                </p>
                            </div>
                        </div>
                        
                        <div className="opening-hours">
                            <h3 className="section-title">
                                <Clock className="inline-icon" />
                                Öffnungszeiten
                            </h3>
                            <div className="hours-box">
                                <div className="hours-grid">
                                    <div className="hours-item">
                                        <span className="day">Mi. - Fr.</span>
                                        <span className="time">10-18 Uhr</span>
                                    </div>
                                    <div className="hours-item">
                                        <span className="day">Samstag</span>
                                        <span className="time">10-14 Uhr</span>
                                    </div>
                                </div>
                            </div>
                            <div className="address-card">
                                <MapPin className="address-icon" />
                                <div>
                                    <p>Lange Str. 56</p>
                                    <p>49610 Quakenbrück</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="image-section">
                            <h3 className="section-title">
                                <Star className="inline-icon" />
                                Highlights
                            </h3>
                            <div className="image-grid">
                                {['Highlight1.jpg', 'Highlight2.jpg', 'Highlight3.jpg'].map((imageName, index) => (
                                    <div key={index} className="image-item">
                                        <div className="image-wrapper">
                                            <img
                                                src={`/images/highlights/${imageName}`}
                                                alt={imageName}
                                                className="image"
                                            />
                                            <div className="image-overlay">
                                                <Heart className="heart-icon" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="text-content">
                            <div className="sustainability-card">
                                <p className="text-paragraph">
                                    In unserer heutigen Konsum- und Wegwerfgesellschaft ist es wichtig Kontrapunkte zu setzen und Institutionen zu etablieren, in denen Nachhaltigkeit eine große Rolle spielt. Ich beziehe meine Ware ausschließlich von Privatleuten und gewährleiste somit, dass die oft sogar unbenutzte Mode weiterhin wertgeschätzt wird und damit auch im Kreislauf bleibt. Mit Mode kann jeder Mensch seine Persönlichkeit formen, unterstützen oder auf den Punkt bringen. Mein Thrift Store ist da die absolut richtige Adresse – mit einer nie versiegenden Quelle an zauberhaften Einzelstücken.
                                </p>
                            </div>
                        </div>
                        
                        <div className="image-section">
                            <h3 className="section-title">
                                <MapPin className="inline-icon" />
                                Mein Laden in Quakenbrück
                            </h3>
                            <div className="image-grid">
                                {['Innen1.jpg', 'Innen2.jpg', 'Innen3.jpg'].map((imageName, index) => (
                                    <div key={index} className="image-item">
                                        <div className="image-wrapper">
                                            <img
                                                src={`/images/store/${imageName}`}
                                                alt={imageName}
                                                className="image"
                                            />
                                            <div className="image-overlay">
                                                <Heart className="heart-icon" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UeberMich = () => {
    return (
        <div className="homepage-content">
            <div className="striped-background">
                <div className="stripes-container">
                    {Array.from({ length: 21 }, (_, i) => (
                        <div
                            key={i}
                            className={`stripe ${i % 2 === 0 ? 'red' : 'white'}`}
                        />
                    ))}
                </div>
                <div className="content-wrapper">
                    <div className="content-box">
                        <div className="main-header">
                            <h1 className="main-title">nifty thrifty</h1>
                            <h2 className="sub-title">- 1st Class 2nd Hand -</h2>
                        </div>
                        <div className="text-content">
                            <div className="about-card">
                                <p className="text-paragraph">
                                    <strong>Hallo!</strong><br /><br />
                                    Ich bin der Thomas Meyer und betreibe mein Geschäft nun seit mehr als 2 Jahren - an dieser Stelle aktuell seit Anfang Februar 2025.<br /><br />
                                    Secondhandläden haben mich persönlich als Kunde schon immer interessiert. Die Vorstellung einmal selber Inhaber eines Thrift Stores zu sein hat mich nie so richtig losgelassen und fortan fasziniert.<br /><br />
                                    Nun ist einer meiner Träume Wirklichkeit geworden und mein Ziel ist es, einen außergewöhnlichen Ort zu erschaffen – einen Ort, an dem man sich fallen lassen kann. Ein Refugium in dem die Welt draußen bleiben kann. A place to be – mit Ambiente, Atmosphäre, Sinnlichkeit und Wertschätzung.<br /><br />
                                    Ausgesuchte Mode, Vintageartikel, tolle Dekorationen, klasse Events, eine gute positive Stimmung und individuelle fachliche Beratung mit ganz viel Persönlichkeit sind eine gelungene Mischung und seit Beginn Garant für meinen Erfolg.<br /><br />
                                    Ich mache mir täglich Gedanken, Dinge zu verbessern, zeitgeistig zu agieren, vorausschauend zu handeln und versuche, mein nifty thrifty zu einem Ort zu machen, an dem man sich trifft, sich inspiriert, und tolle Sachen entdeckt.<br /><br />
                                    Die vielen positiven Rückmeldungen meiner lieben Kundinnen und Kunden zeigen mir, dass ich da den richtigen Weg eingeschlagen habe.<br /><br />
                                    Einen Weg, den ich weitergehen werde!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Atelier = () => (
    <div className="homepage-content">
        <div className="striped-background">
            <div className="stripes-container">
                {Array.from({ length: 21 }, (_, i) => (
                    <div key={i} className={`stripe ${i % 2 === 0 ? 'red' : 'white'}`} />
                ))}
            </div>
            <div className="content-wrapper">
                <div className="content-box">
                    <div className="main-header">
                        <h1 className="main-title">nifty thrifty</h1>
                        <h2 className="sub-title">- 1st Class 2nd Hand -</h2>
                    </div>
                    <div className="coming-soon-card">
                        <h3>🎨 Atelier</h3>
                        <p>Bald verfügbar - In Arbeit!</p>
                        <div className="loading-animation">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Datenschutzerklaerung = () => {
    return (
        <div className="homepage-content">
            <div className="striped-background">
                <div className="stripes-container">
                    {Array.from({ length: 21 }, (_, i) => (
                        <div key={i} className={`stripe ${i % 2 === 0 ? 'red' : 'white'}`} />
                    ))}
                </div>
                <div className="content-wrapper">
                    <div className="content-box">
                        <div className="main-header">
                            <h1 className="main-title">nifty thrifty</h1>
                            <h2 className="sub-title">- 1st Class 2nd Hand -</h2>
                        </div>
                        <div className="legal-content">
                            <h2>Datenschutzerklärung</h2>
                            <p><em>Transparenz und Sicherheit für Ihre Daten</em></p>
                            
                            <div className="legal-section">
                                <h3>Verarbeitung Ihrer Daten gemäß Art. 13 DS-GVO</h3>
                                
                                <h4>1. Verantwortlicher und Datenschutzbeauftragter</h4>
                                <p>
                                    Verantwortlich für diese Website ist:<br />
                                    <strong>nifty thrifty</strong> / Inh. Thomas Meyer<br />
                                    <a href="mailto:kunst.raum@gmx.de">kunst.raum@gmx.de</a>
                                </p>

                                <h4>2. Daten, die für die Bereitstellung der Website und die Erstellung der Protokolldateien verarbeitet werden</h4>
                                <p>Bei jedem Zugriff auf Inhalte der Website werden vorübergehend Daten gespeichert, die möglicherweise eine Identifizierung zulassen.</p>
                                
                                <h4>3. Betroffenenrechte</h4>
                                <ul>
                                    <li>Recht auf Auskunft (Art. 15 DS-GVO)</li>
                                    <li>Recht auf Widerspruch (Art. 21 DS-GVO)</li>
                                    <li>Recht auf Berichtigung (Art. 16 DS-GVO)</li>
                                    <li>Recht auf Löschung (Art. 17 DS-GVO)</li>
                                </ul>
                                
                                <div className="contact-info">
                                    <h4>Kontakt</h4>
                                    <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                                    <p>
                                        <strong>nifty thrifty</strong> / Inh. Thomas Meyer<br />
                                        <a href="mailto:kunst.raum@gmx.de">kunst.raum@gmx.de</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Impressum = () => {
    return (
        <div className="homepage-content">
            <div className="striped-background">
                <div className="stripes-container">
                    {Array.from({ length: 21 }, (_, i) => (
                        <div key={i} className={`stripe ${i % 2 === 0 ? 'red' : 'white'}`} />
                    ))}
                </div>
                <div className="content-wrapper">
                    <div className="content-box">
                        <div className="main-header">
                            <h1 className="main-title">nifty thrifty</h1>
                            <h2 className="sub-title">- 1st Class 2nd Hand -</h2>
                        </div>
                        <div className="legal-content">
                            <h2>Impressum</h2>
                            <div className="impressum-grid">
                                <div className="info-item">
                                    <strong>Firma:</strong>
                                    <span>nifty thrifty / Inh. Thomas Meyer</span>
                                </div>
                                <div className="info-item">
                                    <strong>Adresse:</strong>
                                    <span>Lange Str. 56, 49610 Quakenbrück, Deutschland</span>
                                </div>
                                <div className="info-item">
                                    <strong>Telefon:</strong>
                                    <span>015208994108</span>
                                </div>
                                <div className="info-item">
                                    <strong>E-Mail:</strong>
                                    <span>kunst.raum@gmx.de</span>
                                </div>
                                <div className="info-item">
                                    <strong>Vertretungsberechtigte Person:</strong>
                                    <span>Thomas Meyer</span>
                                </div>
                                <div className="info-item">
                                    <strong>Umsatzsteuer-ID:</strong>
                                    <span>DE81 270 1485</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Mobile-responsive Navigation Component
const NavBar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setActiveTab('Startseite');
        } else if (path === '/ueber-mich') {
            setActiveTab('Über mich');
        } else if (path === '/atelier') {
            setActiveTab('Atelier');
        } else if (path === '/datenschutzerklaerung') {
            setActiveTab('Datenschutzerklärung');
        } else if (path === '/impressum') {
            setActiveTab('Impressum');
        }
        
        // Close menu when location changes
        setIsMenuOpen(false);
    }, [location]);

    const tabs = [
        { name: 'Startseite', path: '/' },
        { name: 'Über mich', path: '/ueber-mich' },
        { name: 'Atelier', path: '/atelier' },
        { name: 'Datenschutzerklärung', path: '/datenschutzerklaerung' },
        { name: 'Impressum', path: '/impressum' },
    ];

    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to="/" className="brand-link">
                        <span className="brand-text">nifty thrifty</span>
                    </Link>
                </div>
                
                {/* Mobile menu button */}
                <button 
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                
                {/* Desktop navigation */}
                <div className="nav-tabs desktop-nav">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className={`nav-tab ${activeTab === tab.name ? 'active' : ''}`}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>
            </div>
            
            {/* Mobile navigation menu */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                {tabs.map((tab) => (
                    <Link
                        key={tab.name}
                        to={tab.path}
                        className={`mobile-nav-tab ${activeTab === tab.name ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {tab.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

// Main App component
function App() {
    return (
        <Router>
            <div className="App">
                <style>
                {`
                    .App {
                        text-align: center;
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        color: #1f2937;
                    }
                    
                    :root {
                        --primary-blue: #005f67;
                        --ruby-red: #800020;
                        --white: #ffffff;
                        --gold: #FFD700;
                        --gray-50: #f9fafb;
                        --gray-100: #f3f4f6;
                        --gray-200: #e5e7eb;
                        --gray-300: #d1d5db;
                        --gray-400: #9ca3af;
                        --gray-600: #4b5563;
                        --gray-800: #1f2937;
                        --black: #000000;
                        --shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                        --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    }
                    
                    * {
                        scroll-behavior: smooth;
                        box-sizing: border-box;
                    }
                    
                    body {
                        margin: 0;
                        padding: 0;
                        overflow-x: hidden;
                        background: linear-gradient(135deg, var(--gray-50) 0%, #ffffff 100%);
                    }
                    
                    .main-content-area {
                        padding-top: 80px;
                    }
                    
                    /* Navigation Styles */
                    .nav-bar {
                        background: rgba(0, 95, 103, 0.95);
                        backdrop-filter: blur(20px);
                        padding: 1rem 0;
                        box-shadow: var(--shadow);
                        border-radius: 0 0 2rem 2rem;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        z-index: 1000;
                        transition: all 0.3s ease;
                    }
                    
                    .nav-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 2rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    
                    .nav-brand {
                        font-weight: 700;
                        font-size: 1.5rem;
                        color: var(--gold);
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
                    }
                    
                    .brand-link {
                        text-decoration: none;
                        color: inherit;
                    }
                    
                    .mobile-menu-btn {
                        display: none;
                        background: none;
                        border: none;
                        color: var(--white);
                        cursor: pointer;
                        padding: 0.5rem;
                        border-radius: 0.5rem;
                        transition: background-color 0.2s;
                    }
                    
                    .mobile-menu-btn:hover {
                        background-color: rgba(255, 255, 255, 0.1);
                    }
                    
                    .desktop-nav {
                        display: flex;
                        gap: 0.5rem;
                    }
                    
                    .nav-tab {
                        padding: 0.75rem 1.5rem;
                        border-radius: 50px;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        font-weight: 500;
                        color: var(--white);
                        text-decoration: none;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .nav-tab::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                        transition: left 0.5s;
                    }
                    
                    .nav-tab:hover::before {
                        left: 100%;
                    }
                    
                    .nav-tab.active {
                        background: linear-gradient(135deg, var(--white), #f8fafc);
                        color: var(--gray-800);
                        box-shadow: var(--shadow);
                        transform: translateY(-2px);
                    }
                    
                    .nav-tab:not(.active):hover {
                        background: rgba(255, 255, 255, 0.15);
                        transform: translateY(-1px);
                    }
                    
                    .mobile-nav {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: var(--primary-blue);
                        border-radius: 0 0 1.5rem 1.5rem;
                        box-shadow: var(--shadow);
                        transform: translateY(-100%);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        padding: 1rem 0;
                    }
                    
                    .mobile-nav.open {
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                    }
                    
                    .mobile-nav-tab {
                        display: block;
                        padding: 1rem 2rem;
                        color: var(--white);
                        text-decoration: none;
                        transition: all 0.2s;
                        border-left: 4px solid transparent;
                    }
                    
                    .mobile-nav-tab:hover {
                        background: rgba(255, 255, 255, 0.1);
                        border-left-color: var(--gold);
                        padding-left: 2.5rem;
                    }
                    
                    .mobile-nav-tab.active {
                        background: var(--white);
                        color: var(--gray-800);
                        border-left-color: var(--gold);
                        font-weight: 600;
                    }
                    
                    /* Content Styles */
                    .homepage-content {
                        min-height: 100vh;
                    }
                    
                    .striped-background {
                        position: relative;
                        min-height: 100vh;
                    }
                    
                    .stripes-container {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        display: flex;
                        opacity: 0.8;
                    }
                    
                    .stripe {
                        flex: 1;
                        animation: stripeAnimation 10s ease-in-out infinite;
                    }
                    
                    .stripe.red {
                        background: linear-gradient(45deg, var(--ruby-red), #a0002a);
                    }
                    
                    .stripe.white {
                        background: linear-gradient(45deg, var(--white), #f8fafc);
                    }
                    
                    @keyframes stripeAnimation {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-5px); }
                    }
                    
                    .content-wrapper {
                        position: relative;
                        z-index: 10;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        padding: 2rem;
                    }
                    
                    .content-box {
                        background: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(20px);
                        border-radius: 2rem;
                        padding: 3rem;
                        max-width: 75rem;
                        width: 100%;
                        box-shadow: var(--shadow-lg);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        animation: fadeInUp 0.8s ease-out;
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .main-header {
                        text-align: center;
                        margin-bottom: 3rem;
                        position: relative;
                    }
                    
                    .title-animation {
                        position: relative;
                        display: inline-block;
                    }
                    
                    .main-title {
                      font-size: 3.75rem;
                      font-style: italic;
                      font-weight: bold;
                      margin-bottom: 1rem;
                      letter-spacing: 0.05em;
                      color: var(--gold);
                      text-shadow:
                          -2px -2px 0 #000,
                          2px -2px 0 #000,
                          -2px 2px 0 #000,
                          2px 2px 0 #000,
                          -3px 0px 0 #000,
                          3px 0px 0 #000,
                          0px -3px 0 #000,
                          0px 3px 0 #000;
                  }
                    
                    @keyframes titleGlow {
                        from { filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)); }
                        to { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); }
                    }
                    
                    .sparkles {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        pointer-events: none;
                    }
                    
                    .sparkle {
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        background: var(--gold);
                        border-radius: 50%;
                        animation: sparkle 2s infinite;
                    }
                    
                    .sparkle:nth-child(1) {
                        top: 20%;
                        left: 10%;
                        animation-delay: 0s;
                    }
                    
                    .sparkle:nth-child(2) {
                        top: 60%;
                        right: 15%;
                        animation-delay: 0.7s;
                    }
                    
                    .sparkle:nth-child(3) {
                        bottom: 20%;
                        left: 80%;
                        animation-delay: 1.4s;
                    }
                    
                    @keyframes sparkle {
                        0%, 100% {
                            opacity: 0;
                            transform: scale(0);
                        }
                        50% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                    
                    .sub-title {
                        font-size: 1.5rem;
                        color: var(--black);
                        font-weight: 300;
                        font-style: italic;
                        margin-bottom: 2rem;
                        opacity: 0.8;
                    }
                    
                    /* Card Styles with modern effects */
                    .welcome-card,
                    .about-card,
                    .sustainability-card {
                        background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8));
                        border-radius: 1.5rem;
                        padding: 2.5rem;
                        margin: 2rem 0;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .welcome-card::before,
                    .about-card::before,
                    .sustainability-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
                        transition: left 0.6s;
                    }
                    
                    .welcome-card:hover::before,
                    .about-card:hover::before,
                    .sustainability-card:hover::before {
                        left: 100%;
                    }
                    
                    .welcome-card:hover,
                    .about-card:hover,
                    .sustainability-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                    }
                    
                    .text-paragraph {
                        color: var(--gray-800);
                        font-size: 1.125rem;
                        line-height: 1.8;
                        text-align: left;
                        margin: 0;
                    }
                    
                    /* Opening Hours Styles */
                    .opening-hours {
                        text-align: center;
                        margin: 3rem 0;
                    }
                    
                    .section-title {
                        font-size: 1.75rem;
                        font-weight: 700;
                        color: var(--gray-800);
                        margin-bottom: 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                    }
                    
                    .inline-icon {
                        color: var(--gold);
                        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
                    }
                    
                    .hours-box {
                        background: linear-gradient(135deg, var(--gray-50), var(--white));
                        border-radius: 1.5rem;
                        padding: 2rem;
                        display: inline-block;
                        box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
                        border: 1px solid var(--gray-200);
                        margin-bottom: 2rem;
                    }
                    
                    .hours-grid {
                        display: grid;
                        gap: 1rem;
                    }
                    
                    .hours-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        min-width: 250px;
                        padding: 0.75rem 1rem;
                        background: var(--white);
                        border-radius: 0.75rem;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    }
                    
                    .day {
                        font-weight: 600;
                        color: var(--primary-blue);
                    }
                    
                    .time {
                        font-weight: 500;
                        color: var(--gray-700);
                    }
                    
                    .address-card {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;
                        background: linear-gradient(135deg, var(--primary-blue), #007580);
                        color: var(--white);
                        padding: 1.5rem 2rem;
                        border-radius: 1.5rem;
                        box-shadow: var(--shadow);
                        margin-top: 2rem;
                        transition: transform 0.3s ease;
                    }
                    
                    .address-card:hover {
                        transform: scale(1.02);
                    }
                    
                    .address-icon {
                        color: var(--gold);
                        flex-shrink: 0;
                    }
                    
                    /* Image Section Styles */
                    .image-section {
                        margin: 4rem 0;
                    }
                    
                    .image-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        margin-top: 2rem;
                    }
                    
                    .image-item {
                        position: relative;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    
                    .image-wrapper {
                        position: relative;
                        overflow: hidden;
                        border-radius: 1.5rem;
                        box-shadow: var(--shadow);
                    }
                    
                    .image-wrapper::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(45deg, rgba(0, 95, 103, 0.1), rgba(255, 215, 0, 0.1));
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        z-index: 1;
                    }
                    
                    .image-wrapper:hover::before {
                        opacity: 1;
                    }
                    
                    .image {
                        width: 100%;
                        height: 250px;
                        object-fit: cover;
                        transition: transform 0.4s ease;
                    }
                    
                    .image-wrapper:hover .image {
                        transform: scale(1.05);
                    }
                    
                    .image-overlay {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) scale(0);
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 50%;
                        padding: 1rem;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        z-index: 2;
                    }
                    
                    .image-wrapper:hover .image-overlay {
                        transform: translate(-50%, -50%) scale(1);
                    }
                    
                    .heart-icon {
                        color: var(--ruby-red);
                        animation: heartbeat 2s ease-in-out infinite;
                    }
                    
                    @keyframes heartbeat {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                    }
                    
                    /* Legal Content Styles */
                    .legal-content {
                        text-align: left;
                        max-width: none;
                    }
                    
                    .legal-content h2 {
                        color: var(--primary-blue);
                        border-bottom: 2px solid var(--gold);
                        padding-bottom: 0.5rem;
                        margin-bottom: 2rem;
                    }
                    
                    .legal-content h3 {
                        color: var(--gray-800);
                        margin-top: 2rem;
                        margin-bottom: 1rem;
                    }
                    
                    .legal-content h4 {
                        color: var(--primary-blue);
                        margin-top: 1.5rem;
                        margin-bottom: 0.75rem;
                    }
                    
                    .legal-section {
                        background: var(--gray-50);
                        padding: 2rem;
                        border-radius: 1rem;
                        margin: 1rem 0;
                        border-left: 4px solid var(--gold);
                    }
                    
                    .contact-info {
                        background: linear-gradient(135deg, var(--primary-blue), #007580);
                        color: var(--white);
                        padding: 1.5rem;
                        border-radius: 1rem;
                        margin-top: 2rem;
                    }
                    
                    .contact-info a {
                        color: var(--gold);
                        text-decoration: none;
                        font-weight: 600;
                    }
                    
                    .impressum-grid {
                        display: grid;
                        gap: 1.5rem;
                        margin-top: 2rem;
                    }
                    
                    .info-item {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        padding: 1.5rem;
                        background: var(--gray-50);
                        border-radius: 1rem;
                        border-left: 4px solid var(--gold);
                        transition: all 0.3s ease;
                    }
                    
                    .info-item:hover {
                        transform: translateX(5px);
                        box-shadow: var(--shadow);
                    }
                    
                    .info-item strong {
                        color: var(--primary-blue);
                        font-weight: 600;
                    }
                    
                    /* Coming Soon Styles */
                    .coming-soon-card {
                        text-align: center;
                        padding: 4rem 2rem;
                        background: linear-gradient(135deg, var(--gray-50), var(--white));
                        border-radius: 2rem;
                        border: 2px dashed var(--gold);
                        margin: 2rem 0;
                    }
                    
                    .coming-soon-card h3 {
                        font-size: 2rem;
                        color: var(--primary-blue);
                        margin-bottom: 1rem;
                    }
                    
                    .coming-soon-card p {
                        font-size: 1.25rem;
                        color: var(--gray-600);
                        margin-bottom: 2rem;
                    }
                    
                    .loading-animation {
                        display: flex;
                        justify-content: center;
                        gap: 0.5rem;
                    }
                    
                    .dot {
                        width: 12px;
                        height: 12px;
                        background: var(--gold);
                        border-radius: 50%;
                        animation: loadingDots 1.5s ease-in-out infinite;
                    }
                    
                    .dot:nth-child(1) { animation-delay: 0s; }
                    .dot:nth-child(2) { animation-delay: 0.3s; }
                    .dot:nth-child(3) { animation-delay: 0.6s; }
                    
                    @keyframes loadingDots {
                        0%, 100% {
                            opacity: 0.3;
                            transform: scale(0.8);
                        }
                        50% {
                            opacity: 1;
                            transform: scale(1.2);
                        }
                    }
                    
                    /* Responsive Design */
                    @media (min-width: 768px) {
                        .mobile-menu-btn {
                            display: none;
                        }
                        
                        .image-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                        
                        .impressum-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                        
                        .info-item {
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                        }
                        
                        .main-content-area {
                            padding-top: 50px;
                        }
                    }
                    
                    @media (max-width: 767px) {
                        .desktop-nav {
                            display: none;
                        }
                        
                        .mobile-menu-btn {
                            display: block;
                        }
                        
                        .nav-container {
                            padding: 0 1rem;
                        }
                        
                        .content-box {
                            padding: 2rem 1.5rem;
                            margin: 1rem;
                            border-radius: 1.5rem;
                        }
                        
                        .main-title {
                            font-size: 2.5rem;
                        }
                        
                        .sub-title {
                            font-size: 1.25rem;
                        }
                        
                        .text-paragraph {
                            font-size: 1rem;
                            text-align: center;
                        }
                        
                        .welcome-card,
                        .about-card,
                        .sustainability-card {
                            padding: 1.5rem;
                            margin: 1rem 0;
                        }
                        
                        .section-title {
                            font-size: 1.5rem;
                            flex-direction: column;
                            gap: 0.25rem;
                        }
                        
                        .hours-item {
                            min-width: auto;
                            flex-direction: column;
                            text-align: center;
                            gap: 0.5rem;
                        }
                        
                        .address-card {
                            flex-direction: column;
                            text-align: center;
                        }
                        
                        .image {
                            height: 200px;
                        }
                        
                        .main-content-area {
                            padding-top: 70px;
                        }
                        
                        .nav-bar {
                            padding: 0.75rem 0;
                        }
                    }
                    
                    @media (max-width: 480px) {
                        .content-wrapper {
                            padding: 1rem;
                        }
                        
                        .content-box {
                            padding: 1.5rem 1rem;
                        }
                        
                        .main-title {
                            font-size: 2rem;
                        }
                        
                        .hours-box {
                            padding: 1.5rem;
                        }
                        
                        .welcome-card,
                        .about-card,
                        .sustainability-card {
                            padding: 1rem;
                        }
                    }
                    
                    /* Accessibility improvements */
                    @media (prefers-reduced-motion: reduce) {
                        * {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                            transition-duration: 0.01ms !important;
                        }
                    }
                    
                    /* Focus styles for better accessibility */
                    .nav-tab:focus,
                    .mobile-nav-tab:focus,
                    .mobile-menu-btn:focus {
                        outline: 2px solid var(--gold);
                        outline-offset: 2px;
                    }
                    
                    /* Print styles */
                    @media print {
                        .nav-bar,
                        .mobile-nav {
                            display: none;
                        }
                        
                        .main-content-area {
                            padding-top: 0;
                        }
                        
                        .striped-background {
                            background: white;
                        }
                        
                        .stripes-container {
                            display: none;
                        }
                    }
                `}
                </style>
                <NavBar />
                <div className="main-content-area">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/ueber-mich" element={<UeberMich />} />
                        <Route path="/atelier" element={<Atelier />} />
                        <Route path="/datenschutzerklaerung" element={<Datenschutzerklaerung />} />
                        <Route path="/impressum" element={<Impressum />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
