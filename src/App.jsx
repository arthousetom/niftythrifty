import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

// Importing page components (assuming they exist in the src/components folder)
const Homepage = () => {
    const [activeTab, setActiveTab] = useState('Startseite');
    // For local page logic or content
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
                            <h1 className="main-title">
                                nifty thrifty
                            </h1>
                            <h2 className="sub-title">
                                - 1st Class 2nd Hand -
                            </h2>
                        </div>
                         <div className="text-content">
                            <p className="text-paragraph">
                                <strong>Hallo, Ihr Lieben!</strong><br></br>
                                Herzlich willkommen in meinem einzigartigen Thrift Store. Auf über 350 Quadratmetern präsentiere ich Euch in einem Ambiente, das seinesgleichen sucht, ein riesiges Angebot an wundervoller Secondhand Mode – sowohl für die Dame als auch für den Hernn. Vintage- und Designermode, Schuhe, Taschen, Modeschmuck, Accessoires, Mobiliar, Geschenkartikel – alles will von Euch entdeckt werden. Lasst Euch inspirieren und verzaubern! Ich freue mich auf Euren Besuch!<br></br>
                                <i>Euer Thomas Meyer</i>
                            </p>
                        </div>
                         <div className="opening-hours">
                            <h3 className="section-title">🕗 Öffnungszeiten</h3>
                            <div className="hours-box">
                                <table className="hours-table">
                                    <tbody>
                                        <tr>
                                            <td className="hours-text">Mi. - Fr.</td>
                                            <td className="hours-text">10-18 Uhr</td>
                                        </tr>
                                        <tr>
                                            <td className="hours-text">Samstag</td>
                                            <td className="hours-text">10-14 Uhr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>Lange Str. 56</p>
                            <p>49610 Quakenbrück</p><br></br>
                        </div>
                        <div className="image-section">
                            <h3 className="section-title">⭐ Highlights</h3>
                            <div className="image-grid">
                                {['Highlight1.jpg', 'Highlight2.jpg', 'Highlight3.jpg'].map((imageName, index) => (
                                    <div key={index} className="image-item">
                                        <img
                                            src={`/images/highlights/${imageName}`}
                                            alt={imageName}
                                            className="image"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div className="text-content">
                            <p className="text-paragraph">
                                In unserer heutigen Konsum- und Wegwerfgesellschaft ist es wichtig Kontrapunkte zu setzen und Institutionen zu etablieren, in denen Nachhaltigkeit eine große Rolle spielt. Ich beziehe meine Ware ausschließlich von Privatleuten und gewährleiste somit, dass die oft sogar unbenutzte Mode weiterhin wertgeschätzt wird und damit auch im Kreislauf bleibt. Mit Mode kann jeder Mensch seine Persönlichkeit formen, unterstützen oder auf den Punkt bringen. Mein Thrift Store ist da die absolut richtige Adresse – mit einer nie versiegenden Quelle an zauberhaften Einzelstücken.
                            </p>
                        </div>
                         <div className="image-section">
                            <h3 className="section-title">📍 Mein Laden in Quakenbrück</h3>
                            <div className="image-grid">
                                {['Innen1.jpg', 'Innen2.jpg', 'Innen3.jpg'].map((imageName, index) => (
                                    <div key={index} className="image-item">
                                        <img
                                            src={`/images/store/${imageName}`}
                                            alt={imageName}
                                            className="image"
                                        />
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

// Placeholder components for the other pages
const UeberMich = () => {
  const [activeTab, setActiveTab] = useState('Startseite');
  // For local page logic or content
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
                          <h1 className="main-title">
                              nifty thrifty
                          </h1>
                          <h2 className="sub-title">
                              - 1st Class 2nd Hand -
                          </h2>
                      </div>
                       <div className="text-content">
                          <p className="text-paragraph">
                            <p>
                              <strong>Hallo!</strong> <br></br><br></br>
                              Ich bin der Thomas Meyer und betreibe mein Geschäft nun seit mehr als 2 Jahren - an dieser Stelle aktuell seit Anfang Februar 2025. <br></br><br></br>
                              Secondhandläden haben mich persönlich als Kunde schon immer interessiert. Die Vorstellung einmal selber Inhaber eines Thrift Stores zu sein hat mich nie so richtig losgelassen und fortan fasziniert. <br></br><br></br>
                              Nun ist einer meiner Träume Wirklichkeit geworden und mein Ziel ist es, einen außergewöhnlichen Ort zu erschaffen – einen Ort , an dem man sich fallen lassen kann. Ein Refugium in dem die Welt draußen bleiben kann. A place to be – mit Ambiente, Atmosphäre, Sinnlichkeit und Wertschätzung. <br></br><br></br>
                              Ausgesuchte Mode, Vintageartikel, tolle Dekorationen, klasse Events, eine gute positive Stimmung und individuelle fachliche Beratung mit ganz viel Persönlichkeit sind eine gelungene Mischung und seit Beginn Garant für meinen Erfolg. <br></br><br></br>
                              Ich mache mir täglich Gedanken, Dinge zu verbessern, zeitgeistig zu agieren, vorausschauend zu handeln und versuche, mein nifty thrifty zu einem Ort zu machen, an dem man sich trifft, sich inspiriert, und tolle Sachen entdeckt. <br></br><br></br>
                              Die vielen positiven Rückmeldungen meiner lieben Kundinnen und Kunden zeigen mir, dass ich da den richtigen Weg eingeschlagen habe. <br></br><br></br>
                              Einen Weg, den ich weitergehen werde!    
                            </p>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};
const Atelier = () => <div>In Arbeit!</div>;
const Datenschutzerklaerung = () => {
  const [activeTab, setActiveTab] = useState('Startseite');
  // For local page logic or content
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
                          <h1 className="main-title">
                              nifty thrifty
                          </h1>
                          <h2 className="sub-title">
                              - 1st Class 2nd Hand -
                          </h2>
                      </div>
                       <div className="text-content">
                          <p className="text-paragraph">
                              <strong>Datenschutzerklärung</strong><br></br>
                                <p>Transparenz und Sicherheit für Ihre Daten</p>

                                <h2>Verarbeitung Ihrer Daten gemäß Art. 13 DS-GVO</h2>

                                <h3>1. Verantwortlicher und Datenschutzbeauftragter</h3>
                                <p>
                                  Verantwortlich für diese Website ist:<br />
                                  <strong>nifty thrifty</strong> / Inh. Thomas Meyer<br />
                                  <a href="mailto:kunst.raum@gmx.de">kunst.raum@gmx.de</a>
                                </p>

                                <h3>2. Daten, die für die Bereitstellung der Website und die Erstellung der Protokolldateien verarbeitet werden</h3>

                                <h4>a. Welche Daten werden für welchen Zweck verarbeitet?</h4>
                                <p>
                                  Bei jedem Zugriff auf Inhalte der Website werden vorübergehend Daten gespeichert, 
                                  die möglicherweise eine Identifizierung zulassen. Dazu gehören:
                                </p>
                                <p>Datum und Uhrzeit des Zugriffs, IP-Adresse, Hostname des zugreifenden Rechners, Website, von der aus die Website aufgerufen wurde, Websites, die über die Website aufgerufen werden, Besuchte Seite auf unserer Website, Meldung, ob der Abruf erfolgreich war, Übertragene Datenmenge, Informationen über Browsertyp und Version, Betriebssystem.</p>
                                <p>Die Speicherung ist erforderlich, um den Website-Betrieb sicherzustellen. Eine weitere Speicherung erfolgt nur zur Sicherstellung der Funktionsfähigkeit und Sicherheit der Systeme.</p>

                                <h4>b. Rechtsgrundlage</h4>
                                <p>Art. 6 Abs. 1 lit. f DS-GVO</p>

                                <h4>c. Empfänger der Daten</h4>
                                <p>
                                  Die Website wird bei <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. 
                                  Vercel empfängt die oben genannten Daten als Auftragsverarbeiter.
                                </p>

                                <h4>d. Speicherdauer</h4>
                                <p>
                                  Die Daten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr erforderlich sind. 
                                  Protokolldateien werden bis zu <strong>24 Stunden</strong> direkt für Administratoren zugänglich gespeichert 
                                  und nach maximal <strong>vier Wochen</strong> endgültig gelöscht.
                                </p>

                                <h3>3. Betroffenenrechte</h3>
                                <p>Recht auf Auskunft (Art. 15 DS-GVO)</p>
                                <p>Recht auf Widerspruch (Art. 21 DS-GVO)</p>
                                <p>Recht auf Berichtigung (Art. 16 DS-GVO)</p>
                                <p>Recht auf Löschung (Art. 17 DS-GVO)</p>
                                <p>Recht auf Einschränkung (Art. 18 DS-GVO)</p>
                                <p>Recht auf Beschwerde (Art. 77 DS-GVO)</p>
                                <p>Recht auf Datenübertragbarkeit (Art. 20 DS-GVO)</p>

                                <h2>II. Recht auf Widerspruch gemäß Art. 21 Abs. 1 DS-GVO</h2>
                                <p>
                                  Sie können jederzeit aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
                                  gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen. 
                                  Die Datenverarbeitung zur Bereitstellung der Website ist jedoch zwingend erforderlich 
                                  und wird weiterhin durchgeführt, soweit zwingende berechtigte Gründe vorliegen.
                                </p>

                                <h2>Kontakt</h2>
                                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                                <p>
                                  <strong>nifty thrifty</strong> / Inh. Thomas Meyer<br />
                                  <a href="mailto:kunst.raum@gmx.de">kunst.raum@gmx.de</a>
                                </p>

                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};
const Impressum = () => {
  const [activeTab, setActiveTab] = useState('Startseite');
  // For local page logic or content
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
                          <h1 className="main-title">
                              nifty thrifty
                          </h1>
                          <h2 className="sub-title">
                              - 1st Class 2nd Hand -
                          </h2>
                      </div>
                       <div className="text-content">
                          <p className="text-paragraph">
                              <strong>Impressum</strong><br></br><br></br><br></br>
                              <table>
                                <tr>
                                  <th>Firma</th>
                                  <td>nifty thrifty / Inh. Thomas Meyer</td>
                                </tr>
                                <tr>
                                  <th>Adresse</th>
                                  <td>Lange Str. 56, 49610 Quakenbrück, Deutschland</td>
                                </tr>
                                <tr>
                                  <th>Telefon</th>
                                  <td>015208994108</td>
                                </tr>
                                <tr>
                                  <th>E-Mail</th>
                                  <td>kunst.raum@gmx.de</td>
                                </tr>
                                <tr>
                                  <th>Vertretungsberechtigte Person</th>
                                  <td>Thomas Meyer</td>
                                </tr>
                                <tr>
                                  <th>Umsatzsteuer-ID</th>
                                  <td>DE81 270 1485</td>
                                </tr>
                                <tr>
                                  <th>Steuernummer</th>
                                  <td>67/107/01623</td>
                                </tr>
                                <tr>
                                  <th>Verantwortlich nach § 55 Abs. 2 RStV</th>
                                  <td>Thomas Meyer, Lange Str. 56, 49610 Quakenbrück</td>
                                </tr>
                              </table>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};
// Component to handle the navigation bar
const NavBar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        // Set the active tab based on the current URL pathname
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
            <div className="nav-tabs">
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
        </nav>
    );
};

// Main App component with global navigation
function App() {
    return (
        <Router>
            <div className="App">
                <style>
                {`
                    .App {
                        text-align: center;
                        font-family: 'Inter', sans-serif;
                        color: #1f2937;
                    }
                    
                    /* Custom variables for your color scheme */
                    :root {
                        --primary-blue: #005f67;
                        --ruby-red: #800020;
                        --white: #ffffff;
                        --gold: #FFD700;
                        --gray-50: #f9fafb;
                        --gray-200: #e5e7eb;
                        --gray-300: #d1d5db;
                        --gray-400: #9ca3af;
                        --gray-600: #4b5563;
                        --gray-800: #1f2937;
                        --black: #000000;
                    }
                    
                    /* Global Styles */
                    body {
                        margin: 0;
                        padding: 0;
                        overflow-x: hidden;
                        background-color: var(--gray-50);
                    }
                    
                    /* Smooth scrolling for the entire app */
                    * {
                        scroll-behavior: smooth;
                        box-sizing: border-box;
                    }
                    
                    /* Main content area to avoid overlap with fixed nav bar */
                    .main-content-area {
                        padding-top: 50px; /* Adjust this value to match the height of your navigation bar */
                    }
                    
                    /* Navigation Styles */
                    .nav-bar {
                        background-color: var(--primary-blue);
                        padding: 1rem 2rem;
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        border-radius: 0 0 1.5rem 1.5rem;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        z-index: 1000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .nav-tabs {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 1rem;
                    }
                    
                    .nav-tab {
                        padding: 0.75rem 1.5rem;
                        border-radius: 9999px;
                        transition: all 0.3s ease;
                        font-weight: 500;
                        border: none;
                        cursor: pointer;
                        color: var(--white);
                        background: none;
                        text-decoration: none;
                        font-family: inherit;
                    }
                    
                    .nav-tab.active {
                        background-color: var(--white);
                        color: var(--gray-800);
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        transform: scale(1.05);
                    }
                    
                    .nav-tab:not(.active):hover {
                        background-color: rgba(255, 255, 255, 0.2);
                        transform: scale(1.05);
                    }
                    
                    /* Homepage specific styles (moved from Homepage.css) */
                    .homepage-content {
                        /* No padding-top needed here anymore, as it's handled by .main-content-area */
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
                    }
                    
                    .stripe {
                        flex: 1;
                    }
                    
                    .stripe.red {
                        background-color: var(--ruby-red);
                    }
                    
                    .stripe.white {
                        background-color: var(--white);
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
                        background: rgba(255, 255, 255, 0.9);
                        backdrop-filter: blur(10px);
                        border-radius: 1.5rem;
                        padding: 3rem;
                        max-width: 72rem;
                        width: 100%;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    }
                    
                    .main-header {
                        text-align: center;
                        margin-bottom: 3rem;
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
                    
                    .sub-title {
                        font-size: 1.5rem;
                        color: var(--black);
                        font-weight: 300;
                        font-style: italic;
                        margin-bottom: 2rem;
                    }
                    
                    .text-content {
                        margin-bottom: 3rem;
                    }
                    
                    .text-paragraph {
                        color: var(--black);
                        font-size: 1.125rem;
                        line-height: 1.75;
                        text-align: center;
                        max-width: 64rem;
                        margin: 0 auto;
                    }
                    
                    .opening-hours {
                        text-align: center;
                        margin-bottom: 3rem;
                    }
                    
                    .section-title {
                        font-size: 1.5rem;
                        font-weight: 600;
                        color: var(--black);
                        margin-bottom: 1.5rem;
                    }
                    
                    .hours-box {
                        background-color: var(--gray-50);
                        border-radius: 0.75rem;
                        padding: 1.5rem;
                        display: inline-block;
                        box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
                    }
                    
                    .hours-table {
                        border-collapse: collapse;
                    }
                    
                    .hours-text {
                        color: var(--black);
                        font-size: 1.125rem;
                        font-weight: 500;
                        margin-bottom: 0.5rem;
                        padding-right: 0.3rem;
                        padding-left: 0.3rem;
                        text-align: left;
                    }
                    
                    .hours-text:last-child {
                        margin-bottom: 0;
                    }
                    
                    .image-section {
                        margin-bottom: 3rem;
                    }
                    
                    .image-section:last-child {
                        margin-bottom: 0;
                    }
                    
                    .image-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    
                    .image-item {
                        position: relative;
                        transition: transform 0.3s ease;
                    }
                    
                    .image-item:hover {
                        transform: scale(1.02);
                    }
                    
                    .image-item img {
                        width: 100%;
                        border-radius: 1rem;
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    }
                    
                    /* Responsive Design */
                    @media (min-width: 768px) {
                        .image-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .nav-tabs {
                            flex-direction: column;
                            gap: 0.5rem;
                            align-items: center;
                        }
                    
                        .content-box {
                            padding: 2rem;
                            margin: 1rem;
                        }
                    
                        .main-title {
                            font-size: 2.5rem;
                        }
                    
                        .text-paragraph {
                            font-size: 1rem;
                        }
                    
                        .nav-bar {
                            padding: 1rem;
                        }
                    }
                    
                    @media (max-width: 480px) {
                        .main-title {
                            font-size: 2rem;
                        }
                    
                        .content-box {
                            padding: 1.5rem;
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
