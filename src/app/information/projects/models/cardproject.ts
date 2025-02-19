import { Skilltag } from "./skilltag";

export class CardProject{
  img! :string;
  title! :string;
  desc! :string;
  gitlink!:string;
  pagelink!:string;
  tags! : Skilltag[];
  visible:boolean=true;
  rows!:number;
}
