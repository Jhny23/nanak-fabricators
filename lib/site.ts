export const site = {
  name: "Nanak Fabricators Limited",
  short: "Nanak",
  phones: ["+254 721 855 496", "+254 792 283 286"],
  // WhatsApp quote form sends to the first number (international format, no +).
  whatsapp: "254721855496",
  emails: ["info@nanakfabricators.co.ke", "nanakfabs@gmail.com"],
  address: "Pride Lands, near GreatWall Gardens, Siyani Brothers Godowns, Fresh Winds, Athi River, Kenya",
  location: "Athi River, Kenya",
  facebook: "https://www.facebook.com/p/Nanak-Fabricators-Limited-100064802049859/",
  // TODO: add the TikTok profile URL here and it will appear in the footer.
  tiktok: "",
};

export const bodyTypes = [
  "Bus body",
  "Truck / cargo body",
  "Tipper",
  "Trailer",
  "Tanker / exhauster",
  "Something else",
] as const;

export const chassisBrands = ["Isuzu", "FUSO", "HOWO Sinotruk", "TATA", "FAW", "Eicher"] as const;
