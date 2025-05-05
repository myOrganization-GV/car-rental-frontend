export type Car = {
  carId: string;
  model: string;
  pricePerDay: number;
  year: string;
  category: string;
  manufacturer: string;
  color: string;
  transmissionType: string;
  numberOfSeats: number;
  description: string;
};
/* 
export const cars: Car[] = [

  {
    id: 1,
    model: 'Accord',
    price: 95.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'Honda',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: '5',
    description:
      'The Honda Accord is a reliable midsize sedan known for its comfortable ride and excellent fuel efficiency.',
  },
  {
    id: 2,
    model: 'Accord',
    price: 95.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'Honda',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Honda Accord is a reliable midsize sedan known for its comfortable ride and excellent fuel efficiency.',
  },
  {
    id: 3,
    model: 'Accord',
    price: 95.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'Honda',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Honda Accord is a reliable midsize sedan known for its comfortable ride and excellent fuel efficiency.',
  },
  {
    id: 4,
    model: 'Altima',
    price: 92.0,
    year: '2021',
    category: 'SEDAN',
    manufacturer: 'Nissan',
    color: 'Silver',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Nissan Altima offers a smooth driving experience with a spacious interior and modern tech features.',
  },
  {
    id: 5,
    model: 'Altima',
    price: 92.0,
    year: '2021',
    category: 'SEDAN',
    manufacturer: 'Nissan',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Nissan Altima offers a smooth driving experience with a spacious interior and modern tech features.',
  },
  {
    id: 6,
    model: 'Altima',
    price: 92.0,
    year: '2021',
    category: 'SEDAN',
    manufacturer: 'Nissan',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Nissan Altima offers a smooth driving experience with a spacious interior and modern tech features.',
  },

  // ──── Sonata ───────────────────────────────────
  {
    id: 7,
    model: 'Sonata',
    price: 90.0,
    year: '2020',
    category: 'SEDAN',
    manufacturer: 'Hyundai',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Hyundai Sonata combines sleek styling with a comfortable cabin and advanced safety systems.',
  },
  {
    id: 8,
    model: 'Sonata',
    price: 90.0,
    year: '2020',
    category: 'SEDAN',
    manufacturer: 'Hyundai',
    color: 'Blue',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Hyundai Sonata combines sleek styling with a comfortable cabin and advanced safety systems.',
  },
  {
    id: 9,
    model: 'Sonata',
    price: 90.0,
    year: '2020',
    category: 'SEDAN',
    manufacturer: 'Hyundai',
    color: 'Silver',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Hyundai Sonata combines sleek styling with a comfortable cabin and advanced safety systems.',
  },

  // ──── K5 ────────────────────────────────────────
  {
    id: 10,
    model: 'K5',
    price: 100.0,
    year: '2023',
    category: 'SEDAN',
    manufacturer: 'Kia',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Kia K5 is a sporty sedan with sharp handling, a refined interior, and plenty of standard equipment.',
  },
  {
    id: 11,
    model: 'K5',
    price: 100.0,
    year: '2023',
    category: 'SEDAN',
    manufacturer: 'Kia',
    color: 'Red',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Kia K5 is a sporty sedan with sharp handling, a refined interior, and plenty of standard equipment.',
  },
  {
    id: 12,
    model: 'K5',
    price: 100.0,
    year: '2023',
    category: 'SEDAN',
    manufacturer: 'Kia',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Kia K5 is a sporty sedan with sharp handling, a refined interior, and plenty of standard equipment.',
  },

  // ──── Mazda6 ───────────────────────────────────
  {
    id: 13,
    model: 'Mazda6',
    price: 98.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'Mazda',
    color: 'Red',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Mazda6 is celebrated for its engaging driving dynamics, upscale cabin, and elegant design.',
  },
  {
    id: 14,
    model: 'Mazda6',
    price: 98.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'Mazda',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Mazda6 is celebrated for its engaging driving dynamics, upscale cabin, and elegant design.',
  },
  {
    id: 15,
    model: 'Mazda6',
    price: 98.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'Mazda',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Mazda6 is celebrated for its engaging driving dynamics, upscale cabin, and elegant design.',
  },

  // ──── Malibu ───────────────────────────────────
  {
    id: 16,
    model: 'Malibu',
    price: 97.0,
    year: '2021',
    category: 'SEDAN',
    manufacturer: 'Chevrolet',
    color: 'Blue',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Chevrolet Malibu offers a balanced ride, user‑friendly infotainment, and a roomy interior.',
  },
  {
    id: 17,
    model: 'Malibu',
    price: 97.0,
    year: '2021',
    category: 'SEDAN',
    manufacturer: 'Chevrolet',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Chevrolet Malibu offers a balanced ride, user‑friendly infotainment, and a roomy interior.',
  },
  {
    id: 18,
    model: 'Malibu',
    price: 97.0,
    year: '2021',
    category: 'SEDAN',
    manufacturer: 'Chevrolet',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Chevrolet Malibu offers a balanced ride, user‑friendly infotainment, and a roomy interior.',
  },

  // ──── Model 3 ──────────────────────────────────
  {
    id: 19,
    model: 'Model 3',
    price: 110.0,
    year: '2023',
    category: 'SEDAN',
    manufacturer: 'Tesla',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'Tesla Model 3 is an all‑electric sedan delivering brisk acceleration, long range, and cutting‑edge tech.',
  },
  {
    id: 20,
    model: 'Model 3',
    price: 110.0,
    year: '2023',
    category: 'SEDAN',
    manufacturer: 'Tesla',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'Tesla Model 3 is an all‑electric sedan delivering brisk acceleration, long range, and cutting‑edge tech.',
  },
  {
    id: 21,
    model: 'Model 3',
    price: 110.0,
    year: '2023',
    category: 'SEDAN',
    manufacturer: 'Tesla',
    color: 'Red',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'Tesla Model 3 is an all‑electric sedan delivering brisk acceleration, long range, and cutting‑edge tech.',
  },
  {
    id: 22,
    model: '3 Series',
    price: 120.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'BMW',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The BMW 3 Series is a compact executive sedan known for its precise handling and premium interior.',
  },
  {
    id: 23,
    model: '3 Series',
    price: 120.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'BMW',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The BMW 3 Series is a compact executive sedan known for its precise handling and premium interior.',
  },
  {
    id: 24,
    model: '3 Series',
    price: 120.0,
    year: '2022',
    category: 'SEDAN',
    manufacturer: 'BMW',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The BMW 3 Series is a compact executive sedan known for its precise handling and premium interior.',
  },

  // ──── 911 Carrera ──────────────────────────────
  {
    id: 25,
    model: '911 Carrera',
    price: 200.0,
    year: '2023',
    category: 'SPORT',
    manufacturer: 'Porsche',
    color: 'Red',
    transmissionType: 'Manual',
    numberOfSeats: 2,
    description:
      'The Porsche 911 Carrera is an iconic sports car, offering blistering performance and timeless style.',
  },
  {
    id: 26,
    model: '911 Carrera',
    price: 200.0,
    year: '2023',
    category: 'SPORT',
    manufacturer: 'Porsche',
    color: 'Black',
    transmissionType: 'Manual',
    numberOfSeats: 2,
    description:
      'The Porsche 911 Carrera is an iconic sports car, offering blistering performance and timeless style.',
  },
  {
    id: 27,
    model: '911 Carrera',
    price: 200.0,
    year: '2023',
    category: 'SPORT',
    manufacturer: 'Porsche',
    color: 'White',
    transmissionType: 'Manual',
    numberOfSeats: 2,
    description:
      'The Porsche 911 Carrera is an iconic sports car, offering blistering performance and timeless style.',
  },

  // ──── F8 Tributo ───────────────────────────────
  {
    id: 28,
    model: 'F8 Tributo',
    price: 250.0,
    year: '2023',
    category: 'SPORT',
    manufacturer: 'Ferrari',
    color: 'Yellow',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'Ferrari F8 Tributo is a mid‑engine supercar boasting V8 power, razor‑sharp handling, and exotic flair.',
  },
  {
    id: 29,
    model: 'F8 Tributo',
    price: 250.0,
    year: '2023',
    category: 'SPORT',
    manufacturer: 'Ferrari',
    color: 'Red',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'Ferrari F8 Tributo is a mid‑engine supercar boasting V8 power, razor‑sharp handling, and exotic flair.',
  },
  {
    id: 30,
    model: 'F8 Tributo',
    price: 250.0,
    year: '2023',
    category: 'SPORT',
    manufacturer: 'Ferrari',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'Ferrari F8 Tributo is a mid‑engine supercar boasting V8 power, razor‑sharp handling, and exotic flair.',
  },

  // ──── M4 Competition ───────────────────────────
  {
    id: 31,
    model: 'M4 Competition',
    price: 150.0,
    year: '2022',
    category: 'SPORT',
    manufacturer: 'BMW',
    color: 'Blue',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'The BMW M4 Competition delivers high‑performance driving with a turbocharged engine and track‑ready chassis.',
  },
  {
    id: 32,
    model: 'M4 Competition',
    price: 150.0,
    year: '2022',
    category: 'SPORT',
    manufacturer: 'BMW',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'The BMW M4 Competition delivers high‑performance driving with a turbocharged engine and track‑ready chassis.',
  },
  {
    id: 33,
    model: 'M4 Competition',
    price: 150.0,
    year: '2022',
    category: 'SPORT',
    manufacturer: 'BMW',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'The BMW M4 Competition delivers high‑performance driving with a turbocharged engine and track‑ready chassis.',
  },
  {
    id: 34,
    model: 'Corvette',
    price: 140.0,
    year: '2021',
    category: 'SPORT',
    manufacturer: 'Chevrolet',
    color: 'Orange',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'The Chevrolet Corvette is an American sports icon, offering V8 thrills and a mid‑engine layout.',
  },
  {
    id: 35,
    model: 'Corvette',
    price: 140.0,
    year: '2021',
    category: 'SPORT',
    manufacturer: 'Chevrolet',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'The Chevrolet Corvette is an American sports icon, offering V8 thrills and a mid‑engine layout.',
  },
  {
    id: 36,
    model: 'Corvette',
    price: 140.0,
    year: '2021',
    category: 'SPORT',
    manufacturer: 'Chevrolet',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 2,
    description:
      'The Chevrolet Corvette is an American sports icon, offering V8 thrills and a mid‑engine layout.',
  },

  // ──── Suburban ────────────────────────────────
  {
    id: 37,
    model: 'Suburban',
    price: 130.0,
    year: '2022',
    category: 'SUV',
    manufacturer: 'Chevrolet',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 8,
    description:
      'The Chevrolet Suburban is a full‑size SUV with seating for eight, a powerful engine, and vast cargo space.',
  },
  {
    id: 38,
    model: 'Suburban',
    price: 130.0,
    year: '2022',
    category: 'SUV',
    manufacturer: 'Chevrolet',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 8,
    description:
      'The Chevrolet Suburban is a full‑size SUV with seating for eight, a powerful engine, and vast cargo space.',
  },
  {
    id: 39,
    model: 'Suburban',
    price: 130.0,
    year: '2022',
    category: 'SUV',
    manufacturer: 'Chevrolet',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 8,
    description:
      'The Chevrolet Suburban is a full‑size SUV with seating for eight, a powerful engine, and vast cargo space.',
  },

  // ──── Highlander ──────────────────────────────
  {
    id: 40,
    model: 'Highlander',
    price: 125.0,
    year: '2021',
    category: 'SUV',
    manufacturer: 'Toyota',
    color: 'Silver',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Toyota Highlander is a family‑friendly SUV with three rows, solid reliability, and smooth ride.',
  },
  {
    id: 41,
    model: 'Highlander',
    price: 125.0,
    year: '2021',
    category: 'SUV',
    manufacturer: 'Toyota',
    color: 'Blue',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Toyota Highlander is a family‑friendly SUV with three rows, solid reliability, and smooth ride.',
  },
  {
    id: 42,
    model: 'Highlander',
    price: 125.0,
    year: '2021',
    category: 'SUV',
    manufacturer: 'Toyota',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Toyota Highlander is a family‑friendly SUV with three rows, solid reliability, and smooth ride.',
  },

  // ──── Explorer ────────────────────────────────
  {
    id: 43,
    model: 'Explorer',
    price: 135.0,
    year: '2020',
    category: 'SUV',
    manufacturer: 'Ford',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Ford Explorer is a versatile SUV offering strong towing capability and a comfortable interior.',
  },
  {
    id: 44,
    model: 'Explorer',
    price: 135.0,
    year: '2020',
    category: 'SUV',
    manufacturer: 'Ford',
    color: 'Red',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Ford Explorer is a versatile SUV offering strong towing capability and a comfortable interior.',
  },
  {
    id: 45,
    model: 'Explorer',
    price: 135.0,
    year: '2020',
    category: 'SUV',
    manufacturer: 'Ford',
    color: 'Silver',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Ford Explorer is a versatile SUV offering strong towing capability and a comfortable interior.',
  },

  // ──── Grand Cherokee ──────────────────────────
  {
    id: 46,
    model: 'Grand Cherokee',
    price: 140.0,
    year: '2023',
    category: 'SUV',
    manufacturer: 'Jeep',
    color: 'Green',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Jeep Grand Cherokee blends off‑road prowess with upscale cabin appointments and modern tech.',
  },
  {
    id: 47,
    model: 'Grand Cherokee',
    price: 140.0,
    year: '2023',
    category: 'SUV',
    manufacturer: 'Jeep',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Jeep Grand Cherokee blends off‑road prowess with upscale cabin appointments and modern tech.',
  },
  {
    id: 48,
    model: 'Grand Cherokee',
    price: 140.0,
    year: '2023',
    category: 'SUV',
    manufacturer: 'Jeep',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Jeep Grand Cherokee blends off‑road prowess with upscale cabin appointments and modern tech.',
  },

  // ──── Odyssey ──────────────────────────────────
  {
    id: 49,
    model: 'Odyssey',
    price: 115.0,
    year: '2022',
    category: 'MPV',
    manufacturer: 'Honda',
    color: 'Silver',
    transmissionType: 'Automatic',
    numberOfSeats: 6,
    description:
      'The Honda Odyssey is a top‑rated minivan with family‑oriented features, sliding doors, and a smooth ride.',
  },
  {
    id: 50,
    model: 'Odyssey',
    price: 115.0,
    year: '2022',
    category: 'MPV',
    manufacturer: 'Honda',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 6,
    description:
      'The Honda Odyssey is a top‑rated minivan with family‑oriented features, sliding doors, and a smooth ride.',
  },
  {
    id: 51,
    model: 'Odyssey',
    price: 115.0,
    year: '2022',
    category: 'MPV',
    manufacturer: 'Honda',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 6,
    description:
      'The Honda Odyssey is a top‑rated minivan with family‑oriented features, sliding doors, and a smooth ride.',
  },

  {
    id: 52,
    model: 'Sienna',
    price: 120.0,
    year: '2021',
    category: 'MPV',
    manufacturer: 'Toyota',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Toyota Sienna is a hybrid minivan offering great fuel economy and versatile seating configurations.',
  },
  {
    id: 53,
    model: 'Sienna',
    price: 120.0,
    year: '2021',
    category: 'MPV',
    manufacturer: 'Toyota',
    color: 'Silver',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Toyota Sienna is a hybrid minivan offering great fuel economy and versatile seating configurations.',
  },
  {
    id: 54,
    model: 'Sienna',
    price: 120.0,
    year: '2021',
    category: 'MPV',
    manufacturer: 'Toyota',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Toyota Sienna is a hybrid minivan offering great fuel economy and versatile seating configurations.',
  },

  // ──── Pacifica ─────────────────────────────── :contentReference[oaicite:1]{index=1}
  {
    id: 55,
    model: 'Pacifica',
    price: 118.0,
    year: '2023',
    category: 'MPV',
    manufacturer: 'Chrysler',
    color: 'Blue',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Chrysler Pacifica features a refined interior, available hybrid powertrain, and Stow ’n Go seats.',
  },
  {
    id: 56,
    model: 'Pacifica',
    price: 118.0,
    year: '2023',
    category: 'MPV',
    manufacturer: 'Chrysler',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Chrysler Pacifica features a refined interior, available hybrid powertrain, and Stow ’n Go seats.',
  },
  {
    id: 57,
    model: 'Pacifica',
    price: 118.0,
    year: '2023',
    category: 'MPV',
    manufacturer: 'Chrysler',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 7,
    description:
      'The Chrysler Pacifica features a refined interior, available hybrid powertrain, and Stow ’n Go seats.',
  },

  // ──── C4 Picasso ───────────────────────────── :contentReference[oaicite:2]{index=2}
  {
    id: 58,
    model: 'C4 Picasso',
    price: 105.0,
    year: '2019',
    category: 'MPV',
    manufacturer: 'Citroën',
    color: 'Red',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Citroën C4 Picasso is a compact MPV with clever storage, a bright cabin, and a comfortable ride.',
  },
  {
    id: 59,
    model: 'C4 Picasso',
    price: 105.0,
    year: '2019',
    category: 'MPV',
    manufacturer: 'Citroën',
    color: 'Blue',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Citroën C4 Picasso is a compact MPV with clever storage, a bright cabin, and a comfortable ride.',
  },
  {
    id: 60,
    model: 'C4 Picasso',
    price: 105.0,
    year: '2019',
    category: 'MPV',
    manufacturer: 'Citroën',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Citroën C4 Picasso is a compact MPV with clever storage, a bright cabin, and a comfortable ride.',
  },

  // ──── Mustang ─────────────────────────────── :contentReference[oaicite:3]{index=3}
  {
    id: 61,
    model: 'Mustang',
    price: 150.0,
    year: '2022',
    category: 'COUPE',
    manufacturer: 'Ford',
    color: 'Blue',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Ford Mustang is a classic muscle coupe delivering bold styling and throaty V8 performance.',
  },
  {
    id: 62,
    model: 'Mustang',
    price: 150.0,
    year: '2022',
    category: 'COUPE',
    manufacturer: 'Ford',
    color: 'Red',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Ford Mustang is a classic muscle coupe delivering bold styling and throaty V8 performance.',
  },
  {
    id: 63,
    model: 'Mustang',
    price: 150.0,
    year: '2022',
    category: 'COUPE',
    manufacturer: 'Ford',
    color: 'Black',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Ford Mustang is a classic muscle coupe delivering bold styling and throaty V8 performance.',
  },

  // ──── A5 ───────────────────────────────────── :contentReference[oaicite:4]{index=4}
  {
    id: 64,
    model: 'A5',
    price: 145.0,
    year: '2021',
    category: 'COUPE',
    manufacturer: 'Audi',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 4,
    description:
      'The Audi A5 coupe offers elegant design, a high‑quality interior, and smooth, composed handling.',
  },
  {
    id: 65,
    model: 'A5',
    price: 145.0,
    year: '2021',
    category: 'COUPE',
    manufacturer: 'Audi',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 4,
    description:
      'The Audi A5 coupe offers elegant design, a high‑quality interior, and smooth, composed handling.',
  },
  {
    id: 66,
    model: 'A5',
    price: 145.0,
    year: '2021',
    category: 'COUPE',
    manufacturer: 'Audi',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 4,
    description:
      'The Audi A5 coupe offers elegant design, a high‑quality interior, and smooth, composed handling.',
  },

  // ──── 4 Series ─────────────────────────────── :contentReference[oaicite:5]{index=5}
  {
    id: 67,
    model: '4 Series',
    price: 155.0,
    year: '2022',
    category: 'COUPE',
    manufacturer: 'BMW',
    color: 'Black',
    transmissionType: 'Automatic',
    numberOfSeats: 4,
    description:
      'The BMW 4 Series coupe is a sporty luxury car with a powerful engine and driver‑focused cabin.',
  },
  {
    id: 68,
    model: '4 Series',
    price: 155.0,
    year: '2022',
    category: 'COUPE',
    manufacturer: 'BMW',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 4,
    description:
      'The BMW 4 Series coupe is a sporty luxury car with a powerful engine and driver‑focused cabin.',
  },
  {
    id: 69,
    model: '4 Series',
    price: 155.0,
    year: '2022',
    category: 'COUPE',
    manufacturer: 'BMW',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 4,
    description:
      'The BMW 4 Series coupe is a sporty luxury car with a powerful engine and driver‑focused cabin.',
  },

  // ──── TT ───────────────────────────────────── :contentReference[oaicite:6]{index=6}
  {
    id: 70,
    model: 'TT',
    price: 135.0,
    year: '2020',
    category: 'COUPE',
    manufacturer: 'Audi',
    color: 'Red',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Audi TT is a compact coupe known for its distinctive styling and agile handling.',
  },
  {
    id: 71,
    model: 'TT',
    price: 135.0,
    year: '2020',
    category: 'COUPE',
    manufacturer: 'Audi',
    color: 'Black',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Audi TT is a compact coupe known for its distinctive styling and agile handling.',
  },
  {
    id: 72,
    model: 'TT',
    price: 135.0,
    year: '2020',
    category: 'COUPE',
    manufacturer: 'Audi',
    color: 'White',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Audi TT is a compact coupe known for its distinctive styling and agile handling.',
  },

  // ──── Mini Cooper ─────────────────────────── :contentReference[oaicite:7]{index=7}
  {
    id: 73,
    model: 'Mini Cooper',
    price: 80.0,
    year: '2023',
    category: 'HATCHBACK',
    manufacturer: 'Mini',
    color: 'Yellow',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Mini Cooper is a fun hatchback with go‑kart handling and a customizable, retro‑inspired design.',
  },
  {
    id: 74,
    model: 'Mini Cooper',
    price: 80.0,
    year: '2023',
    category: 'HATCHBACK',
    manufacturer: 'Mini',
    color: 'Black',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Mini Cooper is a fun hatchback with go‑kart handling and a customizable, retro‑inspired design.',
  },
  {
    id: 75,
    model: 'Mini Cooper',
    price: 80.0,
    year: '2023',
    category: 'HATCHBACK',
    manufacturer: 'Mini',
    color: 'White',
    transmissionType: 'Manual',
    numberOfSeats: 4,
    description:
      'The Mini Cooper is a fun hatchback with go‑kart handling and a customizable, retro‑inspired design.',
  },

  // ──── Golf ─────────────────────────────────── :contentReference[oaicite:8]{index=8}
  {
    id: 76,
    model: 'Golf',
    price: 85.0,
    year: '2021',
    category: 'HATCHBACK',
    manufacturer: 'Volkswagen',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Volkswagen Golf is a practical hatchback with a refined ride, upscale interior, and solid build quality.',
  },
  {
    id: 77,
    model: 'Golf',
    price: 85.0,
    year: '2021',
    category: 'HATCHBACK',
    manufacturer: 'Volkswagen',
    color: 'Blue',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Volkswagen Golf is a practical hatchback with a refined ride, upscale interior, and solid build quality.',
  },
  {
    id: 78,
    model: 'Golf',
    price: 85.0,
    year: '2021',
    category: 'HATCHBACK',
    manufacturer: 'Volkswagen',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Volkswagen Golf is a practical hatchback with a refined ride, upscale interior, and solid build quality.',
  },

  // ──── Focus ────────────────────────────────── :contentReference[oaicite:9]{index=9}
  {
    id: 79,
    model: 'Focus',
    price: 75.0,
    year: '2020',
    category: 'HATCHBACK',
    manufacturer: 'Ford',
    color: 'Blue',
    transmissionType: 'Manual',
    numberOfSeats: 5,
    description:
      'The Ford Focus is an agile compact car offering sharp handling and good fuel economy.',
  },
  {
    id: 80,
    model: 'Focus',
    price: 75.0,
    year: '2020',
    category: 'HATCHBACK',
    manufacturer: 'Ford',
    color: 'Black',
    transmissionType: 'Manual',
    numberOfSeats: 5,
    description:
      'The Ford Focus is an agile compact car offering sharp handling and good fuel economy.',
  },
  {
    id: 81,
    model: 'Focus',
    price: 75.0,
    year: '2020',
    category: 'HATCHBACK',
    manufacturer: 'Ford',
    color: 'White',
    transmissionType: 'Manual',
    numberOfSeats: 5,
    description:
      'The Ford Focus is an agile compact car offering sharp handling and good fuel economy.',
  },

  // ──── Civic Hatch ───────────────────────────── :contentReference[oaicite:10]{index=10}
  {
    id: 82,
    model: 'Civic Hatch',
    price: 88.0,
    year: '2022',
    category: 'HATCHBACK',
    manufacturer: 'Honda',
    color: 'Silver',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Honda Civic Hatch is a sporty compact hatchback with a spacious interior and strong reliability.',
  },
  {
    id: 83,
    model: 'Civic Hatch',
    price: 88.0,
    year: '2022',
    category: 'HATCHBACK',
    manufacturer: 'Honda',
    color: 'Gray',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Honda Civic Hatch is a sporty compact hatchback with a spacious interior and strong reliability.',
  },
  {
    id: 84,
    model: 'Civic Hatch',
    price: 88.0,
    year: '2022',
    category: 'HATCHBACK',
    manufacturer: 'Honda',
    color: 'White',
    transmissionType: 'Automatic',
    numberOfSeats: 5,
    description:
      'The Honda Civic Hatch is a sporty compact hatchback with a spacious interior and strong reliability.',
  },
];
 */
