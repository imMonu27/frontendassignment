const profiles = [
    {
        id: 1,
        name: "Ravi Sharma",
        title: "Software Engineer",
        avatar: "/static/mp1.jpg",
        background: "/static/bg1.jpg",
        bio: "An experienced developer specializing in full-stack web applications.",
        skills: ["JavaScript", "React", "Node.js"],
        social: {
            linkedin: "https://linkedin.com/in/ravisharma",
            twitter: "https://twitter.com/ravisharma",
            github: "https://github.com/ravisharma",
        },
        location: { lat: 28.6139, lng: 77.2090 }, // Delhi
    },
    {
        id: 2,
        name: "Priya Verma",
        title: "Product Manager",
        avatar: "/static/wp.jpg",
        background: "/static/bg2.jpg",
        bio: "Product manager specializing in Agile methodologies and UX design.",
        skills: ["Agile", "Product Management", "UX Design"],
        social: {
            linkedin: "https://linkedin.com/in/priyaverma",
            twitter: "https://twitter.com/priyaverma",
        },
        location: { lat: 19.0760, lng: 72.8777 }, // Mumbai
    },
    {
        id: 3,
        name: "Amit Desai",
        title: "Data Scientist",
        avatar: "/static/mp2.jpg",
        background: "/static/bg3.jpg",
        bio: "Data scientist with expertise in machine learning and big data analytics.",
        skills: ["Python", "TensorFlow", "SQL"],
        social: {
            linkedin: "https://linkedin.com/in/amitdesai",
            github: "https://github.com/amitdesai",
        },
        location: { lat: 12.9716, lng: 77.5946 }, // Bengaluru
    },
    {
        id: 4,
        name: "Anjali Gupta",
        title: "UI/UX Designer",
        avatar: "/static/wp2.jpg",
        background: "/static/bg4.jpg",
        bio: "Creative designer specializing in user-friendly interfaces and experiences.",
        skills: ["Figma", "Adobe XD", "Prototyping"],
        social: {
            linkedin: "https://linkedin.com/in/anjaligupta",
            twitter: "https://twitter.com/anjaligupta",
        },
        location: { lat: 22.5726, lng: 88.3639 }, // Kolkata
    },
    {
        id: 5,
        name: "Rohan Mehta",
        title: "DevOps Engineer",
        avatar: "/static/mp3.jpg",
        background: "/static/bg5.jpg",
        bio: "DevOps engineer skilled in CI/CD pipelines and cloud infrastructure.",
        skills: ["AWS", "Docker", "Kubernetes"],
        social: {
            linkedin: "https://linkedin.com/in/rohanmehta",
            github: "https://github.com/rohanmehta",
        },
        location: { lat: 13.0827, lng: 80.2707 }, // Chennai
    },
    {
        id: 6,
        name: "Meera Nair",
        title: "AI Researcher",
        avatar: "/static/wp3.jpg",
        background: "/static/wp3.jpg",
        bio: "AI researcher focusing on natural language processing and computer vision.",
        skills: ["Python", "PyTorch", "NLP"],
        social: {
            linkedin: "https://linkedin.com/in/meeranair",
            twitter: "https://twitter.com/meeranair",
        },
        location: { lat: 8.5241, lng: 76.9366 }, // Thiruvananthapuram
    },
    {
        id: 7,
        name: "Vikram Desai",
        title: "Cybersecurity Analyst",
        avatar: "/static/mp4.jpg",
        background: "/static/mp4.jpg",
        bio: "Cybersecurity expert ensuring secure systems and networks.",
        skills: ["Penetration Testing", "Ethical Hacking", "Incident Response"],
        social: {
            linkedin: "https://linkedin.com/in/vikramdesai",
            github: "https://github.com/vikramdesai",
        },
        location: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad
    },
    {
        id: 8,
        name: "Sneha Patil",
        title: "Marketing Specialist",
        avatar: "/static/p.jpg",
        background: "/static/bg8.jpg",
        bio: "Marketing specialist focusing on digital campaigns and branding.",
        skills: ["SEO", "Content Marketing", "Social Media"],
        social: {
            linkedin: "https://linkedin.com/in/snehapatil",
            twitter: "https://twitter.com/snehapatil",
        },
        location: { lat: 17.3850, lng: 78.4867 }, // Hyderabad
    },
    {
        id: 9,
        name: "Arjun Malhotra",
        title: "Blockchain Developer",
        avatar: "/static/mp5.jpg",
        background: "/static/bg9.jpg",
        bio: "Blockchain developer specializing in smart contracts and DeFi.",
        skills: ["Solidity", "Ethereum", "Hyperledger"],
        social: {
            linkedin: "https://linkedin.com/in/arjunmalhotra",
            github: "https://github.com/arjunmalhotra",
        },
        location: { lat: 15.2993, lng: 74.1240 }, // Goa
    },
    {
        id: 10,
        name: "Kavita Singh",
        title: "Cloud Architect",
        avatar: "/static/mp6.jpg",
        background: "/static/bg10.jpg",
        bio: "Cloud architect with a strong background in multi-cloud environments.",
        skills: ["AWS", "Azure", "Google Cloud"],
        social: {
            linkedin: "https://linkedin.com/in/kavitasingh",
        },
        location: { lat: 26.9124, lng: 75.7873 }, // Jaipur
    },
];

export default profiles;
