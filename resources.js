// ============================================================
// RESOURCE DATA — edit this file to add, remove, or update help.
// Each resource is one { } block. Copy a block to add another.
// Keep the commas and quote marks exactly as shown.
//
// category options (pick one, spelled exactly):
//   "Pet food"  "Supplies"  "Fostering"  "Transport"
//   "Temporary shelter"  "Animal Intake"  "Veterinary"  "Other"
//
//   Animal Intake = able to take surrendered animals (rehoming).
//   Temporary shelter = boarding/housing while owner is displaced.
//
// kind: "need"  = help for people whose animals need support
//       "offer" = ways to give help / surrender / donate
//
// region: the municipality or county the resource serves.
//   For province-wide help, write "Ontario-wide".
// ============================================================

const RESOURCES = [
  {
    name: "Ontario SPCA and Humane Society",
    category: "Temporary shelter",
    kind: "need",
    region: "Ontario-wide",
    description: "Housing support for evacuees with pets. Airbnb partnership.",
    contact: "For Public: OSPCA hotline: 1-888-668-7722 - press 1 for housing support",
    link: "https://ontariospca.ca/emergency-response/",
    hours: ""
  },
  {
    name: "Ontario SPCA and Humane Society",
    category: "Supplies",
    kind: "need",
    region: "Red Cross Reception Centres, Evacuation Host Sites in Thunder Bay, Sudbury",
    description: "Pet Food and Supplies for Evacuees",
    contact: "Email: EmergencyResponse@ontariospca.ca  Phone: 1-888-ONT-SPCA (668-7722) ext. 991",
    link: "https://ontariospca.ca/emergency-response/",
    hours: ""
  },
  {
    name: "Ontario SPCA and Humane Society",
    category: "Veterinary",
    kind: "need",
    region: "Thunder Bay",
    description: "NorthWest Veterinary Clinic: Wellness and preventative appointments. Treatment of minor ailments.",
    contact: "",
    link: "https://ontariospca.ca/emergency-response/",
    hours: ""
  },
  {
    name: "Ontario SPCA and Humane Society",
    category: "Temporary shelter",
    kind: "need",
    region: "Thunder Bay",
    description: "NorthWest Animal Centre: Emergency Boarding Services",
    contact: "",
    link: "https://ontariospca.ca/emergency-response/",
    hours: ""
  },
  {
    name: "Ontario SPCA and Humane Society",
    category: "Veterinary",
    kind: "need",
    region: "Ontario-wide",
    description: "Telehealth pet line for evacuees and emergency responders — virtual veterinary guidance during the wildfire response.",
    contact: "Phone: 1-888-ONT-SPCA (668-7722) ext. 992",
    link: "https://ontariospca.ca/emergency-response/",
    hours: ""
  },
  {
    name: "Niagara SPCA",
    category: "Other",
    kind: "offer",
    region: "Niagara",
    description: "Offering support for community members arriving in Niagara.",
    contact: "",
    link: "https://niagaraspca.com/",
    hours: ""
  },
  {
    name: "Caledon Animal Services",
    category: "Animal Intake",
    kind: "offer",
    region: "Caledon",
    description: "Available to accept surrendered dogs and cats.",
    contact: "",
    link: "https://www.caledon.ca/en/living-here/animal-services.aspx",
    hours: ""
  },
  {
    name: "Caledon Animal Services",
    category: "Pet food",
    kind: "offer",
    region: "Caledon",
    description: "Can offer pet food and supplies.",
    contact: "",
    link: "https://www.caledon.ca/en/living-here/animal-services.aspx",
    hours: ""
  },
  {
    name: "Windsor Humane Society",
    category: "Animal Intake",
    kind: "offer",
    region: "Windsor",
    description: "Available to accept surrendered dogs.",
    contact: "",
    link: "https://windsorhumane.org/",
    hours: ""
  },
  {
    name: "Ninth Life Cat Rescue",
    category: "Animal Intake",
    kind: "offer",
    region: "West GTA",
    description: "Available to accept cats.",
    contact: "info@ninthlifecatrescue.org",
    link: "https://ninthlifecatrescue.org/",
    hours: ""
  },
  {
    name: "Humane Society London and Middlesex",
    category: "Animal Intake",
    kind: "offer",
    region: "London",
    description: "Available to acccept dogs, cats, rabbits, guinea pigs, small rodents.",
    contact: "",
    link: "https://www.hslm.ca/",
    hours: ""
  },
  {
    name: "Pawsitively Forever",
    category: "Animal Intake",
    kind: "offer",
    region: "Woodstock",
    description: "Foster-based dog rescue able to take surrendered dogs. Volunteer-run; give as much notice as possible.",
    contact: "",
    link: "https://www.pawsitivelyfurever.ca/",
    hours: ""
  },
  {
    name: "Paws United Dog Rescue",
    category: "Animal Intake",
    kind: "offer",
    region: "London",
    description: "Volunteer-run, foster-based dog rescue able to take surrendered dogs across the London and Strathroy area.",
    contact: "",
    link: "https://www.paws-united.com/",
    hours: ""
  },
  {
    name: "MUTTS Dog Rescue",
    category: "Animal Intake",
    kind: "offer",
    region: "Ontario-wide",
    description: "Dog rescue able to take surrendered dogs. Contact ahead to check current foster availability.",
    contact: "",
    link: "https://www.muttsdogrescue.ca/",
    hours: ""
  },
  {
    name: "Kingston Humane Society",
    category: "Animal Intake",
    kind: "offer",
    region: "Kingston",
    description: "Open-admission shelter able to accept surrendered dogs and cats from Kingston and surrounding municipalities.",
    contact: "",
    link: "https://kingstonhumanesociety.ca/",
    hours: ""
  },
  {
    name: "Kingston Humane Society",
    category: "Supplies",
    kind: "offer",
    region: "Kingston",
    description: "Able to donate dog kennels, leashers, collars, bowls",
    contact: "",
    link: "https://kingstonhumanesociety.ca/",
    hours: ""
  },
  {
    name: "Save Our Scruff",
    category: "Animal Intake",
    kind: "offer",
    region: "Toronto",
    description: "Foster-based rescue able to take surrendered dogs and cats in the Toronto area.",
    contact: "",
    link: "https://www.saveourscruff.org/",
    hours: ""
  },
  {
    name: "Save Our Scruff",
    category: "Supplies",
    kind: "offer",
    region: "Toronto",
    description: "Able to help with pet supplies for animals in their care and, where possible, for people in need.",
    contact: "",
    link: "https://www.saveourscruff.org/",
    hours: ""
  },
  {
    name: "Save Our Scruff",
    category: "Pet food",
    kind: "offer",
    region: "Toronto",
    description: "Able to help with pet food for animals in their care and, where possible, for people in need.",
    contact: "",
    link: "https://www.saveourscruff.org/",
    hours: ""
  },
  {
    name: "Humane Society of Kitchener-Waterloo",
    category: "Animal Intake",
    kind: "offer",
    region: "Kitchener-Waterloo",
    description: "Able to accept surrendered animals at the Kitchener-Waterloo animal centre. Call ahead to confirm space.",
    contact: "",
    link: "https://kwsphumane.ca/",
    hours: ""
  },
  {
    name: "Toronto Humane Society",
    category: "Transport",
    kind: "offer",
    region: "Toronto",
    description: "Animal transport for rehoming",
    contact: "",
    link: "https://www.torontohumanesociety.com/",
    hours: ""
  },
  {
    name: "Toronto Humane Society",
    category: "Supplies",
    kind: "offer",
    region: "Toronto",
    description: "Donation and supply hub — collecting and distributing pet supplies for animals and families in need.",
    contact: "",
    link: "https://www.torontohumanesociety.com/",
    hours: ""
  },
  {
    name: "Humane Society of Oakville, Milton & Halton",
    category: "Animal Intake",
    kind: "offer",
    region: "Oakville, Milton, Halton Region",
    description: "Able to accept surrendered dogs, cats, and small animals across the Oakville, Milton, and Halton region.",
    contact: "",
    link: "https://hsomh.ca/",
    hours: ""
  },
  {
    name: "Ottawa Humane Society",
    category: "Animal Intake",
    kind: "offer",
    region: "Ottawa",
    description: "Dogs and cats. Small animals",
    contact: "",
    link: "https://www.ottawahumane.ca/",
    hours: ""
  },
  {
    name: "Burlington Animal Shelter",
    category: "Animal Intake",
    kind: "offer",
    region: "Burlington",
    description: "Able to take surrendered 1-2 large dogs or 3-4 med/small dogs. Also able to take 3-4 cats in addition to the dogs.",
    contact: "",
    link: "https://www.burlington.ca/en/live-and-play/animal-shelter.aspx",
    hours: ""
  },
  {
    name: "Burlington Animal Shelter",
    category: "Supplies",
    kind: "offer",
    region: "Burlington",
    description: "Able to donate some kennels/crates/bowls/leashes/collars",
    contact: "",
    link: "https://www.burlington.ca/en/live-and-play/animal-shelter.aspx",
    hours: ""
  },
];
