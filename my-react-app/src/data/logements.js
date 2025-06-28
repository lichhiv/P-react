const generateLogements = () => {
    const logements = [];
    const locations = [
        "Ile de France - Paris 17e",
        "Ile de France - Paris 10e",
        "Ile de France - Paris 11e",
        "Ile de France - Paris 15e",
        "Ile de France - Paris 16e",
        "Ile de France - Paris 8e",
        "Ile de France - Paris 3e",
        "Ile de France - Paris 5e",
        "Ile de France - Paris 12e",
        "Ile de France - Paris 9e",
        "Ile de France - Paris 13e",
        "Ile de France - Paris 14e",
        "Ile de France - Paris 18e",
        "Ile de France - Paris 19e",
        "Ile de France - Paris 20e",
        "Ile de France - Paris 6e",
        "Ile de France - Paris 7e",
        "Ile de France - Paris 1er",
        "Ile de France - Paris 2e",
        "Ile de France - Paris 4e"
    ];

    const titles = [
        "Appartement cosy",
        "Magnifique appartement proche Canal Saint Martin",
        "Studio moderne au cœur de Paris",
        "Loft spacieux avec vue panoramique",
        "Appartement haussmannien de charme",
        "Duplex contemporain",
        "Studio design",
        "Appartement vue Tour Eiffel",
        "Loft artistique",
        "Appartement familial",
        "Studio romantique",
        "Appartement vue Montmartre",
        "Loft industriel",
        "Studio zen",
        "Appartement vue Seine",
        "Duplex moderne",
        "Studio cosy",
        "Appartement vue Arc de Triomphe",
        "Loft contemporain",
        "Studio vue jardin"
    ];

    const hosts = [
        { name: "Nathalie Jean", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" },
        { name: "Della Case", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg" },
        { name: "Sophie Martin", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg" },
        { name: "Pierre Dubois", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg" },
        { name: "Marie Laurent", picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg" }
    ];

    const equipments = [
        ["Équipements de base", "Micro-Ondes", "Douche italienne", "Frigo", "WIFI"],
        ["Parking", "Sèche Cheveux", "Machine à laver", "Wi-fi", "Cuisine équipée", "Télévision"],
        ["Wi-fi", "Cuisine équipée", "Télévision", "Climatisation", "Ascenseur"],
        ["Terrasse", "Wi-fi", "Cuisine équipée", "Télévision", "Climatisation", "Parking"],
        ["Cheminée", "Wi-fi", "Cuisine équipée", "Télévision", "Ascenseur", "Balcon"]
    ];

    const tags = [
        ["Batignolle", "Montmartre"],
        ["Canal Saint Martin", "République", "Appartement"],
        ["Studio", "Centre-ville", "Moderne"],
        ["Loft", "Vue panoramique", "Terrasse"],
        ["Haussmannien", "Charme", "Calme"]
    ];

    for (let i = 0; i < 20; i++) {
        const num = (i % 5) + 1;
        logements.push({
            id: `logement-${i + 1}`,
            title: titles[i],
            cover: `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-${num}-1.jpg`,
            pictures: [
                `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-${num}-1.jpg`,
                `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-${num}-2.jpg`,
                `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-${num}-3.jpg`,
                `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-${num}-4.jpg`
            ],
            description: `Superbe logement situé à ${locations[i]}. Idéal pour votre séjour à Paris.`,
            host: hosts[i % 5],
            rating: Math.floor(Math.random() * 2) + 4,
            location: locations[i],
            equipments: equipments[i % 5],
            tags: tags[i % 5]
        });
    }
    return logements;
};

export const logements = generateLogements(); 