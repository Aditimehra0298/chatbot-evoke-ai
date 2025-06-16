export interface Client {
  name: string;
  logo: string;
  website: string;
  industry: string;
  description: string;
  services: string[];
  established?: string;
  isMainCompany?: boolean;
}

export const clients: Client[] = [
  {
    name: "DamnArt",
    logo: "/unnamed (1).png",
    website: "https://www.damnart.com/",
    industry: "Digital Advertisement Marketing Network",
    description: "Digital Advertisement Marketing Network",
    services: ["AI Solutions", "Digital Marketing", "Creative Services"],
    established: "2020",
    isMainCompany: true
  },
  {
    name: "MedDevices",
    logo: "/meddevices.png",
    website: "https://www.meddevices.net/",
    industry: "Quality & Regulatory Compliance Services",
    description: "Quality & Regulatory Compliance Services",
    services: ["Medical Devices", "Compliance", "Quality Assurance"],
    established: "2018"
  },
  {
    name: "EuroCert Asia",
    logo: "/eurocert.png",
    website: "https://www.eurocert.asia/",
    industry: "International Certification & Compliances",
    description: "International Certification & Compliance",
    services: ["Certification", "Compliance", "Quality Systems"],
    established: "2015"
  },
  {
    name: "EuroTech World Canada",
    logo: "/eurotech.png",
    website: "https://canada.eurotechworld.net/",
    industry: "Advanced Technology & Innovation Hub",
    description: "Advanced Technology & Innovation Hub",
    services: ["Technology Solutions", "Innovation", "Consulting"],
    established: "2019"
  },
  {
    name: "ITC India",
    logo: "/itc.png",
    website: "https://www.itcindia.org/",
    industry: "Electrical Safety Testing Laboratory",
    description: "Electrical Safety Testing Laboratory",
    services: ["Testing", "Certification", "Safety Standards"],
    established: "2012"
  },
  {
    name: "Sustainable Futures Trainings",
    logo: "/sf.png",
    website: "https://www.sftrainings.org/",
    industry: "Accredited Training Provider",
    description: "Accredited Training Provider",
    services: ["Training", "Certification", "Sustainability"],
    established: "2021"
  }
];
