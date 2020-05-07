import { IsString, MinLength, MaxLength, IsNumber, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Double } from "typeorm";
import { isNumber } from "util";

export class CreateEtudiantDTO{


    lieuNaissance:string
    dateNaissance:string;

    massar:string;

    cin:string;

    password:string;
    confirmPassword:string;
    email:string;
    
    confirmEmail:string;

    note:Double;

    externe:boolean;
    lastname_fr:string;


    lastname_ar:string;


    firstname_fr:string;

 
    firstname_ar:string;


    nationalite:string;

 
    address:string;


    telephone:string;


     nom_Prenom_Pere:string;

    profession_Pere:string;


    nom_Prenom_mere:string;

    profession_mere:string;

   
    adresse_parent:string;

    annee_Bac:string;


    type_Bac:string;

    mention:string;

  

    lycee:string;


    delegue:string;

 
    academie:string;
   

    photo:string;

    niveau:string;

    id_filiere:number;

    teleParent:string;
    status:string;

    diplomePrecedent:string;
    etablissement:string;
    ville:string;

  
    classement:number;

  
    choixFilere1:number;

    choixFilere2:number;

    choixFilere3:number;
    
    choixFilere4:number;

}