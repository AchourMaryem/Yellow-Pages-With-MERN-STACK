import location1 from "../images/hoteltabarka.png";
import location2 from "../images/hotel5.png";
import location3 from "../images/hotel2.png";
import location4 from "../images/restaurant1.png";
import location5 from "../images/dendiste.png";
import location6 from "../images/pharmacie2.png";
import location7 from "../images/clinique.png";
import location8 from "../images/cafe1.png";
const locations = [
  {
    id: "01",
    name: "Hôtel Thabraca Thalasso & Diving",
    city: "Tabarka",
    address:"BP 204 Route touristique، 8110",
    email: "Thabracathalasso@gmail.com",
    contact: "+216 78 671 540",
    desc: "It is the ideal place for a relaxing holiday, moments of relaxation and tranquility.",
    avgRating: 3.8,
    photo: location1,
    recommended:true,
  },
  {
    id: "02",
    name:"Dr. Oumeima KHLIFI NSAIRIA",
    city: "Tunis",
    address:"15 Avenue Farhat Hached, Kram Ouest, Carthage Salambo, Tunisie, Tunis 2089",
    email: "cabinet.dentiste.tunis@gmail.com",
    contact: " +216 92615315 ",
    desc: "Medecin Dentiste",
    avgRating: 3.6,
    photo: location5,
    recommended:true,

  },
  {
    id: "03",
    name: "Hôtel Royal Azur Thalassa",
    city: "Hammamet",
    address:"Rue Assad Ibn el fourat, Hammamet 8050",
    email: "royalazur@gmail.com",
    contact: "+216 72 278 500",
    desc: "The Royal Azur Thalasso Golf is the perfect establishment for travelers wishing to recharge their batteries during their stay in Hammamet. Renowned for its setting and its proximity to great restaurants and attractions, the Royal Azur Thalasso Golf allows you to take full advantage of the best Hammamet has to offer.",
    avgRating: 4.1,
    photo: location3,
    recommended:true,

  },
  {
    id: "04",
    name: "Restaurant Dar El Jeld",
    city: "Tunis",
    address:"5 – 10 Rue Dar El Jeld 5 – 10 Rue Dar El Jeld, Tunis 1006 Tunisie",
    email: "dareljeld@gmail.com",
    contact: "+216 71 56 09 16",
    desc: "Vegetarian Friendly, Vegan Options, Halal",
    avgRating: 4.5,
    photo: location4,
    recommended:true,

  },
  
  {
    id: "05",
    name: "Pharmacie - Abdelkader Chaouch",
    city: "Tunis",
    address:"79 Av. Hédi Chaker, Tunis 1002",
    email: "abdelkaderchaouch@gmail.com",
    contact: "+216 71 289 806",
    desc: "Our day pharmacy in Tunis offers prescription and over-the-counter medications as well as advice from experienced pharmacists.",
    avgRating: 4.5,
    photo: location6,
    recommended:true,
  },
  {
    id: "06",
    name: "Hôtel Blue Marine & Thalasso",
    city: "Hammamet",
    address:"Yasmine Hammamet 8050",
    email: "bluemarine@gmail.com",   
    contact: "+216 72 240 666",
    desc: "The Hotel Laico Hammamet is the perfect establishment for travelers wishing to relax during their stay in Hammamet. Renowned for its family setting and its proximity to great restaurants and attractions, the Hotel Laico Hammamet allows you to take full advantage of the best Hammamet has to offer.",
    avgRating: 4.7,
    photo: location2,
    recommended:true,

  },
  {
    id: "07",
    name: "La Clinique Méditerranéenne",
    city: "Tunis",
    address:"37 Av. de l'UMA, Tunis",
    email: "cliniquemediterranenne@gmail.com",   
    contact: "+216 70 246 000",
    desc: "The clinic offers a multitude of services in different surgical, obstetrical, medical, intensive care and exploration specialties at reasonable costs and unparalleled quality.",
    avgRating: 3.3,
    photo: location7,
    recommended:true,
  },

  {
    id: "08",
    name: "The First, Coffee & Resto",
    city: "Sousse",
    address:"Avenue Taïeb Mehiri, Sousse Tunisie",
    email: "thefirst@gmail.com",   
    contact: "+216 29 825 000",
    desc: "Cafe, International, Mediterranean, French, European. Vegetarian Friendly, Vegan Options, Halal",
    avgRating: 4.5,
    photo: location8,
    recommended:true,
  }
  
];

export default locations;
