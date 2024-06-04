import { Injectable } from '@angular/core';
import { Places } from '../models/places';

@Injectable({
  providedIn: 'root'
})


export class ConstantService {
  directWaLink = "https://web.whatsapp.com/send?phone=+";
  whatslink = "https://wa.me/";
  whatsapp = "918553083172";

  getEncodedUrl(message: string) {
    return encodeURIComponent(message);
  }

  whatsappBook(place: string) {
    const book = "I would like to book my travel to ";
    if (this.isMobile()) {
      return this.whatslink + this.whatsapp + "?text=" + this.getEncodedUrl(book) + place;
    } else {
      return this.directWaLink + this.whatsapp + "&text=" + this.getEncodedUrl(book) + place;
    }
  }

  whatsappCallBack(place: string) {
    const call = "Please call me back. I have some questions regarding my travel plans to ";
    if (this.isMobile()) {
      return this.whatslink + this.whatsapp + "?text=" + this.getEncodedUrl(call) + place;
    } else {
      return this.directWaLink + this.whatsapp + "&text=" + this.getEncodedUrl(call) + place;
    }
  }

  whatsappBookNow() {
    const call = "I would like to book my travel";
    if (this.isMobile()) {
      return this.whatslink + this.whatsapp + "?text=" + this.getEncodedUrl(call);
    } else {
      return this.directWaLink + this.whatsapp + "&text=" + this.getEncodedUrl(call);
    }
  }

  isMobile() : boolean {
    return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  places:Places[]  = [
    {
      key: "bangalore",
      place : "Bangalore",
      country : "Bangalore, Karnataka, India",
      image : "/assets/gotours/imgs/city/bangalore.jpg",
      description : "Nestled in the heart of Karnataka, Bangalore, also known as Bengaluru, is a city of contrasts, blending technological prowess with cultural richness. With Dream Adventures Services as your travel companion, your journey to Bangalore promises a seamless blend of innovation, history, and artistic exploration.",
      description1 : "Cubbon Park: Green Oasis Begin your exploration at Cubbon Park, a lush green oasis in the city center. The park offers serene walking trails, landscaped gardens, and a respite from urban life.",
      description2 : "Lalbagh Botanical Garden: Horticultural Haven Visit Lalbagh Botanical Garden, home to a stunning collection of exotic plants and a glasshouse inspired by London’s Crystal Palace.",
      description3 : "Vidhana Soudha: Architectural Marvel Explore Vidhana Soudha, the seat of Karnataka’s legislature and a prime example of Neo-Dravidian architecture. Its grandeur is captivating.",
      withus : "At Dream Adventures Services, we understand the dynamic spirit of Bangalore and its diverse cultural heritage. Our experienced travel specialists craft personalized itineraries that ensure your Bangalore journey is filled with tech insights, cultural experiences, and artistic exploration. Whether you’re a tech enthusiast, a history buff, or an art lover, we tailor your experience to match your passions.",
    },
    {
      key: "hyderabad",
      place : "Hyderabad",
      country : "Hyderabad, Andhra, India",
      image : "/assets/gotours/imgs/city/hyderabad.jpg",
      description : "Nestled in the heart of Telangana, Hyderabad is a city of mesmerizing contrasts, blending its rich Nizami heritage with cutting-edge technology. With Dream Adventures Services as your travel companion, your journey to Hyderabad promises a seamless blend of history, innovation, and culinary delights.",
      description1 : "Charminar: Icon of Hyderabad Begin your exploration at the iconic Charminar, a centuries-old monument that stands as a symbol of the city. Climb to the top for panoramic views of the bustling streets.",
      description2 : "Golconda Fort: Majestic Citadel Visit Golconda Fort, a historic citadel known for its acoustics and grandeur. Explore the fort’s impressive architecture and learn about its history.",
      description3 : "Hyderabadi Cuisine: Culinary Delights Indulge in the flavors of Hyderabadi cuisine. Savor biryani, haleem, and kebabs at local eateries and experience the city’s rich culinary heritage.",
      withus : "At Dream Adventures Services, we understand the allure of Hyderabad’s Nizami splendor and its contributions to the tech world. Our experienced travel specialists craft personalized itineraries that ensure your Hyderabad journey is filled with historical insights, technological marvels, and gastronomic delights. Whether you’re a history enthusiast, a tech geek, or a food connoisseur, we tailor your experience to match your passions.",
    },
    {
      key: "mysore",
      place : "Mysore",
      country : "Mysore, Karnataka, India",
      image : "/assets/gotours/imgs/city/mysore.jpg",
      description : "Nestled in the heart of Karnataka, Mysore is a city that exudes royal grandeur, rich heritage, and a timeless charm. With Dream Adventures Services as your travel companion, your journey to Mysore promises a seamless blend of regal palaces, cultural immersion, and traditional craftsmanship.",
      description1 : "Mysore Palace: Royal Splendor Begin your exploration at the Mysore Palace, a magnificent royal residence that dazzles with its Indo-Saracenic architecture, intricate artwork, and opulent interiors.",
      description2 : "Chamundi Hill: Spiritual Ascent Visit Chamundi Hill and its sacred temple dedicated to Goddess Chamundeshwari. The climb offers panoramic views of Mysore and its surrounding landscape.",
      description3 : "Silk and Crafts: Artistic Treasures Explore Mysore’s bustling markets known for exquisite silk sarees, sandalwood products, and traditional handicrafts. Witness the city’s artistic heritage.",
      withus : "At Dream Adventures Services, we understand the regal allure of Mysore and its cultural richness. Our experienced travel specialists craft personalized itineraries that ensure your Mysore journey is filled with historical insights, spiritual experiences, and artistic discoveries. Whether you’re a history enthusiast, a spiritual seeker, or an art lover, we tailor your experience to match your passions.",
    },
    {
      key : "dubai",
      place : "Dubai",
      country : "Dubai, UAE",
      image : "/assets/gotours/imgs/city/dubai.jpg",
      description : "Nestled on the shores of the Arabian Gulf, Dubai is a dazzling city that seamlessly blends futuristic architecture, luxurious living, and the timeless beauty of the desert. With Dream Adventures Services as your travel companion, your journey to Dubai promises an extravagant mix of skyscrapers, golden sands, and cultural richness.",
      description1 : "Burj Khalifa: Touch the Sky Begin your exploration at the Burj Khalifa, the world’s tallest building. Take an elevator ride to the observation deck for panoramic views of the city.",
      description2 : "Desert Safari: Sand Dunes and Starlit Nights Experience the magic of the desert with a desert safari. Ride over sand dunes, savor a traditional Bedouin meal, and witness the starlit beauty of the desert night.",
      description3 : "Dubai Mall: Retail Wonderland Visit the Dubai Mall, a shopper’s paradise with luxury boutiques, an indoor ice rink, and the mesmerizing Dubai Fountain show.",
      withus : "At Dream Adventures Services, we understand the allure of Dubai’s modern marvels and desert allure. Our expert travel planners craft tailor-made itineraries to ensure your Dubai journey is filled with architectural wonders, desert adventures, and cultural encounters. Whether you’re a shopper, an adventurer, or a lover of luxury, we curate experiences that match your desires.",
    },
    {
      key : "london",
      place : "London",
      country : "London, UK",
      image : "/assets/gotours/imgs/city/london.jpg",
      description : "Nestled on the banks of the River Thames, London is a city that seamlessly blends centuries-old tradition with modern vibrancy. With Dream Adventures Services as your travel companion, your journey to London promises an exciting mix of historic landmarks, cultural diversity, and contemporary excitement.",
      description1 : "The British Museum: Timeless Treasures Begin your exploration at The British Museum, home to a vast collection of art and artifacts from around the world, including the Rosetta Stone and the Elgin Marbles.",
      description2 : "Westminster Abbey: Royal Heritage Visit Westminster Abbey, where British monarchs have been crowned and historic events celebrated. Marvel at its stunning Gothic architecture.",
      description3 : "West End Theatres: Theatrical Excellence Experience the magic of London’s West End theaters. Attend a world-class play or musical in the theater district.",
      withus : "At Dream Adventures Services, we understand the allure of London’s historical treasures and contemporary energy. Our expert travel planners craft tailor-made itineraries to ensure your London journey is filled with cultural enrichment, royal heritage, and cosmopolitan experiences. Whether you’re a history buff, a theater enthusiast, or a foodie, we curate experiences that match your desires.",
    },
    {
      key : "malaysia",
      place : "Malaysia",
      country : "Malaysia",
      image : "/assets/gotours/imgs/city/malaysia.jpg",
      description : "Located in Southeast Asia, Malaysia is a nation that boasts stunning natural landscapes, a rich tapestry of cultures, and vibrant modern cities. With Dream Adventures Services as your travel guide, your journey to Malaysia promises an enriching blend of tropical adventures, cultural exploration, and culinary delights.",
      description1 : "Kuala Lumpur: Urban Elegance Begin your exploration in Kuala Lumpur, Malaysia’s capital, and visit the iconic Petronas Twin Towers, explore Batu Caves, and stroll through the bustling streets of Chinatown.",
      description2 : "Langkawi: Island Paradise Visit Langkawi, a tropical paradise of pristine beaches and lush rainforests. Experience the Langkawi Sky Bridge and take a boat tour of the mangroves.",
      description3 : "Penang: Culinary Haven Explore Penang, known as the food capital of Malaysia. Savor delicious street food, visit George Town’s historic streets, and discover vibrant street art.",
      withus : "At Dream Adventures Services, we understand the allure of Malaysia’s natural beauty and cultural diversity. Our expert travel planners craft tailor-made itineraries to ensure your Malaysian journey is filled with natural wonders, cultural encounters, and gastronomic delights. Whether you’re an adventurer, a culture enthusiast, or a food connoisseur, we curate experiences that match your desires.",
    },
    {
      key : "paris",
      place : "Paris",
      country : "Paris, France",
      image : "/assets/gotours/imgs/city/paris.jpg",
      description : "Nestled in the heart of France, Paris is a city that epitomizes romance, art, and timeless elegance. With Dream Adventures Services as your travel guide, your journey to Paris promises a captivating blend of iconic landmarks, artistic treasures, and gourmet delights.",
      description1 : "Eiffel Tower: Iconic Landmark Begin your exploration at the Eiffel Tower, where you can ascend to the top for breathtaking views of the city and the Seine River.",
      description2 : "Louvre Museum: Artistic Marvels Explore the Louvre Museum, home to masterpieces like the Mona Lisa, the Venus de Milo, and the Winged Victory of Samothrace.",
      description3 : "Montmartre: Bohemian Spirit Visit Montmartre, the historic artistic neighborhood, and discover the charming streets, the Basilica of the Sacré-Cœur, and the Moulin Rouge cabaret.",
      withus : "At Dream Adventures Services, we understand the allure of Paris’s romantic ambiance and artistic heritage. Our expert travel planners craft tailor-made itineraries to ensure your Parisian journey is filled with cultural enrichment, romantic moments, and gourmet experiences. Whether you’re a lover of art, a hopeless romantic, or a culinary enthusiast, we curate experiences that match your desires.",
    },
  ];

  getPlaceByKey(key: string): Places | null {
    const place = this.places.find(place => place.key === key);
    return place ? place : null;
  }
  
  
  
  


  constructor() { }
}
