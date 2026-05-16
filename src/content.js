import jessica from "./assets/jessica-headshot.jpg";
import muralImage from "./assets/church-mural.jpg";
import lakeImage from "./assets/lake-painting.jpg";
import jessicaPaint from "./assets/jessica-candid.jpg";
import logoNoText from "./assets/logo.png";
import homePainting from "./assets/home-painting.jpg";

export const brand = {
  name: "Blooming Bull Studios",
  artist: "Jessica Bull",
  location: "CSRA",
  email: "bloomingbullstudios@gmail.com",
  instagram: "https://www.instagram.com/bloomingbullstudio/",
  facebook: "https://www.facebook.com/profile.php?id=100087532912858",
  etsy: "https://bloomingbullstudios.etsy.com",
  logo: logoNoText
};

export const images = {
  hero: jessica,
  mural: muralImage,
  lake: lakeImage,
  about: jessicaPaint,
  gallery: homePainting
};

export const featuredWorks = [
  { title: "St John UMC Augusta Mural", category: "Mural", image: images.mural },
  { title: "St John Lake Property", category: "Commissioned work", image: images.lake },
  { title: "Selected Studio Work", category: "Original artwork", image: images.gallery },
];
