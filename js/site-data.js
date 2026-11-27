/*
 * ============================================================
 *  SEASON DATA — edit this one file each year.
 * ============================================================
 *  Everything that changes season to season lives here: dates,
 *  income limits, hours, booking links, training and the alert
 *  banner. Every page (English and Spanish) reads from it, so a
 *  change here shows up everywhere at once.
 *
 *  Tips:
 *   - Times use 24-hour "HH:MM" (e.g. "17:00" = 5:00 pm).
 *   - Keep the quotes and commas. If the site suddenly looks
 *     empty after an edit, a missing comma is the usual cause.
 *   - Spanish text goes in the "es" fields next to the English.
 * ============================================================
 */
window.VITA = {

  /* The tax year we are preparing returns for, and the calendar
     year the season runs in. */
  taxYear: 2026,
  seasonYear: 2027,

  /* Key dates (shown as written). */
  dates: {
    bookingOpens: { en: "January 20, 2027", es: "20 de enero de 2027" },
    firstDay:     { en: "February 1, 2027", es: "1 de febrero de 2027" },
    bookingWindow:{ en: "4 weeks", es: "4 semanas" }
  },

  /* ------------------------------------------------------------
     ALERT BANNER — set "show" to true to display a notice at the
     top of every page (closures, weather, booking news).
     "level" can be "info" (blue) or "urgent" (coral).
     ------------------------------------------------------------ */
  banner: {
    show: false,
    level: "urgent",
    en: "Due to weather, all sites are CLOSED today.",
    es: "Debido al clima, todos los sitios están CERRADOS hoy."
  },

  /* Income limits — who qualifies. */
  income: [
    { en: "Single, no dependents",   es: "Soltero(a), sin dependientes",   limit: 47000 },
    { en: "Single with dependents",  es: "Soltero(a), con dependientes",   limit: 70000 },
    { en: "Married (combined income)", es: "Casados (ingreso combinado)",  limit: 70000 }
  ],

  /* Intake forms (replace the PDFs in /documents each season,
     keeping the same file names). */
  forms: {
    intake:     "documents/f13614c.pdf",   // Form 13614-C (English)
    intakeEs:   "documents/f13614cs.pdf",  // Form 13614-C (SP) (Spanish)
    nonresident:"documents/f13614nr.pdf"   // Form 13614-NR (nonresident)
  },

  contact: {
    email: "info@bnfreetaxservices.org",
    arcPhone: "309-888-9099"
  },

  /* PayPal donate buttons. */
  donate: {
    general:  "https://www.paypal.com/donate/?hosted_button_id=3FUJ5QK6CPMEL",
    memorial: "https://www.paypal.com/donate/?hosted_button_id=XJ5WEFB8JTGTU"
  },

  /* ------------------------------------------------------------
     LOCATIONS
     booking: an online booking link, or null to book by phone.
     services: spanish "limited" shows the Spanish-services tag;
               nonresident true shows the nonresident callout.
     ------------------------------------------------------------ */
  locations: [
    {
      id: "bpl",
      name: { en: "Bloomington Public Library", es: "Biblioteca Pública de Bloomington" },
      short: "BPL",
      address: ["205 E. Olive Street", "Bloomington, IL 61701"],
      where: {
        en: "Community room on the second floor.",
        es: "Salón comunitario en el segundo piso."
      },
      booking: "https://outlook.office365.com/owa/calendar/BHAVolunteer@bnfreetaxservices.org/bookings/",
      phone: null,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.9398158330455!2d-88.99400862514992!3d40.4765964519954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b71dae09b274d%3A0x2da6e70f47fe7cf9!2sBloomington%20Public%20Library!5e0!3m2!1sen!2sus!4v1732155855838!5m2!1sen!2sus",
      services: { spanish: "limited", nonresident: false }
    },
    {
      id: "hcc",
      name: { en: "Heartland Community College", es: "Heartland Community College" },
      short: "HCC",
      address: ["1508 Vermillion Way", "Normal, IL 61761"],
      where: {
        en: "Third floor of the Workforce Development Center (WDC) building.",
        es: "Tercer piso del edificio Workforce Development Center (WDC)."
      },
      booking: "https://outlook.office365.com/owa/calendar/HCCVita@bnfreetaxservices.org/bookings/",
      phone: null,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.2552106936508!2d-89.01528405773443!3d40.53539209999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b71596baae021%3A0x5ac31298d37403f9!2sWorkforce%20Development%20Center%2C%201508%20Vermillion%20Way%2C%20Normal%2C%20IL%2061761!5e1!3m2!1sen!2sus!4v1763869868137!5m2!1sen!2sus",
      services: { spanish: null, nonresident: true }
    },
    {
      id: "arc",
      name: { en: "Normal Activity & Recreation Center", es: "Normal Activity & Recreation Center" },
      short: "ARC",
      address: ["600 E Willow St", "Normal, IL 61761"],
      where: {
        en: "Use the north door on the west side to reach the second floor.",
        es: "Use la puerta norte del lado oeste para llegar al segundo piso."
      },
      booking: null,
      phone: "309-888-9099",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.241438012349!2d-88.97992994924651!3d40.51415427925259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b70fdc3ad5a01%3A0x96a75800c6beb058!2s600+E+Willow+St%2C+Normal%2C+IL+61761!5e0!3m2!1sen!2sus!4v1484100855025",
      services: { spanish: null, nonresident: false }
    }
  ],

  /* ------------------------------------------------------------
     WEEKLY SCHEDULE
     open/close = when the site is open.
     lastAppt   = the last drop-off appointment start time
                  (normally 30 minutes before closing).
     ------------------------------------------------------------ */
  schedule: [
    { day: { en: "Monday",   es: "Lunes"  }, location: "bpl", open: "17:00", close: "20:00", lastAppt: "19:30" },
    { day: { en: "Tuesday",  es: "Martes" }, location: "hcc", open: "17:00", close: "20:00", lastAppt: "19:30" },
    { day: { en: "Thursday", es: "Jueves" }, location: "arc", open: "09:00", close: "15:00", lastAppt: "14:30" },
    { day: { en: "Thursday", es: "Jueves" }, location: "hcc", open: "17:00", close: "20:00", lastAppt: "19:30" },
    { day: { en: "Saturday", es: "Sábado" }, location: "bpl", open: "09:30", close: "12:30", lastAppt: "12:00" }
  ],

  /* Virtual VITA — set enabled to false to hide it from the menu
     and the appointments page if the program is not running. */
  virtual: {
    enabled: true,
    booking: "https://outlook.office365.com/owa/calendar/VirtualVita1@bnfreetaxservices.org/bookings/"
  },

  /* ------------------------------------------------------------
     VOLUNTEER TRAINING (English only)
     ------------------------------------------------------------ */
  training: {
    location: "Heartland Community College (room to be announced)",
    groups: [
      { name: "Group 1", sessions: ["Wednesday, January 13, 2027, 5:30–9:00 pm", "Wednesday, January 20, 2027, 5:30–9:00 pm"] },
      { name: "Group 2", sessions: ["Thursday, January 14, 2027, 5:30–9:00 pm", "Thursday, January 21, 2027, 5:30–9:00 pm"] }
    ],
    refresher: "Saturday, January 16, 2027, 9:00 am–12:00 pm"
  }
};
