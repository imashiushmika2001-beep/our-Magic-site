/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  IMASHI & MEEDUM — EASY SETTINGS  💚                          ║
 ║  Change ONLY values in this file to personalize the website. ║
 ║  Ctrl+S -> Refresh the browser. No coding knowledge needed.   ║
 ╚══════════════════════════════════════════════════════════════╝
*/
window.WEDDING_CONFIG = {
  bride: "Imashi",
  groom: "Meedum",

  // TEMPORARY date (Friday 1 January 2027). Change when your date is confirmed.
  weddingDate: "2027-01-01",          // YYYY-MM-DD
  dateConfirmed: false,              // true once confirmed; false while tentative
  weddingTime24: "17:00",            // Sri Lanka time, 24 hour (countdown target)
  timeZone: "+05:30",                // Sri Lanka. If abroad, update offset.

  // IMPORTANT: times/venues below are PLACEHOLDERS, not real bookings!
  ceremonyTime: "5:00 PM",
  ceremonyVenue: "Venue to be announced",
  ceremonyAddress: "Sri Lanka",
  receptionTime: "7:00 PM",
  receptionVenue: "Venue to be announced",
  receptionAddress: "Sri Lanka",
  googleMapsLink: "",                // Paste your own Maps link later

  loveMessage: "Two hearts, one beautiful journey. With joyful hearts and our families by our side, we can't wait to begin our favourite chapter — together.",
  dressCode: "Garden Formal · Olive & Soft Pastels",
  dressNote: "Come dressed in something that makes you feel wonderful. Your presence is the loveliest gift of all.",

  // ADVANCED CURVED TIMELINE. Edit/add/remove any entries here.
  // Use illustration from one of: welcome, ceremony, cocktail, reception, dinner, dance, farewell
  timeline: [
    { time: "4:30 PM", name: "A Warm Welcome",      description: "A little hello before the magic begins.",   illustration: "welcome" },
    { time: "5:00 PM", name: "The Ceremony",        description: "The moment we promise each other forever.", illustration: "ceremony" },
    { time: "6:00 PM", name: "Cocktail Hour",        description: "Raise a glass to love and laughter.",      illustration: "cocktail" },
    { time: "7:00 PM", name: "The Reception",       description: "An evening of joy, hugs and celebration.",  illustration: "reception" },
    { time: "8:30 PM", name: "Dinner by Starlight", description: "Our favourite people, all in one place.",   illustration: "dinner" },
    { time: "10:00 PM", name: "Dance Under Stars",  description: "Music, magic, and memories in the making.", illustration: "dance" },
    { time: "11:30 PM", name: "Until We Meet Again",description: "Until the next chapter. With all our love.",illustration: "farewell" }
  ],

  // OPTIONAL background music. Use a song you are allowed to share.
  // Put YOUR own audio in assets/our-song.mp3 and set musicFile to "assets/our-song.mp3".
  // The guest chooses Play; it never starts without their action.
  musicFile: ""
};
