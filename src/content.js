import aristocats from "./assets/aristocats.jpg";
import babyVinny from "./assets/baby-vinny.jpg";
import barn from "./assets/barn.jpg";
import batman from "./assets/batman.jpg";
import belair from "./assets/belair.jpg";
import christopherRobin from "./assets/christopher-robin.jpg";
import churchMural from "./assets/church-mural.jpg";
import coffeeLetter from "./assets/coffee-letter.jpg";
import curtCrystal from "./assets/curt-crystal.jpg";
import deer from "./assets/deer.jpg";
import deerFamily from "./assets/deer-family.jpg";
import elmo from "./assets/elmo.jpg";
import flower2 from "./assets/flower-2.jpg";
import flowers from "./assets/flowers.jpg";
import glowPooh from "./assets/glow-pooh.jpg";
import homePainting from "./assets/home-painting.jpg";
import jessicaCandid from "./assets/jessica-candid.jpg";
import jessicaHeadshot from "./assets/jessica-headshot.jpg";
import lakePainting from "./assets/lake-painting.jpg";
import logoNoText from "./assets/logo.png";
import massEffect from "./assets/mass-effect.jpg";
import poohAndTigger from "./assets/pooh-and-tigger.jpg";
import poohGraduation from "./assets/pooh-graduation.jpg";
import poohQuote from "./assets/pooh-quote.jpg";
import qr from "./assets/qr.png";
import sam from "./assets/sam.jpg";
import seattle from "./assets/seattle.jpg";
import supra from "./assets/supra.jpg";
import tamonAndPumba from "./assets/tamon-and-pumba.jpg";
import tarantino from "./assets/tarantino.jpg";
import woods from "./assets/woods.jpg";
import zebra from "./assets/zebra.jpg";

export const brand = {
  name: "Blooming Bull Studios",
  artist: "Jessica Bull",
  location: "CSRA",
  email: "bloomingbullstudios@gmail.com",
  instagram: "https://www.instagram.com/bloomingbullstudio/",
  facebook: "https://www.facebook.com/profile.php?id=100087532912858",
  etsy: "https://bloomingbullstudios.etsy.com",
  logo: logoNoText,
};

export const images = {
  aristocats,
  babyVinny,
  barn,
  batman,
  belair,
  christopherRobin,
  churchMural,
  coffeeLetter,
  curtCrystal,
  deer,
  deerFamily,
  elmo,
  flower2,
  flowers,
  glowPooh,
  homePainting,
  jessicaCandid,
  jessicaHeadshot,
  lakePainting,
  logo: logoNoText,
  massEffect,
  poohAndTigger,
  poohGraduation,
  poohQuote,
  qr,
  sam,
  seattle,
  supra,
  tamonAndPumba,
  tarantino,
  woods,
  zebra,
};

export const homeFeaturedWorks = [
  { title: "St John UMC Augusta Mural", category: "Mural", image: images.churchMural },
  { title: "St John Lake Property", category: "Commissioned work", image: images.lakePainting },
  { title: "Selected Studio Work", category: "Original artwork", image: images.homePainting },
];

export const galleryWorks = [
  ...homeFeaturedWorks,
  { title: "Aristocats", category: "Character artwork", image: images.aristocats },
  { title: "Baby Vinny", category: "Portrait commission", image: images.babyVinny },
  { title: "Barn", category: "Original artwork", image: images.barn },
  { title: "Batman", category: "Character artwork", image: images.batman },
  { title: "Belair", category: "Vehicle commission", image: images.belair },
  { title: "Christopher Robin", category: "Character artwork", image: images.christopherRobin },
  { title: "Coffee Letter", category: "Lettering", image: images.coffeeLetter },
  { title: "Curt & Crystal", category: "Portrait commission", image: images.curtCrystal },
  { title: "Deer", category: "Wildlife artwork", image: images.deer },
  { title: "Deer Family", category: "Wildlife artwork", image: images.deerFamily },
  { title: "Elmo", category: "Character artwork", image: images.elmo },
  { title: "Flower Study", category: "Floral artwork", image: images.flower2 },
  { title: "Flowers", category: "Floral artwork", image: images.flowers },
  { title: "Glow Pooh", category: "Character artwork", image: images.glowPooh },
  { title: "Mass Effect", category: "Fan artwork", image: images.massEffect },
  { title: "Pooh & Tigger", category: "Character artwork", image: images.poohAndTigger },
  { title: "Pooh Graduation", category: "Commissioned work", image: images.poohGraduation },
  { title: "Pooh Quote", category: "Lettering", image: images.poohQuote },
  { title: "Sam", category: "Portrait commission", image: images.sam },
  { title: "Seattle", category: "Place artwork", image: images.seattle },
  { title: "Supra", category: "Vehicle commission", image: images.supra },
  { title: "Tamon & Pumba", category: "Character artwork", image: images.tamonAndPumba },
  { title: "Tarantino", category: "Portrait artwork", image: images.tarantino },
  { title: "Woods", category: "Landscape artwork", image: images.woods },
  { title: "Zebra", category: "Wildlife artwork", image: images.zebra },
];

export const featuredWorks = homeFeaturedWorks;
