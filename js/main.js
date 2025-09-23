document.addEventListener("DOMContentLoaded", () => {
  // Définition des textes FR & EN
  const translations = {
    fr: {
      hero_title: "Bienvenue chez",
      hero_brand: "IT Sanctuary",
      hero_desc: "Accélérez votre croissance grâce au digital.<br><strong>Nous accompagnons les entreprises et entrepreneurs vers l’excellence numérique.</strong>",
      hero_btn_1: "Commencez votre projet",
      hero_btn_2: "En savoir plus",
      mission_title: "Notre mission",
      mission_desc: "Chez <strong>IT Sanctuary</strong>, notre mission est de simplifier la transformation digitale pour tous.<br>Nous croyons que chaque entreprise, chaque projet, chaque passion mérite des solutions numériques accessibles et sur-mesure.",
      value1_title: "Innovation",
      value1_text: "Des solutions toujours à la pointe pour garder une longueur d’avance.",
      value2_title: "Proximité",
      value2_text: "Une équipe à l’écoute, un accompagnement personnalisé et humain.",
      value3_title: "Ambition",
      value3_text: "Nous visons l’excellence pour chaque projet, petit ou grand.",
      cta_title: "Prêt pour le changement ?",
      cta_desc: "Discutons de votre projet et transformons ensemble votre présence digitale.",
      cta_btn: "Contactez-nous",
      header_btn: "Demander un devis"
    },
    en: {
      hero_title: "Welcome to",
      hero_brand: "IT Sanctuary",
      hero_desc: "Accelerate your growth with digital.<br><strong>We guide businesses and entrepreneurs towards digital excellence.</strong>",
      hero_btn_1: "Start your project",
      hero_btn_2: "Learn more",
      mission_title: "Our mission",
      mission_desc: "At <strong>IT Sanctuary</strong>, our mission is to simplify digital transformation for everyone.<br>We believe every business, project, and passion deserves accessible and tailored digital solutions.",
      value1_title: "Innovation",
      value1_text: "Always cutting-edge solutions to stay ahead.",
      value2_title: "Proximity",
      value2_text: "A team that listens, with personalized and human support.",
      value3_title: "Ambition",
      value3_text: "We aim for excellence in every project, big or small.",
      cta_title: "Ready for change?",
      cta_desc: "Let’s discuss your project and transform your digital presence together.",
      cta_btn: "Contact us",
      header_btn: "Get a quote"
    }
  };

  // Fonction pour changer la langue
  function setLang(lang) {
    localStorage.setItem("site-lang", lang);

    document.getElementById("hero-title").textContent = translations[lang].hero_title;
    document.getElementById("hero-brand").textContent = translations[lang].hero_brand;
    document.getElementById("hero-desc").innerHTML = translations[lang].hero_desc;
    document.getElementById("hero-btn-1").textContent = translations[lang].hero_btn_1;
    document.getElementById("hero-btn-2").textContent = translations[lang].hero_btn_2;

    document.getElementById("mission-title").textContent = translations[lang].mission_title;
    document.getElementById("mission-desc").innerHTML = translations[lang].mission_desc;
    document.getElementById("value1-title").textContent = translations[lang].value1_title;
    document.getElementById("value1-text").textContent = translations[lang].value1_text;
    document.getElementById("value2-title").textContent = translations[lang].value2_title;
    document.getElementById("value2-text").textContent = translations[lang].value2_text;
    document.getElementById("value3-title").textContent = translations[lang].value3_title;
    document.getElementById("value3-text").textContent = translations[lang].value3_text;

    document.getElementById("cta-title").textContent = translations[lang].cta_title;
    document.getElementById("cta-desc").textContent = translations[lang].cta_desc;
    document.getElementById("cta-btn").textContent = translations[lang].cta_btn;

    document.getElementById("header-btn").textContent = translations[lang].header_btn;
  }

  // Initialisation à la langue sauvegardée ou FR
  let lang = localStorage.getItem("site-lang") || "fr";
  setLang(lang);

  // Toggle bouton
  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      lang = (lang === "fr") ? "en" : "fr";
      setLang(lang);
    });
  }
});