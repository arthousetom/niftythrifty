import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
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

// Importin
// g page components
const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Startseite");

  // 👇 Zustände für die Lightbox - MUSS auf oberster Ebene sein
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [displayText, setDisplayText] = useState(""); // 👈 Neuer State
  const fullText = "- 1st Class 2nd Hand -"; // Der vollständige Text

  useEffect(() => {
    // 👈 Neuer Effect für die Animation
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Geschwindigkeit: Alle 100ms ein neues Zeichen. Anpassbar.

    // Cleanup-Funktion, um das Intervall zu löschen, wenn die Komponente unmountet.
    return () => clearInterval(interval);
  }, []);

  const [isWelcomeExpanded, setIsWelcomeExpanded] = useState(false);

  // 👇 Handler-Funktionen - ebenfalls auf oberster Ebene
  const openLightbox = (imageName, folder) => {
    console.log("openLightbox aufgerufen mit:", imageName, folder); // <-- Dies hinzufügen
    setLightboxImage({
      src: `/images/${folder}/${imageName}`,
      alt: imageName,
    });
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
    document.body.style.overflow = ""; // Scrollen wieder erlauben
  };

  // 👇 Effekt für die Esc-Taste - DIESER useEffect ist korrekt
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]); // Abhängigkeit ist hier korrekt

  const checkOpeningHours = () => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  // Geändert: day >= 2 statt day >= 3 (schließt Di., Mi., Do., Fr. ein)
  if (day >= 2 && day <= 5) {
    return currentTime >= 600 && currentTime < 1080; // 10:00 bis 18:00
  } else if (day === 6) {
    return currentTime >= 600 && currentTime < 840; // 10:00 bis 14:00
  }
  return false;
};

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

const getNextOpeningTime = () => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  if (day === 0 || day === 1) { 
    // Sonntag oder Montag -> Nächste Öffnung ist Dienstag
    return "Dienstag 10:00";
  } else if (day >= 2 && day <= 5) {
    // Dienstag bis Freitag
    if (currentTime < 600) {
      return "heute 10:00";
    } else if (currentTime >= 1080) {
      if (day === 5) return "Samstag 10:00";
      return "morgen 10:00";
    }
  } else if (day === 6) {
    // Samstag
    if (currentTime < 600) {
      return "heute 10:00";
    } else if (currentTime >= 840) {
      return "Dienstag 10:00"; // Geändert von Mittwoch auf Dienstag
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
              <h2 className="sub-title">{displayText}</h2>{" "}
            </div>

            <div className="text-content">
              <div className="welcome-card">
                {/* Der Text */}
                <p
  id="welcome-text"
  className={`text-paragraph welcome-text-toggle ${isWelcomeExpanded ? 'expanded' : ''}`}
>
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
                {/* Der Button wird NUR auf mobilen Geräten UNTER dem Text angezeigt */}
                <button
                  className="toggle-welcome-btn mobile-only"
                  onClick={() => setIsWelcomeExpanded(!isWelcomeExpanded)}
                  aria-expanded={isWelcomeExpanded}
                  aria-controls="welcome-text"
                >
                  {/* Zwei nach unten zeigende Pfeile, wenn eingeklappt */}
                  {/* Zwei nach oben zeigende Pfeile, wenn ausgeklappt */}
                  {isWelcomeExpanded ? (
                    <>
                      <span>▲</span>
                    </>
                  ) : (
                    <>
                      <span>▼</span>
                    </>
                  )}
                </button>
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
    {/* Geändert von Mi. auf Di. */}
    <span className="day">Di. - Fr.</span> 
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
                          loading="lazy"
                          // 👇 WICHTIG: Ist dieser onClick-Handler EXAKT so vorhanden?
                          onClick={() => openLightbox(imageName, "highlights")}
                          style={{ cursor: "pointer" }}
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
                          onClick={() => openLightbox(imageName, "store")}
                          style={{ cursor: "pointer" }}
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

            <motion.div
              className="instagram-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h3
                className="section-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="inline-icon" />
                Folge mir auf Instagram
              </motion.h3>

              <motion.div
                className="instagram-panel"
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 1000,
                }}
              >
                <div className="instagram-header">
                  <div className="instagram-profile">
                    <div className="instagram-avatar">
                      <motion.div
                        className="avatar-placeholder"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <span>NT</span>
                      </motion.div>
                    </div>
                    <div className="instagram-info">
                      <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        @niftythrifty39
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        1st Class 2nd Hand Fashion
                      </motion.p>
                    </div>
                  </div>
                  <motion.a
                    href="https://www.instagram.com/niftythrifty39/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-follow-btn"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(131, 58, 180, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Folgen
                  </motion.a>
                </div>

                <div className="instagram-content">
                  <motion.p
                    className="instagram-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Entdecke regelmäßig neue Vintage-Schätze und
                    Fashion-Highlights aus meinem Store in Quakenbrück
                  </motion.p>
                  <motion.div
                    className="instagram-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, staggerChildren: 0.1 }}
                  >
                    {[
                      { number: "350m²", label: "Showroom" },
                      { number: "Vintage", label: "Fashion" },
                      { number: "Unique", label: "Pieces" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="stat-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <span className="stat-number">{stat.number}</span>
                        <span className="stat-label">{stat.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Verhindert, dass Klicks auf das Bild das Overlay schließen
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                position: "relative",
              }}
            >
              {lightboxImage && (
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              )}
              <button
                onClick={closeLightbox}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Schließen"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
            <div className="legal-content privacy-statement">
              {/* SECTION HEADER */}
              <section className="legal-section">
                <h2 className="section-heading">Datenschutzerklärung</h2>
                <p className="legal-paragraph">
                  Personenbezogene Daten (nachfolgend zumeist nur „Daten“
                  genannt) werden von uns nur im Rahmen der Erforderlichkeit
                  sowie zum Zwecke der Bereitstellung eines funktionsfähigen und
                  nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte
                  und der dort angebotenen Leistungen, verarbeitet.
                </p>
                <p className="legal-paragraph">
                  Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
                  Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt),
                  gilt als „Verarbeitung“ jeder mit oder ohne Hilfe
                  automatisierter Verfahren ausgeführter Vorgang oder jede
                  solche Vorgangsreihe im Zusammenhang mit personenbezogenen
                  Daten, wie das Erheben, das Erfassen, die Organisation, das
                  Ordnen, die Speicherung, die Anpassung oder Veränderung, das
                  Auslesen, das Abfragen, die Verwendung, die Offenlegung durch
                  Übermittlung, Verbreitung oder eine andere Form der
                  Bereitstellung, den Abgleich oder die Verknüpfung, die
                  Einschränkung, das Löschen oder die Vernichtung.
                </p>
                <p className="legal-paragraph">
                  Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
                  insbesondere über Art, Umfang, Zweck, Dauer und
                  Rechtsgrundlage der Verarbeitung personenbezogener Daten,
                  soweit wir entweder allein oder gemeinsam mit anderen über die
                  Zwecke und Mittel der Verarbeitung entscheiden. Zudem
                  informieren wir Sie nachfolgend über die von uns zu
                  Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
                  eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten
                  in wiederum eigener Verantwortung verarbeiten.
                </p>
                <p className="legal-paragraph">
                  Unsere Datenschutzerklärung ist wie folgt gegliedert:
                </p>
                <p className="legal-paragraph">
                  I. Informationen über uns als Verantwortliche<br></br>II.
                  Rechte der Nutzer und Betroffenen<br></br>III. Informationen
                  zur Datenverarbeitung
                </p>

                <h3 className="subsection-heading">
                  I. Informationen über uns als Verantwortliche
                </h3>
                <p className="legal-paragraph">
                  Verantwortlicher Anbieter dieses Internetauftritts im
                  datenschutzrechtlichen Sinne ist:
                </p>
                <address className="legal-address">
                  Nifty Thrifty<br></br>Thomas Meyer<br></br>Lange Str. 56
                  <br></br>49610 Quakenbrück
                </address>
                <p className="legal-paragraph">
                  Telefon: 015208994108<br></br>
                  E-Mail: kunst.raum@gmx.de
                </p>

                <h3 className="subsection-heading">
                  II. Rechte der Nutzer und Betroffenen
                </h3>
                <p className="legal-paragraph">
                  Mit Blick auf die nachfolgend noch näher beschriebene
                  Datenverarbeitung haben die Nutzer und Betroffenen das Recht
                </p>
                <ul className="legal-list">
                  <li>
                    auf Bestätigung, ob sie betreffende Daten verarbeitet
                    werden, auf Auskunft über die verarbeiteten Daten, auf
                    weitere Informationen über die Datenverarbeitung sowie auf
                    Kopien der Daten (vgl. auch Art. 15 DSGVO);
                  </li>
                  <li>
                    auf Berichtigung oder Vervollständigung unrichtiger bzw.
                    unvollständiger Daten (vgl. auch Art. 16 DSGVO);
                  </li>
                  <li>
                    auf unverzügliche Löschung der sie betreffenden Daten (vgl.
                    auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere
                    Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist,
                    auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18
                    DSGVO;
                  </li>
                  <li>
                    auf Erhalt der sie betreffenden und von ihnen
                    bereitgestellten Daten und auf Übermittlung dieser Daten an
                    andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
                  </li>
                  <li>
                    auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie
                    der Ansicht sind, dass die sie betreffenden Daten durch den
                    Anbieter unter Verstoß gegen datenschutzrechtliche
                    Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).
                  </li>
                </ul>
                <p className="legal-paragraph">
                  Darüber hinaus ist der Anbieter dazu verpflichtet, alle
                  Empfänger, denen gegenüber Daten durch den Anbieter
                  offengelegt worden sind, über jedwede Berichtigung oder
                  Löschung von Daten oder die Einschränkung der Verarbeitung,
                  die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu
                  unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit
                  diese Mitteilung unmöglich oder mit einem unverhältnismäßigen
                  Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein
                  Recht auf Auskunft über diese Empfänger.
                </p>
                <p className="legal-paragraph highlight-box">
                  <strong>
                    Ebenfalls haben die Nutzer und Betroffenen nach Art. 21
                    DSGVO das Recht auf Widerspruch gegen die künftige
                    Verarbeitung der sie betreffenden Daten, sofern die Daten
                    durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f)
                    DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch
                    gegen die Datenverarbeitung zum Zwecke der Direktwerbung
                    statthaft.
                  </strong>
                </p>

                <h3 className="subsection-heading">
                  III. Informationen zur Datenverarbeitung
                </h3>
                <p className="legal-paragraph">
                  Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten
                  werden gelöscht oder gesperrt, sobald der Zweck der
                  Speicherung entfällt, der Löschung der Daten keine
                  gesetzlichen Aufbewahrungspflichten entgegenstehen und
                  nachfolgend keine anderslautenden Angaben zu einzelnen
                  Verarbeitungsverfahren gemacht werden.
                </p>

                {/* SUBSECTION: Cookies */}
                <h4 className="subsubsection-heading">Cookies</h4>

                <h5 className="clause-heading">
                  a) Sitzungs-Cookies/Session-Cookies
                </h5>
                <p className="legal-paragraph">
                  Wir verwenden mit unserem Internetauftritt sog. Cookies.
                  Cookies sind kleine Textdateien oder andere
                  Speichertechnologien, die durch den von Ihnen eingesetzten
                  Internet-Browser auf Ihrem Endgerät ablegt und gespeichert
                  werden. Durch diese Cookies werden im individuellen Umfang
                  bestimmte Informationen von Ihnen, wie beispielsweise Ihre
                  Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet.
                </p>
                <p className="legal-paragraph">
                  Durch diese Verarbeitung wird unser Internetauftritt
                  benutzerfreundlicher, effektiver und sicherer, da die
                  Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in
                  unterschiedlichen Sprachen oder das Angebot einer
                  Warenkorbfunktion ermöglicht.
                </p>
                <p className="legal-paragraph">
                  Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.
                  DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder
                  Vertragsabwicklung verarbeitet werden.
                </p>
                <p className="legal-paragraph">
                  Falls die Verarbeitung nicht der Vertragsanbahnung oder
                  Vertragsabwicklung dient, liegt unser berechtigtes Interesse
                  in der Verbesserung der Funktionalität unseres
                  Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1
                  lit. f DSGVO.
                </p>
                <p className="legal-paragraph">
                  Mit Schließen Ihres Internet-Browsers werden diese
                  Session-Cookies gelöscht.
                </p>

                <h5 className="clause-heading">b Drittanbieter-Cookies</h5>
                <p className="legal-paragraph">
                  Gegebenenfalls werden mit unserem Internetauftritt auch
                  Cookies von Partnerunternehmen, mit denen wir zum Zwecke der
                  Werbung, der Analyse oder der Funktionalitäten unseres
                  Internetauftritts zusammenarbeiten, verwendet.
                </p>
                <p className="legal-paragraph">
                  Die Einzelheiten hierzu, insbesondere zu den Zwecken und den
                  Rechtsgrundlagen der Verarbeitung solcher
                  Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden
                  Informationen.
                </p>

                <h5 className="clause-heading">c Beseitigungsmöglichkeit</h5>
                <p className="legal-paragraph">
                  Sie können die Installation der Cookies durch eine Einstellung
                  Ihres Internet-Browsers verhindern oder einschränken.
                  Ebenfalls können Sie bereits gespeicherte Cookies jederzeit
                  löschen. Die hierfür erforderlichen Schritte und Maßnahmen
                  hängen jedoch von Ihrem konkret genutzten Internet-Browser ab.
                  Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder
                  Dokumentation Ihres Internet-Browsers oder wenden sich an
                  dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann
                  die Verarbeitung allerdings nicht über die Einstellungen des
                  Browsers unterbunden werden. Stattdessen müssen Sie insoweit
                  die Einstellung Ihres Flash-Players ändern. Auch die hierfür
                  erforderlichen Schritte und Maßnahmen hängen von Ihrem konkret
                  genutzten Flash-Player ab. Bei Fragen benutzen Sie daher bitte
                  ebenso die Hilfefunktion oder Dokumentation Ihres
                  Flash-Players oder wenden sich an den Hersteller bzw.
                  Benutzer-Support.
                </p>
                <p className="legal-paragraph">
                  Sollten Sie die Installation der Cookies verhindern oder
                  einschränken, kann dies allerdings dazu führen, dass nicht
                  sämtliche Funktionen unseres Internetauftritts vollumfänglich
                  nutzbar sind.
                </p>

                {/* SUBSECTION: Serverdaten */}
                <h4 className="subsubsection-heading">Serverdaten</h4>
                <p className="legal-paragraph">
                  Aus technischen Gründen, insbesondere zur Gewährleistung eines
                  sicheren und stabilen Internetauftritts, werden Daten durch
                  Ihren Internet-Browser an uns bzw. an unseren
                  Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles
                  werden u.a. Typ und Version Ihres Internetbrowsers, das
                  Betriebssystem, die Website, von der aus Sie auf unseren
                  Internetauftritt gewechselt haben (Referrer URL), die
                  Website(s) unseres Internetauftritts, die Sie besuchen, Datum
                  und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des
                  Internetanschlusses, von dem aus die Nutzung unseres
                  Internetauftritts erfolgt, erhoben.
                </p>
                <p className="legal-paragraph">
                  Diese so erhobenen Daten werden vorrübergehend gespeichert,
                  dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.
                </p>
                <p className="legal-paragraph">
                  Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6
                  Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in
                  der Verbesserung, Stabilität, Funktionalität und Sicherheit
                  unseres Internetauftritts.
                </p>
                <p className="legal-paragraph">
                  Die Daten werden spätestens nach sieben Tage wieder gelöscht,
                  soweit keine weitere Aufbewahrung zu Beweiszwecken
                  erforderlich ist. Andernfalls sind die Daten bis zur
                  endgültigen Klärung eines Vorfalls ganz oder teilweise von der
                  Löschung ausgenommen.
                </p>

                {/* SUBSECTION: Instagram */}
                <h4 className="subsubsection-heading">Instagram</h4>
                <p className="legal-paragraph">
                  Zur Bewerbung unserer Produkte und Leistungen sowie zur
                  Kommunikation mit Interessenten oder Kunden betreiben wir eine
                  Firmenpräsenz auf der Plattform Instagram.
                </p>
                <p className="legal-paragraph">
                  Auf dieser Social-Media-Plattform sind wir gemeinsam mit der
                  Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin
                  2, Irland, verantwortlich.
                </p>
                <p className="legal-paragraph">
                  Der Datenschutzbeauftragte von Instagram kann über ein
                  Kontaktformular erreicht werden:
                </p>
                <p className="legal-link">
                  <a
                    href="https://www.facebook.com/help/contact/540977946302970"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    https://www.facebook.com/help/contact/540977946302970
                  </a>
                </p>
                <p className="legal-paragraph">
                  Die gemeinsame Verantwortlichkeit haben wir in einer
                  Vereinbarung bezüglich der jeweiligen Verpflichtungen im Sinne
                  der DSGVO geregelt. Diese Vereinbarung, aus der sich die
                  gegenseitigen Verpflichtungen ergeben, ist unter dem folgenden
                  Link abrufbar:
                </p>
                <p className="legal-link">
                  <a
                    href="https://www.facebook.com/legal/terms/page_controller_addendum"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    https://www.facebook.com/legal/terms/page_controller_addendum
                  </a>
                </p>
                <p className="legal-paragraph">
                  Rechtsgrundlage für die dadurch erfolgende und nachfolgend
                  wiedergegebene Verarbeitung von personenbezogenen Daten ist
                  Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                  besteht an der Analyse, der Kommunikation sowie dem Absatz und
                  der Bewerbung unserer Produkte und Leistungen.
                </p>
                <p className="legal-paragraph">
                  Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß
                  Art. 6 Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber
                  sein. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs.
                  3 DSGVO jederzeit durch eine Mitteilung an den
                  Plattformbetreiber für die Zukunft widerrufen.
                </p>
                <p className="legal-paragraph">
                  Bei dem Aufruf unseres Onlineauftritts auf der Plattform
                  Instagram werden von der Meta Platforms Ireland Limited als
                  Betreiberin der Plattform in der EU Daten des Nutzers (z.B.
                  persönliche Informationen, IP-Adresse etc.) verarbeitet.
                </p>
                <p className="legal-paragraph">
                  Diese Daten des Nutzers dienen zu statistischen Informationen
                  über die Inanspruchnahme unserer Firmenpräsenz auf Instagram.
                  Die Meta Platforms Ireland Limited nutzt diese Daten zu
                  Marktforschungs- und Werbezwecken sowie zur Erstellung von
                  Profilen der Nutzer. Anhand dieser Profile ist es der Meta
                  Platforms Ireland Limited beispielsweise möglich, die Nutzer
                  innerhalb und außerhalb von Instagram interessenbezogen zu
                  bewerben. Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem
                  Account auf Instagram eingeloggt, kann die Meta Platforms
                  Ireland Limited zudem die Daten mit dem jeweiligen Nutzerkonto
                  verknüpfen.
                </p>
                <p className="legal-paragraph">
                  Im Falle einer Kontaktaufnahme des Nutzers über Instagram
                  werden die bei dieser Gelegenheit eingegebenen
                  personenbezogenen Daten des Nutzers zur Bearbeitung der
                  Anfrage genutzt. Die Daten des Nutzers werden bei uns
                  gelöscht, sofern die Anfrage des Nutzers abschließend
                  beantwortet wurde und keine gesetzlichen
                  Aufbewahrungspflichten, wie z.B. bei einer anschließenden
                  Vertragsabwicklung, entgegenstehen.
                </p>
                <p className="legal-paragraph">
                  Zur Verarbeitung der Daten werden von der Meta Platforms
                  Ireland Limited ggf. auch Cookies gesetzt.
                </p>
                <p className="legal-paragraph">
                  Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden
                  sein, so besteht die Möglichkeit, die Installation der Cookies
                  durch eine entsprechende Einstellung des Browsers zu
                  verhindern. Bereits gespeicherte Cookies können ebenfalls
                  jederzeit gelöscht werden. Die Einstellungen hierzu sind vom
                  jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die
                  Verarbeitung nicht über die Einstellungen des Browsers
                  unterbinden, sondern durch die entsprechende Einstellung des
                  Flash-Players. Sollte der Nutzer die Installation der Cookies
                  verhindern oder einschränken, kann dies dazu führen, dass
                  nicht sämtliche Funktionen von Facebook vollumfänglich nutzbar
                  sind.
                </p>
                <p className="legal-paragraph">
                  Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung
                  und zur Löschung der von Instagram verarbeiteten Daten finden
                  sich in der Datenrichtlinie von Instagram:
                </p>
                <p className="legal-link">
                  <a
                    href="https://help.instagram.com/519522125107875"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    https://help.instagram.com/519522125107875
                  </a>
                </p>
                <p className="legal-paragraph">
                  Es ist nicht ausgeschlossen, dass die Verarbeitung durch die
                  Meta Platforms Ireland Limited auch über die Meta Platforms,
                  Inc., 1601 Willow Road, Menlo Park, California 94025 in den
                  USA erfolgt.
                </p>

                {/* SUBSECTION: Allgemeine Verlinkung */}
                <h4 className="subsubsection-heading">
                  Allgemeine Verlinkung auf Profile bei Drittanbietern
                </h4>
                <p className="legal-paragraph">
                  Der Anbieter setzt auf der Website eine Verlinkung auf die
                  nachstehend aufgeführten sozialen Netzwerke ein.
                </p>
                <p className="legal-paragraph">
                  Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das
                  berechtigte Interesse des Anbieters besteht an der
                  Verbesserung der Nutzungsqualität der Website.
                </p>
                <p className="legal-paragraph">
                  Die Einbindung der Plugins erfolgt dabei über eine verlinkte
                  Grafik. Erst durch einen Klick auf die entsprechende Grafik
                  wird der Nutzer zu dem Dienst des jeweiligen sozialen
                  Netzwerks weitergeleitet.
                </p>
                <p className="legal-paragraph">
                  Nach der Weiterleitung des Kunden werden durch das jeweilige
                  Netzwerk Informationen über den Nutzer erfasst. Dies sind
                  zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte
                  Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto
                  des jeweiligen Netzwerks eingeloggt, kann der
                  Netzwerk-Betreiber ggf. die gesammelten Informationen des
                  konkreten Besuches des Nutzers dem persönlichen Account des
                  Nutzers zuordnen. Interagiert der Nutzer über einen
                  „Teilen“-Button des jeweiligen Netzwerks, können diese
                  Informationen in dem persönlichen Benutzerkonto des Nutzers
                  gespeichert und ggf. veröffentlicht werden. Will der Nutzer
                  verhindern, dass die gesammelten Informationen unmittelbar
                  seinem Benutzerkonto zugeordnet werden, muss sich der Nutzer
                  vor dem Anklicken der Grafik ausloggen. Zudem besteht die
                  Möglichkeit, das jeweilige Benutzerkonto entsprechend zu
                  konfigurieren.
                </p>
                <p className="legal-paragraph">
                  Folgende soziale Netzwerke sind vom Anbieter verlinkt:
                </p>

                <h4 className="subsubsection-heading">Instagram</h4>
                <p className="legal-paragraph">
                  Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin
                  2, Irland.
                </p>
                <p className="legal-link">
                  Datenschutzerklärung:&nbsp;
                  <a
                    href="https://help.instagram.com/519522125107875"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    https://help.instagram.com/519522125107875
                  </a>
                </p>
                <p className="legal-paragraph">
                  <a
                    href="https://www.generator-datenschutzerklärung.de"
                    target="_blank"
                    rel="noopener"
                  >
                    Muster-Datenschutzerklärung
                  </a>{" "}
                  der{" "}
                  <a
                    href="https://www.bewertung-löschen24.de"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    Anwaltskanzlei Weiß &amp; Partner
                  </a>
                </p>

                {/* CONTACT INFO */}
                <div className="contact-info-box">
                  <h4 className="contact-heading">Kontakt</h4>
                  <p className="legal-paragraph">
                    Bei Fragen zum Datenschutz wenden Sie sich bitte an:
                  </p>
                  <p className="legal-paragraph">
                    <strong>nifty thrifty</strong> / Inh. Thomas Meyer
                    <br />
                    <a href="mailto:kunst.raum@gmx.de">kunst.raum@gmx.de</a>
                  </p>
                </div>
              </section>
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
    <nav className={`nav-bar ${isMenuOpen ? "menu-open" : ""}`}>
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
