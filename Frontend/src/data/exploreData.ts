interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  address?: string;
  price?: string;
}

export interface CityInfo {
  hotels: Place[];
  places: Place[];
  restaurants: Place[];
  transportation: {
    id: number;
    type: string;
    description: string;
    image: string;
    price?: string;
  }[];
}

export const cityInfo: Record<number, CityInfo> = {
  1: {  // Nashik
    hotels: [
      { id: 1, name: "The Gateway Hotel Ambad Nashik", description: "Set in a scenic area with lush gardens, offering modern amenities and a pool.", image: "https://cdn.logitravel.pt/wsimgresize/resize/830/650/s3-eu-west-1.amazonaws.com/logs3euw1cdn/cloudcontent/fotos/agregadorHotelero/0009/37136/937136/54.jpg?f=15827410", rating: 4.5, price: "$$$" },
      { id: 2, name: "Ibis Nashik", description: "Budget hotel with contemporary rooms, a restaurant, and a 24-hour front desk.", image: "https://pix10.agoda.net/hotelImages/399/399930/399930_16060918200043352098.jpg?s=1024x768", rating: 4.1, price: "$$" },
      { id: 3, name: "Hotel Express Inn", description: "Stylish hotel with fine dining and spa near Pandavleni caves.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/8d/86/35/express-inn-elevation.jpg?w=1800&h=1000&s=1", rating: 4.4, price: "$$$" },
      { id: 4, name: "Hotel Panchavati Yatri", description: "Popular stay for families and groups with local cuisine.", image: "https://content.skyscnr.com/available/2040916767/2040916767_WxH.jpg", rating: 4.2, price: "$$" },
      { id: 5, name: "Meuse Jupiter Business and Luxury Hotel", description: "Business-class hotel with premium amenities.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_3Ke08yQM8bi-DqGRtS3CKJTKwx29--kvg&s meuse Jupiter business", rating: 4.0, price: "$$$" },
      { id: 6, name: "The Source at Sula", description: "Boutique vineyard resort offering serene wine-country experience.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FGc2sxj-NJKKoj1NNdw8HhJWAtGNHMSJLQ&s the source at sula", rating: 4.7, price: "$$$" }
    ],
    places: [
      { id: 101, name: "Sula Vineyards", description: "Famous vineyard offering wine tours and tastings in a beautiful setting.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPN6N4dLn3swf3twUDX7KUYykg5L1n5V3qZg&s sula vineyards", rating: 4.6 },
      { id: 102, name: "Trimbakeshwar Temple", description: "Ancient Hindu temple dedicated to Lord Shiva, part of the twelve Jyotirlingas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6h2c8aNp-s9Y0dXQ6PouPaxlkpK_YJ0dIA&s triambakeshwar temple", rating: 4.8 },
      { id: 103, name: "Pandav Leni", description: "Historic Buddhist caves with carvings and sculptures.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFOGNGIeYD5T17LGORzZ5lngsuzDkN19vrQ&s pandav leni", rating: 4.5 },
      { id: 104, name: "Anjneri Hills", description: "Trekking destination said to be Lord Hanuman’s birthplace.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtam-wiEPBJBT3mpPb1bQAiM3KDvaKf_EjAw&s anjaneri hills", rating: 4.4 },
      { id: 105, name: "Ramkund", description: "Sacred tank on the Godavari river, used for rituals and ceremonies.", image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-ramkund-nashik-maharashtra-attr-hero?qlt=82&ts=1726669916498 ramkund", rating: 4.3 },
      { id: 106, name: "Gangapur Dam", description: "Scenic spot offering boating and sunset views.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/b2/95/34/gangapur-dam.jpg?w=900&h=500&s=1", rating: 4.2 }
    ],
    restaurants: [
      { id: 201, name: "Barbeque Nation", description: "Popular buffet-style restaurant offering live grills and a variety of dishes.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJerbFleDspF39V347aE_8V6kGqg5rVN2oXw&s ", rating: 4.3, price: "$$" },
      { id: 202, name: "Hotel Panchavati Gaurav", description: "Renowned for authentic Maharashtrian thalis and traditional ambiance.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/38/5e/36/photo0jpg.jpg?w=900&h=500&s=1 ", rating: 4.4, price: "$" },
      { id: 203, name: "Curry Leaves", description: "Casual eatery offering multi-cuisine meals and biryanis.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-PGQ4liXaib-MokJy5knNaJQUEUY2oo_fw&s ", rating: 4.2, price: "$$" },
      { id: 204, name: "Eastern Spice", description: "Known for Chinese and North Indian dishes with a spicy twist.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvON4E5CyWJiQkMA8HCGJjqJljTiatlrMaIQ&s eastern spice", rating: 4.1, price: "$" },
      { id: 205, name: "Divine Wok", description: "Upscale Pan-Asian restaurant in the heart of Nashik.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-hfpmT8Ez61oJGj0IaE4HHxDzjRf_4jdKg&s divine work", rating: 4.5, price: "$$$" },
      { id: 206, name: "Panchratna Restaurant", description: "Budget-friendly family restaurant offering Indian meals.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnU8kEwEp2GfmAbFwzzSvcDQgt3m22zgzMg&s pancharatna", rating: 4.0, price: "$" }
    ],
    transportation: [
      { id: 301, type: "Bus", description: "City buses running across major routes within Nashik.", image: "https://images.unsplash.com/photo-1616401784546-5be9b8b65cf3", price: "$" },
      { id: 302, type: "Auto Rickshaw", description: "Convenient mode of local transport available at every corner.", image: "https://images.unsplash.com/photo-1584697964152-f94aa4b693b3", price: "$" },
      { id: 303, type: "Taxi Services", description: "Private and app-based taxi services are easily accessible.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", price: "$$" },
      { id: 304, type: "Two-Wheeler Rentals", description: "Available for tourists who prefer exploring on bikes.", image: "https://images.unsplash.com/photo-1584270354949-d3bdc77d7b8b", price: "$" },
      { id: 305, type: "Train", description: "Railway station connects Nashik to major Indian cities.", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", price: "$" },
      { id: 306, type: "Tour Buses", description: "Private tour buses available for sightseeing.", image: "https://images.unsplash.com/photo-1615485851378-c93ac9849a5c", price: "$$" }
    ]
  },
  
  2: { // Pune
    hotels: [
      {
        id: 1,
        name: "JW Marriott Hotel Pune",
        description: "Luxury hotel offering upscale rooms, dining, and a rooftop bar.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbVHzDnGz_qPt6D_wLP_j15ojZKYw_IXgxg&s jw marriot pune",
        rating: 4.7,
        price: "$$$"
      },
      {
        id: 2,
        name: "The O Hotel",
        description: "Modern hotel with stylish decor and rooftop dining.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENNJ8Ucfm0e0lzvfLhT9DXqqwHGh0zfhycA&s the O hotel",
        rating: 4.3,
        price: "$$$"
      },
      {
        id: 3,
        name: "Hotel Shreyas",
        description: "Renowned for its authentic Maharashtrian food and comfortable stay.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSF68RjHdfTVvO2jGGG_E3dd_xuTD6iJCQA&s hotel Shreyas",
        rating: 4.2,
        price: "$$"
      },
      {
        id: 4,
        name: "Treebo Trend Bhagyashree Executive",
        description: "Budget-friendly hotel with good amenities and service.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402400353.jpg?k=64195f9400bd292b27f8f711d9b25b6a909c8ccc11f3ba5a88321289013d9159&o=&hp=1 treebo trend",
        rating: 4.0,
        price: "$"
      },
      {
        id: 5,
        name: "Blue Diamond - IHCL SeleQtions",
        description: "Upscale hotel with elegant rooms and multiple dining options.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyMkE6Sp1gm2UdLBrllTXMC3JmXWWaKvWIg&s blue diamond pune",
        rating: 4.4,
        price: "$$$"
      },
      {
        id: 6,
        name: "Hotel Sapna",
        description: "Simple yet comfortable hotel with proximity to key city spots.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVMpOOGUvHLZ4hy2hM7tyq5hwsZpSEB3Zog&s hotel sapna pune",
        rating: 4.1,
        price: "$$"
      }
    ],
    places: [
      {
        id: 101,
        name: "Shaniwar Wada",
        description: "Historic fortification and palace of the Peshwas of the Maratha Empire.",
        image: "https://i.pinimg.com/736x/00/20/f4/0020f4e245d76730d68e169947d412b4.jpg ",
        rating: 4.5
      },
      {
        id: 102,
        name: "Aga Khan Palace",
        description: "Important historical landmark closely linked with Mahatma Gandhi.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrd2ldD4r2VPIN6AFI4WzPrAlzu6-uQtXFQw&s",
        rating: 4.6
      },
      {
        id: 103,
        name: "Sinhagad Fort",
        description: "Scenic fort offering panoramic views and historical ruins.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVpqDlrzPwSrTsUVHSxBO5jP4JoR3Y-J8Kg&s sinhagad fort",
        rating: 4.7
      },
      {
        id: 104,
        name: "Pataleshwar Cave Temple",
        description: "Rock-cut 8th-century temple dedicated to Lord Shiva.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoO-EEPPW_xpK-qi6CeWRzZlr_epZApKmDg&s pataleshwar cave temple",
        rating: 4.3
      },
      {
        id: 105,
        name: "Rajiv Gandhi Zoological Park",
        description: "Well-maintained zoo with a variety of animals and greenery.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkv_4HzgtoPndpSgL0QUPE9Z8bdTpWKX530Q&s Rajiv Gandhi zoological park",
        rating: 4.4
      },
      {
        id: 106,
        name: "Parvati Hill",
        description: "Hillock with temples and panoramic views of the city.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxg5fi04LKFAKoep-g-R6tzzPzGB2-Lu0Pjg&s Parvati hills",
        rating: 4.5
      }
    ],
    restaurants: [
      {
        id: 201,
        name: "Vaishali",
        description: "Iconic vegetarian restaurant famous for South Indian dishes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bYF0xfpgyp54nYskqZDDR5Ams6__oqjpAQ&s ",
        rating: 4.6,
        price: "$"
      },
      {
        id: 202,
        name: "German Bakery",
        description: "Trendy cafe with continental food, desserts, and relaxed vibe.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f5/ae/35/outdoor-seating.jpg?w=900&h=500&s=1",
        rating: 4.3,
        price: "$$"
      },
      {
        id: 203,
        name: "Malaka Spice",
        description: "South East Asian cuisine in a vibrant, artsy environment.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiUVi_W97L8fpZOKOsY663Y0jtVNNQ1AL7w&s",
        rating: 4.4,
        price: "$$$"
      },
      {
        id: 204,
        name: "Shabree",
        description: "Known for traditional Maharashtrian thali.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XNhJ14KnADjyxQznys0iYteufyjLISRZ_w&s",
        rating: 4.5,
        price: "$$"
      },
      {
        id: 205,
        name: "The Bounty Sizzlers",
        description: "Specializes in sizzlers with Indian and continental twists.",
        image: "https://lh3.googleusercontent.com/Dw0ePMhM1GqUG_OmuuPYl5R5xqqZ6Kyk9RmNgCHsOhiqQ8lDxUpJ2g-MeMyqiWVSdZOzDtM8NbV7-PYQ6wXXpKTFZEES=w300-rw",
        rating: 4.2,
        price: "$$"
      },
      {
        id: 206,
        name: "Le Plaisir",
        description: "Cozy European-style bistro known for pastries and gourmet meals.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlz_CgBxAOSk8slKiqMzlUfUhz320rwyNkA&s",
        rating: 4.6,
        price: "$$$"
      }
    ],
    transportation: [
      {
        id: 301,
        type: "PMPML Bus",
        description: "City-operated buses connecting most areas of Pune.",
        image: "https://images.unsplash.com/photo-1622204761183-23484b7e5c5e",
        price: "$"
      },
      {
        id: 302,
        type: "Auto Rickshaw",
        description: "Available throughout the city for convenient travel.",
        image: "https://images.unsplash.com/photo-1591621584034-d9f7fc8b58a9",
        price: "$"
      },
      {
        id: 303,
        type: "Metro",
        description: "Newly developed metro lines connecting major points.",
        image: "https://images.unsplash.com/photo-1630401233282-4c7e508c1624",
        price: "$$"
      },
      {
        id: 304,
        type: "Cab Services",
        description: "Private cabs and app-based services like Uber and Ola.",
        image: "https://images.unsplash.com/photo-1601152016637-b6a81d84b373",
        price: "$$$"
      },
      {
        id: 305,
        type: "Cycle Sharing",
        description: "Public cycle sharing systems in several neighborhoods.",
        image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        price: "$"
      },
      {
        id: 306,
        type: "Train",
        description: "Railway connections to other cities and nearby towns.",
        image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
        price: "$$"
      }
    ]
  },

  3: { // Mumbai
    hotels: [
      {
        id: 1,
        name: "The Taj Mahal Palace",
        description: "Iconic luxury hotel with sea views, historic charm, and top-tier amenities.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcnpTa6oOP7bsOqpLRwnwn-OQdkBpViHxlQ&s",
        rating: 4.8,
        price: "$$$"
      },
      {
        id: 2,
        name: "Trident Nariman Point",
        description: "Seafront hotel offering elegant rooms and business-friendly services.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikd60oqMGbL3rOYADYNAD0NYLUBwPDKmytw&s",
        rating: 4.6,
        price: "$$$"
      },
      {
        id: 3,
        name: "The St. Regis Mumbai",
        description: "Upscale property with a rooftop bar, fine dining, and modern luxury.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWZNuGao8rAkIR7yllejTdIV_ZoeyddMuUg&s",
        rating: 4.7,
        price: "$$$"
      },
      {
        id: 4,
        name: "ITC Maratha",
        description: "Lavish hotel near the airport with heritage interiors and world-class cuisine.",
        image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmaratha-mumbai/images/overview-landing-page/overview/desktop/exteior.png",
        rating: 4.5,
        price: "$$$"
      },
      {
        id: 5,
        name: "Hotel Suba Palace",
        description: "Mid-range hotel located near Gateway of India with modern amenities.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZi3bWfNXE7IHDg0mslzDC5WGZj6Ts98E3A&s",
        rating: 4.2,
        price: "$$"
      },
      {
        id: 6,
        name: "Bawa International",
        description: "Budget-friendly hotel with comfortable rooms and proximity to airport.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHYIm3wNVg8Ogs6Fz3_dZjggRrAg-R637BQ&s",
        rating: 4.0,
        price: "$"
      }
    ],
    places: [
      {
        id: 101,
        name: "Gateway of India",
        description: "Historic arch monument overlooking the Arabian Sea, a major landmark.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczHSPwJFuMV-K9uBQ-Qg5Q2W3uM2nAfSKKg&s gateway of imdia",
        rating: 4.6
      },
      {
        id: 102,
        name: "Marine Drive",
        description: "Scenic boulevard known as the 'Queen's Necklace', perfect for walks.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWN0CaGjeYY3l2lNGynUYBayqyNdJFD1mBrw&s marine drive",
        rating: 4.7
      },
      {
        id: 103,
        name: "Elephanta Caves",
        description: "UNESCO World Heritage rock-cut cave temples on Elephanta Island.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uGYUp5E4kjIzTwe6UgmpUvXUusxrHsiqHA&s elephanta caves",
        rating: 4.4
      },
      {
        id: 104,
        name: "Chhatrapati Shivaji Maharaj Terminus",
        description: "Stunning colonial-era railway station and UNESCO heritage site.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffRJsvLq2yau1zyf1LB4OxspurVVyH3KOfg&s csmt",
        rating: 4.6
      },
      {
        id: 105,
        name: "Juhu Beach",
        description: "Popular beach offering food stalls, sunsets, and weekend crowd buzz.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHleI2JH1OUrSzpj9HjCrobkKidzrH6Zlyw&s juhu beach",
        rating: 4.2
      },
      {
        id: 106,
        name: "Sanjay Gandhi National Park",
        description: "Large forest park with nature trails, caves, and tiger safari.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8h3kT3SZpRx9Ran7V_b7yq5A2PzYgwRV2ow&s",
        rating: 4.5
      }
    ],
    restaurants: [
      {
        id: 201,
        name: "Leopold Café",
        description: "Historic café serving global cuisine, popular among tourists.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwp3hazY0WTLd9h-vqObmEhdttQxBTi1kAQ&s leepold cafe Mumbai",
        rating: 4.3,
        price: "$$"
      },
      {
        id: 202,
        name: "Bademiya",
        description: "Legendary late-night food joint serving kebabs and rolls.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvaMbpZEwQS7mhxHALaJjamjEMtwD-ZT0K3A&s bademiya Mumbai",
        rating: 4.4,
        price: "$"
      },
      {
        id: 203,
        name: "The Table",
        description: "Upscale dining known for its eclectic international menu.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ifjUCcFThZ8fkwCrXdc0v3ThDPnf0desoA&s the table",
        rating: 4.5,
        price: "$$$"
      },
      {
        id: 204,
        name: "Britannia & Co.",
        description: "Parsi restaurant famed for berry pulao and historic charm.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IaEzT-OLFoS7ayEXzqFCHM5hu7ZBOaNSYw&s Britannia and co Mumbai",
        rating: 4.3,
        price: "$$"
      },
      {
        id: 205,
        name: "Highway Gomantak",
        description: "Authentic coastal seafood cuisine at affordable prices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQNS0hTiai6zxHaLUsTMiD8a0LPhOv3h5TQ&s highway Mumbai restaurant",
        rating: 4.4,
        price: "$"
      },
      {
        id: 206,
        name: "Yauatcha Mumbai",
        description: "Modern dim sum teahouse offering stylish Asian cuisine.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/16/0e/d5/3e/restaurant-inside-very.jpg",
        rating: 4.6,
        price: "$$$"
      }
    ],
    transportation: [
      {
        id: 301,
        type: "Local Train",
        description: "The lifeline of Mumbai connecting suburbs with the city center.",
        image: "https://images.unsplash.com/photo-1555072951-2a0c38f8c17f",
        price: "$"
      },
      {
        id: 302,
        type: "BEST Bus",
        description: "City-run buses covering almost every corner of Mumbai.",
        image: "https://images.unsplash.com/photo-1616401784546-5be9b8b65cf3",
        price: "$"
      },
      {
        id: 303,
        type: "Auto Rickshaw",
        description: "Affordable and fast travel in suburbs (not available in South Mumbai).",
        image: "https://images.unsplash.com/photo-1584697964152-f94aa4b693b3",
        price: "$"
      },
      {
        id: 304,
        type: "Taxi",
        description: "Black & yellow cabs for short and long distances with meters.",
        image: "https://images.unsplash.com/photo-1598032898502-05e7c84782bd",
        price: "$$"
      },
      {
        id: 305,
        type: "Mumbai Metro",
        description: "New-age metro system easing traffic in key corridors.",
        image: "https://images.unsplash.com/photo-1601034641845-7d25f243fba6",
        price: "$"
      },
      {
        id: 306,
        type: "Ferry Service",
        description: "Boat rides from Gateway of India to Elephanta and Mandwa.",
        image: "https://images.unsplash.com/photo-1519511381798-05d39c14d0f2",
        price: "$$"
      },
    ]
  },

  4: { // Sambhaji Nagar (Aurangabad)
    hotels: [
      {
        id: 1,
        name: "WelcomHotel Rama International",
        description: "Elegant hotel with lush gardens, modern amenities, and fine dining.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        rating: 4.5,
        price: "$$$"
      },
      {
        id: 2,
        name: "Vivanta Aurangabad",
        description: "Luxury stay with heritage-style architecture and spacious rooms.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSyyFw7-gRw0GxIzQgdIPFAJRBsdBYm-L8g&s",
        rating: 4.6,
        price: "$$$"
      },
      {
        id: 3,
        name: "Lemon Tree Hotel",
        description: "Modern hotel offering comfort, good location, and value for money.",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
        rating: 4.3,
        price: "$$"
      },
      {
        id: 4,
        name: "The Aures",
        description: "Stylish mid-range hotel with bar, restaurant, and wellness services.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7744650.jpg?k=ed870757b8fb861966eafebaed601c7b9b59c87de4d652cd04124b04942054c2&o=&hp=1",
        rating: 4.2,
        price: "$$"
      },
      {
        id: 5,
        name: "Hotel Green Olive",
        description: "Budget hotel with neat rooms and quick access to tourist spots.",
        image: "https://r1imghtlak.mmtcdn.com/b8cc7136f9bd11e7930e02755708f0b3.jpg",
        rating: 4.0,
        price: "$"
      },
      {
        id: 6,
        name: "Hotel JP International",
        description: "Comfortable accommodation with modern decor and restaurant service.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        rating: 4.1,
        price: "$$"
      }
    ],
    places: [
      {
        id: 101,
        name: "Ajanta Caves",
        description: "UNESCO-listed ancient Buddhist rock-cut caves with stunning paintings.",
        image: "https://sudhagee.com/wp-content/uploads/2015/01/ajanta-caves-21.jpg?w=700&h=326",
        rating: 4.9
      },
      {
        id: 102,
        name: "Ellora Caves",
        description: "Remarkable rock-cut temples representing Buddhism, Hinduism, and Jainism.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/ellora-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-5?qlt=82&ts=1727010646173",
        rating: 4.8
      },
      {
        id: 103,
        name: "Bibi Ka Maqbara",
        description: "Mini-Taj of the Deccan, built in memory of Aurangzeb's wife.",
        image: "https://static.india.com/wp-content/uploads/2021/01/Aurangabad-BIbika-Makbara.jpg",
        rating: 4.5
      },
      {
        id: 104,
        name: "Daulatabad Fort",
        description: "Hilltop fortress with amazing defense systems and panoramic views.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVpRAxMNO6olcF9vKtnySfgSexRJ3sS3r4w&s",
        rating: 4.6
      },
      {
        id: 105,
        name: "Panchakki",
        description: "Historic water mill system with garden and Sufi saint's shrine.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2X88J6epl4oBhuH8HDnHwoxESajkXtaWkAA&s",
        rating: 4.2
      },
      {
        id: 106,
        name: "Aurangabad Caves",
        description: "Lesser-known rock-cut caves with sculptures and ancient Buddhist art.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7PSaqbNTtbD_8YGA8oJrFucxcjgiSBiEbg&s",
        rating: 4.3
      }
    ],
    restaurants: [
      {
        id: 201,
        name: "Tandoor Restaurant & Bar",
        description: "Well-known for Mughlai, North Indian, and grilled dishes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ObONOHXDNEh9LniGeHcb7KGTTZQaKq4ZZg&s",
        rating: 4.3,
        price: "$$"
      },
      {
        id: 202,
        name: "Great Sagar Restaurant",
        description: "Popular family spot serving Indian and Chinese dishes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9z9fgCZ78h0vLL457nGjQXlURkLzZoo0zQ&s",
        rating: 4.2,
        price: "$"
      },
      {
        id: 203,
        name: "Kream n Krunch",
        description: "Trendy café with snacks, desserts, and casual meals.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/df/e2/c4/knk.jpg?w=900&h=500&s=1",
        rating: 4.4,
        price: "$$"
      },
      {
        id: 204,
        name: "Hotel Panchavati",
        description: "Known for its Maharashtrian thalis and simple ambience.",
        image: "hhttps://r1imghtlak.mmtcdn.com/ac033f32b43f11e9885a0a4cef95d023.jpg",
        rating: 4.1,
        price: "$"
      },
      {
        id: 205,
        name: "Fusion – The Restaurant",
        description: "Buffet and à la carte options with global cuisine.",
        image: "https://b.zmtcdn.com/data/pictures/3/19677893/8473308cac6c79b8d73e90794292a4c2.jpeg",
        rating: 4.3,
        price: "$$$"
      },
      {
        id: 206,
        name: "Yalla Yalla",
        description: "Lively dining spot with multi-cuisine dishes and stylish decor.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YB46OvBdoPvAPMVI0Fwc4HjhswjhBGTTMg&s",
        rating: 4.4,
        price: "$$"
      }
    ],
    transportation: [
      {
        id: 301,
        type: "City Bus",
        description: "AMT buses run across various parts of the city.",
        image: "https://images.unsplash.com/photo-1616401784546-5be9b8b65cf3",
        price: "$"
      },
      {
        id: 302,
        type: "Auto Rickshaw",
        description: "Common and cheap mode for local travel around the city.",
        image: "https://images.unsplash.com/photo-1584697964152-f94aa4b693b3",
        price: "$"
      },
      {
        id: 303,
        type: "Taxi",
        description: "Private and shared taxis available for longer routes and airport travel.",
        image: "https://images.unsplash.com/photo-1598032898502-05e7c84782bd",
        price: "$$"
      },
      {
        id: 304,
        type: "Rental Car",
        description: "Car hire services for personal travel and tourism.",
        image: "https://images.unsplash.com/photo-1601034641845-7d25f243fba6",
        price: "$$$"
      },
      {
        id: 305,
        type: "Railway",
        description: "Aurangabad station connects to Mumbai, Pune, Hyderabad, and more.",
        image: "https://images.unsplash.com/photo-1555072951-2a0c38f8c17f",
        price: "$$"
      },
      {
        id: 306,
        type: "Bicycle Rentals",
        description: "Eco-friendly option in tourist-friendly areas like near Ellora.",
        image: "https://images.unsplash.com/photo-1519511381798-05d39c14d0f2",
        price: "$"
      }
    ]
  },

5: { // Mahabaleshwar
  hotels: [
    {
      id: 1,
      name: "Evershine Resort",
      description: "Upscale resort with colonial charm, gardens, and a spa.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      rating: 4.5,
      price: "$$$"
    },
    {
      id: 2,
      name: "Brightland Resort & Spa",
      description: "Luxury resort offering valley views, fine dining, and wellness amenities.",
      image: "https://images.unsplash.com/photo-1501117716987-c8e99eadd769",
      rating: 4.6,
      price: "$$$"
    },
    {
      id: 3,
      name: "Ramsukh Resorts & Spa",
      description: "Nature-inspired stay with indoor pool, spa, and forest surroundings.",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      rating: 4.4,
      price: "$$$"
    },
    {
      id: 4,
      name: "Bella Vista Resort",
      description: "Comfortable resort with valley views, restaurant, and warm service.",
      image: "https://images.unsplash.com/photo-1582719478339-9500f18931e3",
      rating: 4.3,
      price: "$$"
    },
    {
      id: 5,
      name: "Treebo JP Cottage",
      description: "Budget-friendly cottage with cozy interiors and garden space.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      rating: 4.0,
      price: "$"
    },
    {
      id: 6,
      name: "La Serene Resort and Spa",
      description: "Modern resort featuring serene surroundings and wellness treatments.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      rating: 4.2,
      price: "$$"
    }
  ],
  places: [
    {
      id: 101,
      name: "Venna Lake",
      description: "Popular boating spot surrounded by greenery and eateries.",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      rating: 4.6
    },
    {
      id: 102,
      name: "Elephant's Head Point",
      description: "Scenic viewpoint resembling an elephant's head with valley vistas.",
      image: "https://images.unsplash.com/photo-1610174030213-790fc3c4f260",
      rating: 4.7
    },
    {
      id: 103,
      name: "Pratapgad Fort",
      description: "Historic hill fort associated with the Maratha king Shivaji.",
      image: "https://images.unsplash.com/photo-1584697964152-f94aa4b693b3",
      rating: 4.5
    },
    {
      id: 104,
      name: "Arthur's Seat",
      description: "Popular viewpoint offering panoramic views of the valley and rivers.",
      image: "https://images.unsplash.com/photo-1613145991296-d6c4c37ff3cf",
      rating: 4.6
    },
    {
      id: 105,
      name: "Mapro Garden",
      description: "Famous for strawberries, garden café, and fresh produce.",
      image: "https://images.unsplash.com/photo-1587314168485-3236c8b3cf0f",
      rating: 4.4
    },
    {
      id: 106,
      name: "Wilson Point",
      description: "Highest point in Mahabaleshwar ideal for sunrise views.",
      image: "https://images.unsplash.com/photo-1616401784546-5be9b8b65cf3",
      rating: 4.3
    }
  ],
  restaurants: [
    {
      id: 201,
      name: "Mapro Garden Café",
      description: "Iconic garden eatery known for pizzas, sandwiches, and strawberries.",
      image: "https://images.unsplash.com/photo-1606788075761-4193b81dcd76",
      rating: 4.5,
      price: "$$"
    },
    {
      id: 202,
      name: "Bagicha Corner",
      description: "Rustic roadside spot serving fresh juices and local snacks.",
      image: "https://images.unsplash.com/photo-1555992336-03a23c2a304b",
      rating: 4.2,
      price: "$"
    },
    {
      id: 203,
      name: "The Grapevine Restaurant",
      description: "Elegant dining with continental, Indian, and seafood options.",
      image: "https://images.unsplash.com/photo-1506368083636-6defb67639c2",
      rating: 4.4,
      price: "$$$"
    },
    {
      id: 204,
      name: "Sizzler Place",
      description: "Popular for its variety of sizzlers in a cozy setting.",
      image: "https://images.unsplash.com/photo-1598514982873-b62dcf7c0410",
      rating: 4.3,
      price: "$$"
    },
    {
      id: 205,
      name: "Little Italy",
      description: "Italian vegetarian fare including pastas and wood-fired pizzas.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      rating: 4.4,
      price: "$$$"
    },
    {
      id: 206,
      name: "Hilltop Ice Cream",
      description: "Quaint spot for homemade ice cream and desserts.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      rating: 4.3,
      price: "$"
    }
  ],
  transportation: [
    {
      id: 301,
      type: "Private Car",
      description: "Most common way to reach and explore the hilly region.",
      image: "https://images.unsplash.com/photo-1598032898502-05e7c84782bd",
      price: "$$$"
    },
    {
      id: 302,
      type: "Tourist Bus",
      description: "Local sightseeing buses available for tourists.",
      image: "https://images.unsplash.com/photo-1616401784546-5be9b8b65cf3",
      price: "$$"
    },
    {
      id: 303,
      type: "Taxi",
      description: "Available at bus stops and resorts for local trips.",
      image: "https://images.unsplash.com/photo-1584697964152-f94aa4b693b3",
      price: "$$"
    },
    {
      id: 304,
      type: "Horse Ride",
      description: "Unique experience at some points like Echo Point and Venna Lake.",
      image: "https://images.unsplash.com/photo-1613145991296-d6c4c37ff3cf",
      price: "$"
    },
    {
      id: 305,
      type: "Bike Rental",
      description: "Two-wheeler rentals are a great way to explore the town.",
      image: "https://images.unsplash.com/photo-1519511381798-05d39c14d0f2",
      price: "$$"
    },
    {
      id: 306,
      type: "Shared Jeep",
      description: "Budget transport option from Panchgani and Satara.",
      image: "https://images.unsplash.com/photo-1601034641845-7d25f243fba6",
      price: "$"
    }
  ]
},

6: { // Nagpur
  hotels: [
    {
      id: 1,
      name: "Radisson Blu Hotel",
      description: "Premium hotel offering luxury rooms, fine dining, and a rooftop pool.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      rating: 4.6,
      price: "$$$"
    },
    {
      id: 2,
      name: "Le Méridien Nagpur",
      description: "Upscale stay near the airport with stylish rooms and a spa.",
      image: "https://images.unsplash.com/photo-1501117716987-c8e99eadd769",
      rating: 4.4,
      price: "$$$"
    },
    {
      id: 3,
      name: "Tuli Imperial",
      description: "Elegant hotel with colonial design, modern facilities, and fine cuisine.",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      rating: 4.3,
      price: "$$"
    },
    {
      id: 4,
      name: "Hotel Centre Point",
      description: "Centrally located business hotel with banquet and conference facilities.",
      image: "https://images.unsplash.com/photo-1582719478339-9500f18931e3",
      rating: 4.2,
      price: "$$"
    },
    {
      id: 5,
      name: "Treebo Trend Chalets",
      description: "Affordable hotel offering clean, comfortable rooms in a quiet area.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      rating: 4.1,
      price: "$"
    },
    {
      id: 6,
      name: "Hotel Hardeo",
      description: "Modern amenities, in-house dining, and convenient city access.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      rating: 4.0,
      price: "$$"
    }
  ],
  places: [
    {
      id: 101,
      name: "Deekshabhoomi",
      description: "Sacred monument marking the mass conversion to Buddhism by Dr. Ambedkar.",
      image: "https://images.unsplash.com/photo-1581094474926-b8803b26a4c7",
      rating: 4.7
    },
    {
      id: 102,
      name: "Futala Lake",
      description: "Popular lakefront with food stalls, fountains, and sunset views.",
      image: "https://images.unsplash.com/photo-1610174030213-790fc3c4f260",
      rating: 4.4
    },
    {
      id: 103,
      name: "Ambazari Lake & Garden",
      description: "Serene lake and park perfect for boating and relaxation.",
      image: "https://images.unsplash.com/photo-1613145991296-d6c4c37ff3cf",
      rating: 4.5
    },
    {
      id: 104,
      name: "Seminary Hill",
      description: "Lush green hill offering city views and peaceful walking trails.",
      image: "https://images.unsplash.com/photo-1584697964152-f94aa4b693b3",
      rating: 4.3
    },
    {
      id: 105,
      name: "Sitabuldi Fort",
      description: "Historic fort in the heart of the city, site of a famous battle.",
      image: "https://images.unsplash.com/photo-1616401784546-5be9b8b65cf3",
      rating: 4.2
    },
    {
      id: 106,
      name: "Nagzira Wildlife Sanctuary",
      description: "Biodiversity hotspot with safaris and nature trails near Nagpur.",
      image: "https://images.unsplash.com/photo-1601034641845-7d25f243fba6",
      rating: 4.6
    }
  ],
  restaurants: [
    {
      id: 201,
      name: "Barbeque Nation",
      description: "Live grill concept offering wide buffet with Indian and global cuisine.",
      image: "https://images.unsplash.com/photo-1555992336-03a23c2a304b",
      rating: 4.5,
      price: "$$"
    },
    {
      id: 202,
      name: "Ashoka Restaurant",
      description: "Well-known for Indian thalis and traditional ambiance.",
      image: "https://images.unsplash.com/photo-1613145991296-d6c4c37ff3cf",
      rating: 4.3,
      price: "$"
    },
    {
      id: 203,
      name: "The Bukhara",
      description: "Elegant North Indian restaurant famous for kebabs and curries.",
      image: "https://images.unsplash.com/photo-1606788075761-4193b81dcd76",
      rating: 4.4,
      price: "$$"
    },
    {
      id: 204,
      name: "10 Downing Street",
      description: "Lively pub with global fare, cocktails, and themed evenings.",
      image: "https://images.unsplash.com/photo-1506368083636-6defb67639c2",
      rating: 4.2,
      price: "$$"
    },
    {
      id: 205,
      name: "Veeraswami",
      description: "South Indian vegetarian restaurant known for dosas and thalis.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      rating: 4.3,
      price: "$"
    },
    {
      id: 206,
      name: "Zuree Urban Kitchen",
      description: "Modern fine dining with Indian and continental options.",
      image: "https://images.unsplash.com/photo-1598514982873-b62dcf7c0410",
      rating: 4.4,
      price: "$$$"
    }
  ],
  transportation: [
    {
      id: 301,
      type: "Metro",
      description: "Nagpur Metro connects major parts of the city efficiently.",
      image: "https://images.unsplash.com/photo-1616401784546-5be9b8b65cf3",
      price: "$"
    },
    {
      id: 302,
      type: "City Bus",
      description: "NMPL buses run through key routes in the city.",
      image: "https://images.unsplash.com/photo-1610174030213-790fc3c4f260",
      price: "$"
    },
    {
      id: 303,
      type: "Auto Rickshaw",
      description: "A quick and convenient way to travel short distances.",
      image: "https://images.unsplash.com/photo-1584697964152-f94aa4b693b3",
      price: "$"
    },
    {
      id: 304,
      type: "Taxi",
      description: "App-based and local taxis are widely available.",
      image: "https://images.unsplash.com/photo-1598032898502-05e7c84782bd",
      price: "$$"
    },
    {
      id: 305,
      type: "Bike Rentals",
      description: "Bikes and scooters available for self-drive rental.",
      image: "https://images.unsplash.com/photo-1519511381798-05d39c14d0f2",
      price: "$$"
    },
    {
      id: 306,
      type: "Train",
      description: "Nagpur Junction is a major railway hub in central India.",
      image: "https://images.unsplash.com/photo-1555072951-2a0c38f8c17f",
      price: "$$"
    }
  ]
}
};
