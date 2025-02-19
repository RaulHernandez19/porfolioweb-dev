import { Skilltag } from "../models/skilltag";
import { projectsIconComponent } from "../icons/projectsicon";
import { CardProject } from "../models/cardproject";
import { skilltagsData } from "./skilltag.data";

export const cardProjectsData: CardProject[] = [
  {
    img: "assets/NasaHackatlonShot.png",
    title: "Nasa Hackatlon",
    desc: "Proyecto hecho para un hackatlon de la NASA en donde, con base a una Api, se muestran objetos cercanos a la tierra con distancias a escala junto con su nombre.",
    gitlink: "https://github.com/RaulHernandez19/InsectEmpire",
    pagelink: "https://nasa-hackatlon-collinspp-proyect.onrender.com",
    tags: [
      skilltagsData.find(tag => tag.name === 'Python')!,
      skilltagsData.find(tag => tag.name === 'JavaScript')!,
      skilltagsData.find(tag => tag.name === 'Node.js')!,
      skilltagsData.find(tag => tag.name === 'CSS')!,
      skilltagsData.find(tag => tag.name === 'HTML')!,

    ],
    visible: true,
    rows: 3
  },
  {
    img: "assets/InsectEmpireShot.png",
    title: "Insect Empire",
    desc: "Página web que se nutre de la información en tiempo real de la Api de GBIF para mostrar imagen y nombre de diferentes insectos, siendo clasificados por su tipo.",
    gitlink: "https://github.com/RaulHernandez19/InsectEmpire",
    pagelink: "https://raulhernandez19.github.io/InsectEmpire/",
    tags: [
      skilltagsData.find(tag => tag.name === 'Angular')!,
      skilltagsData.find(tag => tag.name === 'JavaScript')!,
      skilltagsData.find(tag => tag.name === 'Node.js')!,
      skilltagsData.find(tag => tag.name === 'CSS')!,
      skilltagsData.find(tag => tag.name === 'HTML')!,
    ],
    visible: true,
    rows: 3
  },
];
