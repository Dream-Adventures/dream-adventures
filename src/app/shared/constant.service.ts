import { Injectable } from '@angular/core';
import { Places } from '../models/places';

@Injectable({
  providedIn: 'root'
})


export class ConstantService {
  places:Places[]  = [
    {
      key: "bangalore",
      place : "Bangalore",
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
      image : "/assets/gotours/imgs/city/mysore.jpg",
      description : "Nestled in the heart of Karnataka, Mysore is a city that exudes royal grandeur, rich heritage, and a timeless charm. With Dream Adventures Services as your travel companion, your journey to Mysore promises a seamless blend of regal palaces, cultural immersion, and traditional craftsmanship.",
      description1 : "Mysore Palace: Royal Splendor Begin your exploration at the Mysore Palace, a magnificent royal residence that dazzles with its Indo-Saracenic architecture, intricate artwork, and opulent interiors.",
      description2 : "Chamundi Hill: Spiritual Ascent Visit Chamundi Hill and its sacred temple dedicated to Goddess Chamundeshwari. The climb offers panoramic views of Mysore and its surrounding landscape.",
      description3 : "Silk and Crafts: Artistic Treasures Explore Mysore’s bustling markets known for exquisite silk sarees, sandalwood products, and traditional handicrafts. Witness the city’s artistic heritage.",
      withus : "At Dream Adventures Services, we understand the regal allure of Mysore and its cultural richness. Our experienced travel specialists craft personalized itineraries that ensure your Mysore journey is filled with historical insights, spiritual experiences, and artistic discoveries. Whether you’re a history enthusiast, a spiritual seeker, or an art lover, we tailor your experience to match your passions.",
    },
  ];

  getPlaceByKey(key: string): Places | null {
    const place = this.places.find(place => place.key === key);
    return place ? place : null;
  }
  
  
  
  


  constructor() { }
}
