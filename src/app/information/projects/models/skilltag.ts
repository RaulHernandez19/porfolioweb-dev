import { Type } from "@angular/core";

export class Skilltag {
  name!: string;
  icon!: Type<any>;
  selected: boolean = false;
  colorP: string = "bg-black";
  colorS!: string;


}
