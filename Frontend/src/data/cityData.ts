
export interface City {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
}
export const cities: City[] = [
  {
    id : 1,
    name: "Nashik",
    description: "A city known for vineyards, temples, and peaceful ghats.",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-image-of-Places-To-Visit-In-Nashik_7th-jan.jpg",
    rating: 4.5
    
  },
  {
    id: 2,
    name: "Pune",
    description: "A vibrant cultural and educational hub of Maharashtra.",
    image: "https://i.ytimg.com/vi/F-PWkKt2mUU/maxresdefault.jpg",
    rating: 4.7
  },
  {
    id: 3,
    name: "Mumbai",
    description: "The bustling financial capital with beaches, nightlife, and heritage spots.",
    image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Sambhaji Nagar",
    description: "Home to Ajanta-Ellora caves and rich Mughal-era history.",
    image: "https://indiantraveller.org/wp-content/uploads/2022/07/CH.-SAMBHAJINAGAR-CITY-CAVES-1024x536.jpg",
    rating: 4.4
  },
  {
    id: 5,
    name: "Nagpur",
    description: "The winter capital known for oranges and zero milestone.",
    image: "https://content3.jdmagicbox.com/comp/nagpur/g6/0712px712.x712.000120216488.w2g6/catalogue/nagpur-flying-club-civil-lines-nagpur-flying-clubs-2rui0yy.jpg",
    rating: 4.5
  },
  {
    id: 6,
    name: "Mahabaleshwar",
    description: "A serene hill station with viewpoints, strawberries, and waterfalls.",
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2022/10/fun-things-to-do-in-mahabaleshwar-during-a-24-hour-visit.jpg",
    rating: 4.6
  },
];
