//***About Us***\\
function renderAbout(lang) {
  const t = translations[lang];

  document.querySelector('[data-i18n="about_us_title"]').innerText =
    t.about_us_title;
  document.querySelector('[data-i18n="about_us_heading"]').innerHTML =
    t.about_us_heading;
  document.querySelector('[data-i18n="about_us_description"]').innerText =
    t.about_us_description;
  document.querySelector('[data-i18n="financial_strategies_title"]').innerText =
    t.financial_strategies_title;
  document.querySelector('[data-i18n="financial_strategies_desc"]').innerText =
    t.financial_strategies_desc;
  document.querySelector('[data-i18n="about_us_extra_info"]').innerText =
    t.about_us_extra_info;
  document.querySelector(".about-contact-content a").innerText =
    t.contact_number;
}

//***Service***\\
function renderServices(lang) {
  const t = translations[lang];

  const servicesSectionData = {
    sectionTitle: {
      title: t.services_title,
      heading: t.services_heading,
    },
    services: [
      {
        id: 1,
        icon: "images/icon-service-1.svg",
        title: t.service_1_title,
        description: t.service_1_desc,
        list: [],
      },
      {
        id: 2,
        icon: "images/icon-service-2.svg",
        title: t.service_2_title,
        description: t.service_2_desc,
        list: [
          t.service_2_li1,
          t.service_2_li2,
          t.service_2_li3,
          t.service_2_li4,
        ],
      },
      {
        id: 3,
        icon: "images/icon-service-3.svg",
        title: t.service_3_title,
        description: t.service_3_desc,
        list: [t.service_3_li1, t.service_3_li2, t.service_3_li3],
      },
      {
        id: 4,
        icon: "images/icon-service-4.svg",
        title: t.service_4_title,
        description: t.service_4_desc,
        list: [t.service_4_li1, t.service_4_li2, t.service_4_li3],
      },
      {
        id: 5,
        icon: "images/icon-service-5.svg",
        title: t.service_5_title,
        description: t.service_5_desc,
        list: [t.service_5_li1, t.service_5_li2, t.service_5_li3],
      },
      {
        id: 6,
        icon: "images/icon-service-6.svg",
        title: t.service_6_title,
        description: t.service_6_desc,
        list: [t.service_6_li1, t.service_6_li2, t.service_6_li3],
      },
      {
        id: 7,
        icon: "images/icon-service-4.svg",
        title: t.service_7_title,
        description: t.service_7_desc,
        list: [t.service_7_li1, t.service_7_li2, t.service_7_li3],
      },
      {
        id: 8,
        icon: "images/icon-service-5.svg",
        title: t.service_8_title,
        description: t.service_8_desc,
        list: [t.service_8_li1, t.service_8_li2, t.service_8_li3],
      },
    ],
  };

  // Now render the data
  document.getElementById("services-title").innerText =
    servicesSectionData.sectionTitle.title;
  document.getElementById("services-heading").innerHTML =
    servicesSectionData.sectionTitle.heading;

  const serviceList = document.querySelector(".our-service-list");
  serviceList.innerHTML = "";

  servicesSectionData.services.forEach((service, index) => {
    const item = document.createElement("div");
    item.classList.add("service-item");

    item.innerHTML = `
      <div class="service-no"><h2>0${index + 1}</h2></div>
      <div class="service-content-box">
        <div class="icon-box">
          <img src="${service.icon}" alt="" />
        </div>
        <div class="service-item-content">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          ${
            service.list.length > 0
              ? `<ul>${service.list
                  .map((li) => `<li>${li}</li>`)
                  .join("")}</ul>`
              : ""
          }
        </div>
      </div>
    `;

    serviceList.appendChild(item);
  });
}

//***Why Choose Us***\\
function renderWhyChooseUs(lang) {
  const t = translations[lang];

  document.querySelector('[data-i18n="why_choose_us_title"]').innerText =
    t.why_choose_us_title;
  document.querySelector('[data-i18n="why_choose_us_heading"]').innerHTML =
    t.why_choose_us_heading;
  document.querySelector('[data-i18n="why_choose_1_title"]').innerText =
    t.why_choose_1_title;
  document.querySelector('[data-i18n="why_choose_1_desc"]').innerText =
    t.why_choose_1_desc;
  document.querySelector('[data-i18n="why_choose_2_title"]').innerText =
    t.why_choose_2_title;
  document.querySelector('[data-i18n="why_choose_2_desc"]').innerText =
    t.why_choose_2_desc;
  document.querySelector('[data-i18n="why_choose_list_1"]').innerText =
    t.why_choose_list_1;
  document.querySelector('[data-i18n="why_choose_list_2"]').innerText =
    t.why_choose_list_2;
}
//***Key Feature***\\
function renderFeatures(lang) {
  const t = translations[lang];
  document.querySelector('[data-i18n="feature_section_title"]').innerText =
    t.feature_section_title;
  document.querySelector('[data-i18n="feature_section_heading"]').innerHTML =
    t.feature_section_heading;

  const featureData = [
    {
      icon: "images/icon-our-feature-1.svg",
      title: t.feature_1_title,
      desc: t.feature_1_desc,
    },
    {
      icon: "images/icon-our-feature-2.svg",
      title: t.feature_2_title,
      desc: t.feature_2_desc,
    },
    {
      icon: "images/icon-our-feature-3.svg",
      title: t.feature_3_title,
      desc: t.feature_3_desc,
    },
    {
      icon: "images/icon-our-feature-4.svg",
      title: t.feature_4_title,
      desc: t.feature_4_desc,
    },
    {
      icon: "images/icon-our-feature-5.svg",
      title: t.feature_5_title,
      desc: t.feature_5_desc,
    },
    {
      icon: "images/icon-our-feature-6.svg",
      title: t.feature_6_title,
      desc: t.feature_6_desc,
    },
  ];

  const featureListContainer = document.querySelector(".our-feature-list");
  featureListContainer.innerHTML = "";

  featureData.forEach((item, index) => {
    const featureDiv = document.createElement("div");
    featureDiv.className = "our-feature-item wow fadeInUp";
    featureDiv.setAttribute("data-wow-delay", `${0.2 * index}s`);

    featureDiv.innerHTML = `
      <div class="icon-box">
        <img src="${item.icon}" alt="${item.title}" />
      </div>
      <div class="feature-item-content">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;

    featureListContainer.appendChild(featureDiv);
  });
}

//***Some Fact***\\
function renderFacts(lang) {
  const t = translations[lang];

  document.getElementById("fact-title").innerText = t.fact_title;
  document.getElementById("fact-heading").innerHTML = t.fact_heading;
  document.getElementById("fact-desc").innerText = t.fact_desc;
  document.getElementById("fact-footer-text").innerText = t.fact_footer_text;
  document.querySelector('[data-i18n="fact_1_label"]').innerText =
    t.fact_1_label;
  document.querySelector('[data-i18n="fact_2_label"]').innerText =
    t.fact_2_label;
  document.querySelector('[data-i18n="fact_3_label"]').innerText =
    t.fact_3_label;

  const factBoxContainer = document.getElementById("fact-counter-box-list");
  factBoxContainer.innerHTML = "";

  t.facts.forEach((fact) => {
    const factBox = document.createElement("div");
    factBox.className = "fact-counter-box";
    factBox.innerHTML = `
      <div class="icon-box">
        <img src="${fact.icon}" alt="" />
      </div>
      <div class="fact-counter-box-content">
        <h2><span class="counter">${fact.number}</span></h2>
        <p>${fact.label}</p>
      </div>
    `;
    factBoxContainer.appendChild(factBox);
  });
}
//***what we do***\\
function renderWhatWeDo(lang) {
  const t = translations[lang];

  document.querySelector('[data-i18n="what_we_do_title"]').innerText =
    t.what_we_do_title;

  document.querySelector('[data-i18n="what_we_do_heading"]').innerHTML =
    t.what_we_do_heading;

  document.querySelector('[data-i18n="what_we_do_description"]').innerText =
    t.what_we_do_description;

  document.querySelector('[data-i18n="what_we_do_list_1"]').innerText =
    t.what_we_do_list_1;

  document.querySelector('[data-i18n="what_we_do_list_2"]').innerText =
    t.what_we_do_list_2;

  document.querySelector('[data-i18n="what_we_do_list_3"]').innerText =
    t.what_we_do_list_3;

  document.querySelector('[data-i18n="what_we_do_list_4"]').innerText =
    t.what_we_do_list_4;

  document.querySelector('[data-i18n="what_we_do_button"]').innerText =
    t.what_we_do_button;

  document.querySelector('[data-i18n="what_we_do_experience_text"]').innerText =
    t.what_we_do_experience_text;
}

//***FAQs***\\
function renderFaqs(lang) {
  const t = translations[lang];

  // Title and Heading
  document.querySelector(".section-title h3").innerText = t.faqs_title;
  document.querySelector(".section-title h2").innerHTML = t.faqs_heading;

  // FAQs Data
  const faqs = [
    { q: t.faq_1_question, a: t.faq_1_answer },
    { q: t.faq_2_question, a: t.faq_2_answer },
    { q: t.faq_3_question, a: t.faq_3_answer },
    { q: t.faq_4_question, a: t.faq_4_answer },
    { q: t.faq_5_question, a: t.faq_5_answer },
  ];

  // Render Accordion
  const faqAccordion = document.getElementById("faqaccordion");
  faqAccordion.innerHTML = "";

  faqs.forEach((faq, index) => {
    const item = document.createElement("div");
    item.className = `accordion-item wow fadeInUp`;
    item.setAttribute("data-wow-delay", `${index * 0.2}s`);

    item.innerHTML = `
      <h2 class="accordion-header" id="heading${index + 1}">
        <button class="accordion-button ${index === 1 ? "" : "collapsed"}"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse${index + 1}"
          aria-expanded="${index === 1}"
          aria-controls="collapse${index + 1}">
          ${faq.q}
        </button>
      </h2>
      <div id="collapse${index + 1}"
        class="accordion-collapse collapse ${index === 1 ? "show" : ""}"
        aria-labelledby="heading${index + 1}"
        data-bs-parent="#faqaccordion">
        <div class="accordion-body">
          <p>${faq.a}</p>
        </div>
      </div>
    `;

    faqAccordion.appendChild(item);
  });
}

//***Contact Page ***\\
function renderContactHeader(lang) {
  const t = translations[lang];

  document.querySelector(".page-header-box h1").innerText = t.contact_us_title;
}

function renderContact(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      element.innerText = t[key];
    }
  });
}

//***Footer***\\
function renderFooter(lang) {
  const t = translations[lang];

  // Handle elements with inner text translation
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerText = t[key];
    }
  });

  // Handle elements with placeholder translation
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
}

//**Privacy Policy ***\\

function renderModalTexts(lang) {
  const t = translations[lang];

  document.querySelector('[data-i18n="privacy_policy"]').innerText =
    t.privacy_policy;
  document.querySelector('[data-i18n="privacy_policy_title"]').innerText =
    t.privacy_policy_title;
  document.querySelector('[data-i18n="privacy_policy_intro"]').innerText =
    t.privacy_policy_intro;
  document.querySelector('[data-i18n="privacy_policy_company"]').innerText =
    t.privacy_policy_company;
  document.querySelector('[data-i18n="terms_conditions"]').innerText =
    t.terms_conditions;
  document.querySelector('[data-i18n="data_controller_title"]').innerText =
    t.data_controller_title;
  document.querySelector('[data-i18n="data_collected_title"]').innerText =
    t.data_collected_title;
  document.querySelector('[data-i18n="legal_basis_title"]').innerText =
    t.legal_basis_title;
  document.querySelector('[data-i18n="use_of_data_title"]').innerText =
    t.use_of_data_title;
  document.querySelector('[data-i18n="privacy_policy_desc1"]').innerText =
    t.privacy_policy_desc1;

  // Optional: Set GDPR Rights if listed as separate <li data-i18n="right_access">, etc.
  document.querySelector('[data-i18n="right_access"]').innerText =
    t.right_access;
  document.querySelector('[data-i18n="right_rectification"]').innerText =
    t.right_rectification;
  document.querySelector('[data-i18n="right_erasure"]').innerText =
    t.right_erasure;
  document.querySelector('[data-i18n="right_restrict"]').innerText =
    t.right_restrict;
  document.querySelector('[data-i18n="right_portability"]').innerText =
    t.right_portability;
  document.querySelector('[data-i18n="right_object"]').innerText =
    t.right_object;
  document.querySelector('[data-i18n="right_withdraw"]').innerText =
    t.right_withdraw;
}

//**terms ***\\
function renderTerms(lang) {
  const t = translations[lang];

  document.querySelector('[data-i18n="close_button"]').innerText =
    t.close_button;
  document.querySelector('[data-i18n="terms_conditions_title"]').innerText =
    t.terms_conditions_title;
  document.querySelector('[data-i18n="effective_date"]').innerText =
    t.effective_date;
  document.querySelector('[data-i18n="terms_date"]').innerText = t.terms_date;
  document.querySelector('[data-i18n="terms_conditions_desc1"]').innerText =
    t.terms_conditions_desc1;

  document.querySelector('[data-i18n="company_info_title"]').innerText =
    t.company_info_title;
  document.querySelector('[data-i18n="company_info_desc"]').innerHTML =
    t.company_info_desc;

  document.querySelector('[data-i18n="use_of_website_title"]').innerText =
    t.use_of_website_title;
  document.querySelector('[data-i18n="use_of_website_desc"]').innerText =
    t.use_of_website_desc;

  document.querySelector(
    '[data-i18n="intellectual_property_title"]'
  ).innerText = t.intellectual_property_title;
  document.querySelector('[data-i18n="intellectual_property_desc"]').innerText =
    t.intellectual_property_desc;

  document.querySelector('[data-i18n="liability_title"]').innerText =
    t.liability_title;
  document.querySelector('[data-i18n="liability_desc"]').innerText =
    t.liability_desc;

  document.querySelector('[data-i18n="no_advice_title"]').innerText =
    t.no_advice_title;
  document.querySelector('[data-i18n="no_advice_desc"]').innerText =
    t.no_advice_desc;

  document.querySelector('[data-i18n="third_party_links_title"]').innerText =
    t.third_party_links_title;
  document.querySelector('[data-i18n="third_party_links_desc"]').innerText =
    t.third_party_links_desc;

  document.querySelector('[data-i18n="privacy_title"]').innerText =
    t.privacy_title;
  document.querySelector('[data-i18n="privacy_desc"]').innerText =
    t.privacy_desc;

  document.querySelector('[data-i18n="changes_title"]').innerText =
    t.changes_title;
  document.querySelector('[data-i18n="changes_desc"]').innerText =
    t.changes_desc;

  document.querySelector('[data-i18n="governing_law_title"]').innerText =
    t.governing_law_title;
  document.querySelector('[data-i18n="governing_law_desc"]').innerText =
    t.governing_law_desc;

  document.querySelector('[data-i18n="contact_title"]').innerText =
    t.contact_title;
  document.querySelector('[data-i18n="contact_desc"]').innerHTML =
    t.contact_desc;
  document.querySelectorAll('[data-i18n="company_email"]').forEach((el) => {
    el.innerText = t.company_email;
  });
}

//  document.addEventListener("DOMContentLoaded", function () {
//     renderWhatWeDo("en");
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const languageSelect = document.getElementById("languageSelect");
//   const selectedLang = languageSelect.value;

//   renderServices(selectedLang);
//   renderAbout(selectedLang);
//   renderWhyChooseUs(selectedLang);
//   renderFeatures(selectedLang);
//   renderFacts(selectedLang);
//   renderWhatWeDo(selectedLang);
//   renderFaqs(selectedLang);
//   renderFooter(selectedLang);
//   renderContactHeader(selectedLang);
//   renderContact(selectedLang);

//   languageSelect.addEventListener("change", function () {
//     const selectedLang = this.value;
//     renderServices(selectedLang);
//     renderAbout(selectedLang);
//     renderWhyChooseUs(selectedLang);
//     renderFeatures(selectedLang);
//     renderFacts(selectedLang);
//     renderWhatWeDo(selectedLang);
//     renderFaqs(selectedLang);
//     renderFooter(selectedLang);
//     renderContactHeader(selectedLang);
//     renderContact(selectedLang);
//   });
// });

// Set language and store in localStorage
function setLanguage(lang) {
  // Store the selected language
  localStorage.setItem("selectedLanguage", lang);
  
  // Update all translations
  updateTranslations(lang);
}

// Function to update all translations
function updateTranslations(lang) {
  const t = translations[lang];

  // Update all elements with data-i18n attributes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translatedText = t[key];

    if (translatedText && (translatedText.includes("<") || translatedText.includes("&"))) {
      el.innerHTML = translatedText;
    } else if (translatedText) {
      el.textContent = translatedText;
    }
  });

  // Update all sections
  renderServices(lang);
  renderAbout(lang);
  renderWhyChooseUs(lang);
  renderFeatures(lang);
  renderFacts(lang);
  renderWhatWeDo(lang);
  renderFaqs(lang);
  renderFooter(lang);
  renderContactHeader(lang);
  renderContact(lang);
  renderPrivacyPolicy(lang);
  renderTerms(lang);
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  // Get saved language or default to English
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  
  // Initialize with the saved language
  updateTranslations(savedLang);
});