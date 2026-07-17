// ============================================================
// RESOURCE DATA — edit this file to add, remove, or update help.
// Each resource is one { } block. Copy a block to add another.
// Keep the commas and quote marks exactly as shown.
//
// category options (pick one, spelled exactly):
//   "Pet food"  "Supplies"  "Fostering"  "Transport"
//   "Temporary shelter"  "Veterinary"  "Other"
//
// kind: "need"  = help for people whose animals need support
//       "offer" = ways to give help / surrender / donate
//   (The page can filter these separately so someone in crisis
//    isn't scrolling past donation info.)
//
// region: the municipality or county the resource serves.
//   For province-wide help, write "Ontario-wide".
// ============================================================

const RESOURCES = [
  {
    name: "Ontario SPCA – Temporary Housing for People and Their Pets",
    category: "Temporary shelter",
    kind: "need",
    region: "Ontario-wide",
    description: "Housing support for evacuees with pets, including an Airbnb.org partnership. Eligibility: be 18+ to book, have or be able to make an Airbnb account in good standing, be impacted by the event, and not have been previously unhoused before the event.",
    contact: "1-888-668-7722 (press 1 for housing support)",
    link: "https://ontariospca.ca/emergency-response/",
    hours: "Emergency support only"
  },
  {
    name: "Ontario SPCA – Pet Food & Supplies for Evacuees",
    category: "Pet food",
    kind: "need",
    region: "Ontario-wide",
    description: "Emergency supplies for evacuees with pets: crates, leashes, collars and harnesses, litter boxes and litter, and small-pet supplies (bedding, caging, food).",
    contact: "EmergencyResponse@ontariospca.ca",
    link: "https://ontariospca.ca/emergency-response/",
    hours: "Phone: 1-888-668-7722 ext. 991"
  },
  {
    name: "Ontario SPCA – Wildfire Telehealth for Pets",
    category: "Veterinary",
    kind: "need",
    region: "Ontario-wide",
    description: "Telehealth pet line for evacuees and emergency responders, available during the wildfire response.",
    contact: "1-888-668-7722 ext. 992",
    link: "https://ontariospca.ca/emergency-response/",
    hours: "During active wildfire response"
  },
  {
    name: "Ontario SPCA – Northwest Animal Centre (Emergency Boarding & Vet Care)",
    category: "Temporary shelter",
    kind: "need",
    region: "Thunder Bay",
    description: "Emergency boarding for displaced pets. The on-site Northwest Veterinary Clinic offers wellness appointments and vaccines and treats minor ailments. Community vet clinics may be added — stay tuned. Located at 1535 Rosslyn Rd, Thunder Bay, ON P7E 6W2.",
    contact: "1-888-668-7722",
    link: "https://ontariospca.ca/emergency-response/",
    hours: "During active wildfire response"
  },
  {
    name: "Toronto Humane Society – Animal Transport for Surrenders",
    category: "Transport",
    kind: "offer",
    region: "Toronto",
    description: "Animal transport available to support surrenders. [VERIFY contact details and any eligibility/booking process before publishing.]",
    contact: "",
    link: "",
    hours: ""
  },
  {
    name: "Burlington Animal Shelter – Surrender Intake (Dogs)",
    category: "Temporary shelter",
    kind: "offer",
    region: "Burlington",
    description: "Able to take surrendered dogs: roughly 1–2 large dogs, or 3–4 medium/small dogs. [VERIFY current capacity and contact details before publishing — capacity changes quickly.]",
    contact: "",
    link: "",
    hours: ""
  }
];
