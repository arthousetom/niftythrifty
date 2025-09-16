import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Clock, MapPin, Star, Heart } from "lucide-react";

// Importing page components
const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Startseite");

  const checkOpeningHours = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes; // Convert to minutes for easier comparison

    // Opening hours: Mi-Fr 10-18, Sa 10-14
    // Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6
    if (day >= 3 && day <= 5) {
      // Wednesday to Friday
      return currentTime >= 600 && currentTime < 1080; // 10:00 to 18:00
    } else if (day === 6) {
      // Saturday
      return currentTime >= 600 && currentTime < 840; // 10:00 to 14:00
    }
    return false; // Closed on Sunday, Monday, Tuesday
  };

  const getNextOpeningTime = () => {
    const now = new Date();
    const day = now.getDay();

    if (day === 0 || day === 1 || day === 2) {
      // Sunday, Monday, Tuesday
      return "Mittwoch 10:00";
    } else if (day === 3 || day === 4 || day === 5) {
      // Wednesday, Thursday, Friday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      if (currentTime < 600) {
        // Before 10:00
        return "heute 10:00";
      } else if (currentTime >= 1080) {
        // After 18:00
        if (day === 5) {
          // Friday
          return "Samstag 10:00";
        } else {
          return "morgen 10:00";
        }
      }
    } else if (day === 6) {
      // Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      if (currentTime < 600) {
        // Before 10:00
        return "heute 10:00";
      } else if (currentTime >= 840) {
        // After 14:00
        return "Mittwoch 10:00";
      }
    }

    return "";
  };

  return (
    <div className="homepage-content">
      <div className="striped-background">
        <div className="stripes-container">
          {Array.from({ length: 21 }, (_, i) => (
            <div
              key={i}
              className={`stripe ${i % 2 === 0 ? "red" : "white"}`}
            />
          ))}
        </div>
        <div className="content-wrapper">
          <div className="content-box">
            <div className="main-header">
              <div className="title-animation">
                <h1 className="main-title">nifty thrifty</h1>
                <div className="sparkles">
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                </div>
              </div>
              <h2 className="sub-title">- 1st Class 2nd Hand -</h2>
            </div>

            <div className="text-content">
              <div className="welcome-card">
                <p className="text-paragraph">
                  <strong>Hallo, Ihr Lieben!</strong>
                  <br />
                  <br />
                  Herzlich willkommen in meinem einzigartigen Thrift Store. Auf
                  über 350 Quadratmetern präsentiere ich Euch in einem Ambiente,
                  das seinesgleichen sucht, ein riesiges Angebot an wundervoller
                  Secondhand Mode – sowohl für die Dame als auch für den Hernn.
                  Vintage- und Designermode, Schuhe, Taschen, Modeschmuck,
                  Accessoires, Mobiliar, Geschenkartikel – alles will von Euch
                  entdeckt werden. Lasst Euch inspirieren und verzaubern! Ich
                  freue mich auf Euren Besuch!
                  <br />
                  <br />
                  <i>Euer Thomas Meyer</i>
                </p>
              </div>
            </div>

            <div className="opening-hours">
              <h3 className="section-title">
                <Clock className="inline-icon" />
                Öffnungszeiten
              </h3>

              <div className="hours-status-container">
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

                <div className="store-status">
                  {checkOpeningHours() ? (
                    <div className="status-indicator open">
                      <div className="status-dot"></div>
                      <span className="status-text">Geöffnet</span>
                    </div>
                  ) : (
                    <div className="status-indicator closed">
                      <div className="status-dot"></div>
                      <div className="status-content">
                        <span className="status-text">Geschlossen</span>
                        <span className="next-opening">
                          Öffnet {getNextOpeningTime()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="address-card">
                <MapPin className="address-icon" />
                <div className="address-info">
                  <p className="address-line">Lange Str. 56</p>
                  <p className="address-line">49610 Quakenbrück</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=NIFTY+THRIFTY+1ST+CLASS+2ND+HAND,+Lange+Straße,+Quakenbrück"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-button"
                  aria-label="In Google Maps öffnen"
                >
                  <MapPin size={18} />
                  <span>Route</span>
                </a>
              </div>
            </div>

            <div className="image-section">
              <h3 className="section-title">
                <Star className="inline-icon" />
                Highlights
              </h3>
              <div className="image-grid">
                {["Highlight1.jpg", "Highlight2.jpg", "Highlight3.jpg"].map(
                  (imageName, index) => (
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
                  )
                )}
              </div>
            </div>

            <div className="text-content">
              <div className="sustainability-card">
                <p className="text-paragraph">
                  In unserer heutigen Konsum- und Wegwerfgesellschaft ist es
                  wichtig Kontrapunkte zu setzen und Institutionen zu
                  etablieren, in denen Nachhaltigkeit eine große Rolle spielt.
                  Ich beziehe meine Ware ausschließlich von Privatleuten und
                  gewährleiste somit, dass die oft sogar unbenutzte Mode
                  weiterhin wertgeschätzt wird und damit auch im Kreislauf
                  bleibt. Mit Mode kann jeder Mensch seine Persönlichkeit
                  formen, unterstützen oder auf den Punkt bringen. Mein Thrift
                  Store ist da die absolut richtige Adresse – mit einer nie
                  versiegenden Quelle an zauberhaften Einzelstücken.
                </p>
              </div>
            </div>

            <div className="image-section">
              <h3 className="section-title">
                <MapPin className="inline-icon" />
                Mein Laden in Quakenbrück
              </h3>
              <div className="image-grid">
                {["Innen1.jpg", "Innen2.jpg", "Innen3.jpg"].map(
                  (imageName, index) => (
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
                  )
                )}
              </div>
            </div>

            <div className="instagram-section">
              <h3 className="section-title">
                <Heart className="inline-icon" />
                Folge mir auf Instagram
              </h3>
              <div className="instagram-panel">
                <div className="instagram-header">
                  <div className="instagram-profile">
                    <div className="instagram-avatar">
                      <div className="avatar-placeholder">
                        <span>NT</span>
                      </div>
                    </div>
                    <div className="instagram-info">
                      <h4>@niftythrifty39</h4>
                      <p>1st Class 2nd Hand Fashion</p>
                    </div>
                  </div>
                  <a
                    href="https://www.instagram.com/niftythrifty39/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-follow-btn"
                  >
                    Folgen
                  </a>
                </div>
                <div className="instagram-content">
                  <p className="instagram-description">
                    Entdecke regelmäßig neue Vintage-Schätze und
                    Fashion-Highlights aus meinem Store in Quakenbrück
                  </p>
                  <div className="instagram-stats">
                    <div className="stat-item">
                      <span className="stat-number">350m²</span>
                      <span className="stat-label">Showroom</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">Vintage</span>
                      <span className="stat-label">Fashion</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">Unique</span>
                      <span className="stat-label">Pieces</span>
                    </div>
                  </div>
                </div>
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
              className={`stripe ${i % 2 === 0 ? "red" : "white"}`}
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
                <div className="about-content">
                  <p className="text-paragraph">
                    <strong>Hallo!</strong>
                    <br />
                    <br />
                    Ich bin der Thomas Meyer und betreibe mein Geschäft nun seit
                    mehr als 2 Jahren - an dieser Stelle aktuell seit Anfang
                    Februar 2025.
                    <br />
                    <br />
                    Secondhandläden haben mich persönlich als Kunde schon immer
                    interessiert. Die Vorstellung einmal selber Inhaber eines
                    Thrift Stores zu sein hat mich nie so richtig losgelassen
                    und fortan fasziniert.
                    <br />
                    <br />
                    Nun ist einer meiner Träume Wirklichkeit geworden und mein
                    Ziel ist es, einen außergewöhnlichen Ort zu erschaffen –
                    einen Ort, an dem man sich fallen lassen kann. Ein Refugium
                    in dem die Welt draußen bleiben kann. A place to be – mit
                    Ambiente, Atmosphäre, Sinnlichkeit und Wertschätzung.
                    <br />
                    <br />
                    Ausgesuchte Mode, Vintageartikel, tolle Dekorationen, klasse
                    Events, eine gute positive Stimmung und individuelle
                    fachliche Beratung mit ganz viel Persönlichkeit sind eine
                    gelungene Mischung und seit Beginn Garant für meinen Erfolg.
                    <br />
                    <br />
                    Ich mache mir täglich Gedanken, Dinge zu verbessern,
                    zeitgeistig zu agieren, vorausschauend zu handeln und
                    versuche, mein nifty thrifty zu einem Ort zu machen, an dem
                    man sich trifft, sich inspiriert, und tolle Sachen entdeckt.
                    <br />
                    <br />
                    Die vielen positiven Rückmeldungen meiner lieben Kundinnen
                    und Kunden zeigen mir, dass ich da den richtigen Weg
                    eingeschlagen habe.
                    <br />
                    <br />
                    Einen Weg, den ich weitergehen werde!
                  </p>
                  <div className="avatar-container">
                    <img
                      src="/images/avatar.png"
                      alt="Thomas Meyer"
                      className="avatar-image-bottom"
                    />
                  </div>
                </div>
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
          <div key={i} className={`stripe ${i % 2 === 0 ? "red" : "white"}`} />
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
            <div
              key={i}
              className={`stripe ${i % 2 === 0 ? "red" : "white"}`}
            />
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
              <p>
                <em>Transparenz und Sicherheit für Ihre Daten</em>
              </p>

              <div className="legal-section">
                <h3>
                  I. Informationen über die Verarbeitung Ihrer Daten gemäß Art.
                  13 DS-GVO
                </h3>

                <h4>1. Verantwortlicher und Datenschutzbeauftragter</h4>
                <p>
                  Verantwortlich für diese Website ist:
                  <br />
                  <strong>nifty thrifty</strong> / Inh. Thomas Meyer
                  <br />
                  <a href="mailto:kunst.raum@gmx.de">kunst.raum@gmx.de</a>
                </p>

                <h4>
                  2. Daten, die für die Bereitstellung der Website und die
                  Erstellung der Protokolldateien verarbeitet werden
                </h4>

                <h5>a. Welche Daten werden für welchen Zweck verarbeitet?</h5>
                <p>
                  Bei jedem Zugriff auf Inhalte der Website werden vorübergehend
                  Daten gespeichert, die möglicherweise eine Identifizierung
                  zulassen. Dazu gehören:
                </p>
                <ul>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>IP-Adresse</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Website, von der aus die Website aufgerufen wurde</li>
                  <li>Websites, die über die Website aufgerufen werden</li>
                  <li>Besuchte Seite auf unserer Website</li>
                  <li>Meldung, ob der Abruf erfolgreich war</li>
                  <li>Übertragene Datenmenge</li>
                  <li>Informationen über Browsertyp und Version</li>
                  <li>Betriebssystem</li>
                </ul>
                <p>
                  Die Speicherung ist erforderlich, um den Website-Betrieb
                  sicherzustellen. Eine weitere Speicherung erfolgt nur zur
                  Sicherstellung der Funktionsfähigkeit und Sicherheit der
                  Systeme.
                </p>

                <h5>b. Rechtsgrundlage</h5>
                <p>Art. 6 Abs. 1 lit. f DS-GVO</p>

                <h5>c. Empfänger der Daten</h5>
                <p>
                  Die Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
                  Walnut, CA 91789, USA gehostet. Vercel empfängt die oben
                  genannten Daten als Auftragsverarbeiter.
                </p>

                <h5>d. Speicherdauer</h5>
                <p>
                  Die Daten werden gelöscht, sobald sie für den jeweiligen Zweck
                  nicht mehr erforderlich sind. Protokolldateien werden bis zu
                  24 Stunden direkt für Administratoren zugänglich gespeichert
                  und nach maximal vier Wochen endgültig gelöscht.
                </p>

                <h4>3. Betroffenenrechte</h4>
                <ul>
                  <li>Recht auf Auskunft (Art. 15 DS-GVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DS-GVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DS-GVO)</li>
                  <li>Recht auf Löschung (Art. 17 DS-GVO)</li>
                  <li>
                    Recht auf Einschränkung der Verarbeitung (Art. 18 DS-GVO)
                  </li>
                  <li>
                    Recht auf Beschwerde bei Aufsichtsbehörde (Art. 77 DS-GVO)
                  </li>
                  <li>
                    Recht auf Datenübertragbarkeit (Art. 20 DS-GVO) – soweit
                    anwendbar
                  </li>
                </ul>

                <h3>II. Recht auf Widerspruch gemäß Art. 21 Abs. 1 DS-GVO</h3>
                <p>
                  Sie können jederzeit aus Gründen, die sich aus Ihrer
                  besonderen Situation ergeben, gegen die Verarbeitung Ihrer
                  personenbezogenen Daten Widerspruch einlegen. Die
                  Datenverarbeitung zur Bereitstellung der Website ist jedoch
                  zwingend erforderlich und wird weiterhin durchgeführt, soweit
                  zwingende berechtigte Gründe vorliegen.
                </p>

                <div className="contact-info">
                  <h4>Kontakt</h4>
                  <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                  <p>
                    <strong>nifty thrifty</strong> / Inh. Thomas Meyer
                    <br />
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
            <div
              key={i}
              className={`stripe ${i % 2 === 0 ? "red" : "white"}`}
            />
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
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveTab("Startseite");
    } else if (path === "/ueber-mich") {
      setActiveTab("Über mich");
    } else if (path === "/atelier") {
      setActiveTab("Atelier");
    } else if (path === "/datenschutzerklaerung") {
      setActiveTab("Datenschutzerklärung");
    } else if (path === "/impressum") {
      setActiveTab("Impressum");
    }

    // Close menu when location changes
    setIsMenuOpen(false);
  }, [location]);

  const tabs = [
    { name: "Startseite", path: "/" },
    { name: "Über mich", path: "/ueber-mich" },
    { name: "Atelier", path: "/atelier" },
    { name: "Datenschutzerklärung", path: "/datenschutzerklaerung" },
    { name: "Impressum", path: "/impressum" },
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
              className={`nav-tab ${activeTab === tab.name ? "active" : ""}`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={`mobile-nav-tab ${
              activeTab === tab.name ? "active" : ""
            }`}
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
        <NavBar />
        <div className="main-content-area">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            <Route path="/atelier" element={<Atelier />} />
            <Route
              path="/datenschutzerklaerung"
              element={<Datenschutzerklaerung />}
            />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
