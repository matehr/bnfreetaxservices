/*
 * Shared site behavior: header, footer, alert banner, and the
 * season-data sections (income limits, schedule, locations,
 * booking buttons, training). Content comes from js/site-data.js.
 * You should not need to edit this file for a normal season update.
 */
(function () {
  "use strict";

  var V = window.VITA;
  var html = document.documentElement;
  var lang = html.lang === "es" ? "es" : "en";
  var root = html.getAttribute("data-root") || "";
  var page = html.getAttribute("data-page") || "";
  if (!V) return;

  /* ---------- tiny helpers ---------- */
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === "class") el.className = attrs[k];
      else if (k === "html") el.innerHTML = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    [].concat(kids || []).forEach(function (c) {
      if (c == null || c === false) return;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }
  function t(v) { return v && typeof v === "object" ? (v[lang] || v.en) : v; }
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, V);
  }
  function loc(id) { return V.locations.filter(function (l) { return l.id === id; })[0]; }
  function money(n) { return "$" + n.toLocaleString("en-US"); }
  function time(hhmm) {
    var p = hhmm.split(":"), hr = +p[0], m = p[1];
    var suf = hr >= 12 ? (lang === "es" ? "p. m." : "pm") : (lang === "es" ? "a. m." : "am");
    hr = hr % 12 || 12;
    return hr + ":" + m + " " + suf;
  }
  function icon(name) {
    return h("img", { src: root + "images/icons/" + name + ".svg", alt: "", class: "icon", width: 28, height: 28 });
  }

  var S = {
    en: {
      skip: "Skip to main content", menu: "Menu", book: "Book an appointment",
      langLabel: "Español", langHref: "es/", langTitle: "Ver este sitio en español",
      open: "Open", last: "Last drop-off appointment", byPhone: "Book by phone",
      bookAt: "Book at", call: "Call", directions: "Get directions",
      spanishTag: "Limited Spanish-language services", englishOnly: "English only",
      nonresTag: "Nonresident & international student returns",
      nonresNote: "Nonresident and international student returns are prepared only at Heartland Community College.",
      nonresForm: "Nonresident intake form (Form 13614-NR)",
      upTo: "or less", virtual: "Virtual VITA", virtualBtn: "Book a virtual appointment",
      footAbout: "Free tax preparation for qualifying families in McLean County, by IRS-certified volunteers.",
      footContact: "Contact", footLinks: "More", footSeason: "Our season",
      firstDay: "First day of the season:", copyright: "Bloomington Normal VITA Foundation · a 501(c)(3) nonprofit",
      memoriam: "In memory of Bill Bartley", mapTitle: "Map of",
      nav: [
        ["index.html", "Home"], ["appointments.html", "Appointments"], ["locations.html", "Locations"],
        ["virtual.html", "Virtual VITA", "virtual"], ["faq.html", "FAQ"], ["about.html", "About"],
        ["volunteers.html", "Volunteer"], ["donate.html", "Donate"]
      ]
    },
    es: {
      skip: "Saltar al contenido principal", menu: "Menú", book: "Hacer una cita",
      langLabel: "English", langHref: "../", langTitle: "View this site in English",
      open: "Abierto", last: "Última cita para dejar documentos", byPhone: "Cita por teléfono",
      bookAt: "Hacer cita en", call: "Llame al", directions: "Cómo llegar",
      spanishTag: "Servicios en español (limitados)", englishOnly: "Solo en inglés",
      nonresTag: "Declaraciones de no residentes y estudiantes internacionales",
      nonresNote: "Las declaraciones de no residentes y estudiantes internacionales se preparan solamente en Heartland Community College.",
      nonresForm: "Hoja de admisión para no residentes (Formulario 13614-NR, en inglés)",
      upTo: "o menos", virtual: "VITA virtual", virtualBtn: "Hacer una cita virtual",
      footAbout: "Preparación de impuestos gratuita para familias que califican en el condado de McLean, por voluntarios certificados por el IRS.",
      footContact: "Contacto", footLinks: "Más", footSeason: "Nuestra temporada",
      firstDay: "Primer día de la temporada:", copyright: "Bloomington Normal VITA Foundation · organización sin fines de lucro 501(c)(3)",
      memoriam: "En memoria de Bill Bartley", mapTitle: "Mapa de",
      nav: [
        ["index.html", "Inicio"], ["appointments.html", "Citas"], ["locations.html", "Ubicaciones"],
        ["virtual.html", "VITA virtual", "virtual"], ["faq.html", "Preguntas"], ["about.html", "Nosotros"],
        ["donate.html", "Donar", "en-only"]
      ]
    }
  }[lang];

  /* Pages that have a Spanish twin. */
  var ES_PAGES = ["index.html", "appointments.html", "locations.html", "virtual.html", "faq.html", "about.html"];

  /* ---------- banner ---------- */
  function banner() {
    var b = V.banner;
    if (!b || !b.show) return null;
    return h("div", { class: "banner banner--" + (b.level || "info"), role: "status" },
      h("div", { class: "wrap" }, [h("strong", null, lang === "es" ? "Aviso: " : "Notice: "), t(b)]));
  }

  /* ---------- header ---------- */
  function header() {
    var list = h("ul", { class: "nav__list", id: "nav-list" });
    S.nav.forEach(function (n) {
      if (n[2] === "virtual" && !(V.virtual && V.virtual.enabled)) return;
      var enOnly = n[2] === "en-only";
      var base = root + (lang === "es" && !enOnly ? "es/" : "");
      var cur = n[0] === page && !(lang === "es" && enOnly);
      list.appendChild(h("li", null, h("a", { href: base + n[0], "aria-current": cur ? "page" : null }, n[1])));
    });

    var twin = lang === "en"
      ? (ES_PAGES.indexOf(page) > -1 ? root + "es/" + page : root + "es/index.html")
      : root + page;
    var langLink = h("a", { class: "lang", href: twin, hreflang: lang === "en" ? "es" : "en", lang: lang === "en" ? "es" : "en", title: S.langTitle }, S.langLabel);

    var btn = h("button", { class: "nav__toggle", type: "button", "aria-expanded": "false", "aria-controls": "site-nav" },
      [h("span", { class: "nav__bars", "aria-hidden": "true" }), S.menu]);
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { btn.click(); btn.focus(); }
    });

    var nav = h("nav", { class: "nav", id: "site-nav", "aria-label": lang === "es" ? "Principal" : "Main" }, list);

    return h("div", { class: "header" }, h("div", { class: "wrap header__inner" }, [
      h("a", { class: "brand", href: root + (lang === "es" ? "es/" : "") + "index.html" }, [
        h("img", { src: root + "images/logo/logo.svg", alt: "BN VITA", width: 150, height: 40, class: "brand__logo" }),
        h("span", { class: "brand__tag" }, lang === "es" ? "Servicios de impuestos gratuitos en Bloomington‑Normal" : "Bloomington‑Normal Free Tax Services")
      ]),
      h("div", { class: "header__actions" }, [
        langLink,
        h("a", { class: "btn btn--primary btn--sm header__cta", href: root + (lang === "es" ? "es/" : "") + "appointments.html" }, S.book)
      ]),
      btn,
      nav
    ]));
  }

  /* ---------- footer ---------- */
  function footer() {
    var base = root + (lang === "es" ? "es/" : "");
    return h("div", { class: "footer" }, [
      h("div", { class: "wrap footer__grid" }, [
        h("div", null, [
          h("img", { src: root + "images/logo/logo-reverse.svg", alt: "BN VITA", width: 140, height: 38 }),
          h("p", null, S.footAbout)
        ]),
        h("div", null, [
          h("h2", null, S.footSeason),
          h("p", null, [S.firstDay + " ", h("strong", null, t(V.dates.firstDay))])
        ]),
        h("div", null, [
          h("h2", null, S.footContact),
          h("p", null, h("a", { href: "mailto:" + V.contact.email }, V.contact.email)),
          h("p", null, ["Normal ARC: ", h("a", { href: "tel:" + V.contact.arcPhone.replace(/\D/g, "") }, V.contact.arcPhone)])
        ]),
        h("div", null, [
          h("h2", null, S.footLinks),
          h("ul", { class: "footer__links" }, [
            h("li", null, h("a", { href: base + "faq.html" }, lang === "es" ? "Preguntas frecuentes" : "FAQ")),
            h("li", null, h("a", { href: root + "volunteers.html" }, lang === "es" ? "Ser voluntario (en inglés)" : "Volunteer with us")),
            h("li", null, h("a", { href: root + "donate.html" }, lang === "es" ? "Donar (en inglés)" : "Donate")),
            h("li", null, h("a", { href: root + "bill_bartley.html" }, S.memoriam))
          ])
        ])
      ]),
      h("div", { class: "footer__base" }, h("div", { class: "wrap" },
        h("p", null, "© " + V.seasonYear + " " + S.copyright)))
    ]);
  }

  /* ---------- data sections ---------- */
  var R = {};

  R.income = function () {
    return h("ul", { class: "income" }, V.income.map(function (r) {
      return h("li", null, [h("span", null, t(r)), h("strong", null, money(r.limit) + " " + S.upTo)]);
    }));
  };

  R.schedule = function () {
    return h("ul", { class: "schedule" }, V.schedule.map(function (s) {
      var l = loc(s.location);
      return h("li", { class: "schedule__row" }, [
        h("span", { class: "schedule__day" }, t(s.day)),
        h("span", { class: "schedule__site" }, [
          h("strong", null, t(l.name)),
          h("span", null, S.open + " " + time(s.open) + "–" + time(s.close)),
          h("span", { class: "muted" }, S.last + ": " + time(s.lastAppt))
        ])
      ]);
    }));
  };

  function hoursFor(id) {
    return V.schedule.filter(function (s) { return s.location === id; });
  }

  function tags(l) {
    var out = [];
    if (l.services.spanish) out.push(h("span", { class: "tag tag--es" }, S.spanishTag));
    else if (lang === "es") out.push(h("span", { class: "tag tag--muted" }, S.englishOnly));
    if (l.services.nonresident) out.push(h("span", { class: "tag tag--nr" }, S.nonresTag));
    return out.length ? h("p", { class: "tags" }, out) : null;
  }

  function bookAction(l, cls) {
    return l.booking
      ? h("a", { class: "btn " + (cls || "btn--primary"), href: l.booking, target: "_blank", rel: "noopener" }, S.bookAt + " " + l.short)
      : h("a", { class: "btn " + (cls || "btn--primary"), href: "tel:" + l.phone.replace(/\D/g, "") }, S.call + " " + l.phone);
  }

  R.locations = function () {
    return h("div", { class: "cards cards--loc" }, V.locations.map(function (l) {
      var q = encodeURIComponent(l.address.join(", "));
      return h("article", { class: "card loc", id: l.id }, [
        h("div", { class: "loc__map" }, h("iframe", { src: l.map, title: S.mapTitle + " " + t(l.name), loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", allowfullscreen: "" })),
        h("div", { class: "loc__body" }, [
          h("h2", null, t(l.name)),
          tags(l),
          h("address", null, [l.address[0], h("br"), l.address[1]]),
          h("p", null, t(l.where)),
          h("ul", { class: "loc__hours" }, hoursFor(l.id).map(function (s) {
            return h("li", null, [h("strong", null, t(s.day) + ": "), time(s.open) + "–" + time(s.close),
              h("span", { class: "muted" }, " (" + S.last.toLowerCase() + " " + time(s.lastAppt) + ")")]);
          })),
          l.services.nonresident ? h("p", { class: "note" }, [S.nonresNote + " ", h("a", { href: root + V.forms.nonresident }, S.nonresForm)]) : null,
          h("p", { class: "loc__actions" }, [
            bookAction(l),
            h("a", { class: "btn btn--ghost", href: "https://www.google.com/maps/dir/?api=1&destination=" + q, target: "_blank", rel: "noopener" }, S.directions)
          ])
        ])
      ]);
    }));
  };

  R.booking = function () {
    var wrap = h("div", { class: "cards cards--book" });
    V.locations.forEach(function (l) {
      var days = hoursFor(l.id).map(function (s) {
        return h("li", null, [h("strong", null, t(s.day)), " · " + time(s.open) + "–" + time(s.close),
          h("br"), h("span", { class: "muted" }, S.last + ": " + time(s.lastAppt))]);
      });
      wrap.appendChild(h("article", { class: "card book" }, [
        h("h3", null, t(l.name)),
        tags(l),
        h("ul", { class: "book__days" }, days),
        l.services.nonresident ? h("p", { class: "note" }, [S.nonresNote + " ", h("a", { href: root + V.forms.nonresident }, S.nonresForm)]) : null,
        l.booking ? null : h("p", { class: "muted" }, lang === "es" ? "Las citas en este sitio solo se hacen por teléfono." : "Appointments at this site are made by phone only."),
        bookAction(l)
      ]));
    });
    return wrap;
  };

  R.virtual = function () {
    if (!(V.virtual && V.virtual.enabled)) return null;
    return h("a", { class: "btn btn--primary", href: V.virtual.booking, target: "_blank", rel: "noopener" }, S.virtualBtn);
  };

  R.training = function () {
    var T = V.training;
    return h("div", { class: "training" }, [
      h("div", { class: "cards cards--2" }, T.groups.map(function (g) {
        return h("div", { class: "card card--flat" }, [h("h3", null, g.name),
          h("ul", { class: "plain" }, g.sessions.map(function (s) { return h("li", null, s); }))]);
      })),
      h("p", null, [h("strong", null, "Returning volunteers: "), "refresher course on " + T.refresher + "."]),
      h("p", null, [h("strong", null, "Where: "), T.location + "."])
    ]);
  };

  /* ---------- mount ---------- */
  function mount() {
    var top = document.getElementById("site-header");
    if (top) {
      top.innerHTML = "";
      top.appendChild(h("a", { class: "skip", href: "#main" }, S.skip));
      var b = banner(); if (b) top.appendChild(b);
      top.appendChild(header());
    }
    var foot = document.getElementById("site-footer");
    if (foot) { foot.innerHTML = ""; foot.appendChild(footer()); }

    [].forEach.call(document.querySelectorAll("[data-vita]"), function (el) {
      var fn = R[el.getAttribute("data-vita")];
      if (!fn) return;
      var node = fn();
      el.innerHTML = "";
      if (node) el.appendChild(node); else el.hidden = true;
    });
    [].forEach.call(document.querySelectorAll("[data-vita-text]"), function (el) {
      var v = get(el.getAttribute("data-vita-text"));
      if (v != null) el.textContent = t(v);
    });
    [].forEach.call(document.querySelectorAll("[data-vita-href]"), function (el) {
      var v = get(el.getAttribute("data-vita-href"));
      if (v) el.setAttribute("href", /^(https?:|mailto:|tel:)/.test(v) ? v : root + v);
    });
    if (!(V.virtual && V.virtual.enabled)) {
      [].forEach.call(document.querySelectorAll("[data-if-virtual]"), function (el) { el.hidden = true; });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
