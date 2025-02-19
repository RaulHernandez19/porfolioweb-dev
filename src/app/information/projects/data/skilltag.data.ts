import { Skilltag } from "../models/skilltag"
import { projectsIconComponent} from "../icons/projectsicon"
import { AngularIconComponent } from "../icons/angular.icon";
import { PythonIconComponent } from "../icons/python.icon";
import { HtmlIconComponent } from "../icons/html.icon";
import { JavascriptIconComponent } from "../icons/javascript.icon";
import { cssIconComponent } from "../icons/css.icon";
import { PowerbiIconComponent } from "../icons/powerbi.icon";
import { MongoIconComponent } from "../icons/mongo.icon";
import { NodeIconComponent } from "../icons/node.icon";
import { JiraIconComponent } from "../icons/jira.icon";

export const skilltagsData: Skilltag[]=
[
  {
    name: 'JavaScript',
    icon: JavascriptIconComponent,
    selected:false,
    colorP: "bg-yellow-400 dark:bg-yellow-700",
    colorS: "hover:bg-yellow-400 dark:hover:bg-yellow-700"
  },
  {
    name: 'Python',
    icon: PythonIconComponent,
    selected:false,
    colorP: "bg-blue-500 dark:bg-blue-800",
    colorS: "hover:bg-blue-500 dark:hover:bg-blue-800"
  },
  {
    name: 'HTML',
    icon: HtmlIconComponent,
    selected:false,
    colorP: "bg-orange-400 dark:bg-orange-700",
    colorS: "hover:bg-orange-400 dark:hover:bg-orange-700"
  },
  {
    name: 'CSS',
    icon: cssIconComponent,
    selected:false,
    colorP: "bg-blue-600 dark:bg-blue-700",
    colorS: "hover:bg-blue-600 dark:hover:bg-blue-700"
  },
  {
    name: 'Power BI',
    icon: PowerbiIconComponent,
    selected:false,
    colorP: "bg-amber-400 dark:bg-amber-700",
    colorS: "hover:bg-amber-400 dark:hover:bg-amber-700"
  },
  {
    name: 'Mongo DB',
    icon: MongoIconComponent,
    selected:false,
    colorP: "bg-green-500 dark:bg-green-700",
    colorS: "hover:bg-green-500 dark:hover:bg-green-700"
  },
  {
    name: 'Angular',
    icon: AngularIconComponent,
    selected:false,
    colorP: "bg-red-500 dark:bg-red-700",
    colorS: "hover:bg-red-500 dark:hover:bg-red-700"
  },
  {
    name: 'Node.js',
    icon: NodeIconComponent,
    selected:false,
    colorP: "bg-lime-500 dark:bg-lime-600",
    colorS: "hover:bg-lime-500 dark:hover:bg-lime-600"
  },
  {
    name: 'Jira',
    icon: JiraIconComponent,
    selected:false,
    colorP: "bg-sky-500 dark:bg-sky-600",
    colorS: "hover:bg-sky-500 dark:hover:bg-sky-600"
  }
];

