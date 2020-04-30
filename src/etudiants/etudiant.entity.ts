import { Entity, BaseEntity, PrimaryColumn,ManyToOne, Column,Double } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Filiere } from "src/filieres/filiere.entity";

@Entity()
export class etudiant extends BaseEntity{
    
    @PrimaryColumn("varchar",{length:30})
    massar:string;

    @Column("varchar", { length: 30 })
    cin:string;

    @Column("varchar", { length: 100 })
    password:string;

    @Column("varchar", { length: 30 })
    email:string;

    @Column("double")
    note:Double;

    @Column("varchar", { length:100})
    pass_salt:string;


   
    @Column("varchar", { length: 30 })
    lastname_fr:string;

    @Column("varchar", { length: 30 })
    lastname_ar:string;

    @Column("varchar", { length: 30 })
    firstname_fr:string;

    @Column("varchar", { length: 30 })
    firstname_ar:string;

    @Column("varchar", { length: 30 })
    nationalite:string;

    @Column("varchar", { length: 30 })
    address:string;

    @Column("varchar", { length: 20 })
    telephone:string;

    @Column("varchar", { length: 100 })
     nom_Prenom_Pere:string;

    @Column("varchar", { length: 100 })
    profession_Pere:string;

    @Column("varchar", { length: 100 })
    nom_Prenom_mere:string;

    @Column("varchar", { length: 100 })
    profession_mere:string;

    @Column("varchar", { length: 100})
    adresse_parent:string;

    @Column("varchar", { length: 30 })
    parents_phone:string;

    @Column("varchar", { length: 30 })
    annee_Bac:string;

    @Column("varchar", { length: 100})
    type_Bac:string;

    @Column("varchar", { length: 100 })
    mention:string;


    @Column("varchar", { length: 100 })
    lycee:string;

    @Column("varchar", { length: 100})
    delegue:string;

    @Column("varchar", { length:100 })
    academie:string;

    @Column("varchar", { length: 100 })
    picture:string;



    
    @Column("varchar", { length: 100 })
    niveau:string;

    @ManyToOne(type => Filiere, filiere => filiere.liste_etudiant)
    filiere: Filiere;


        
    @Column("varchar", { length: 100 })
    status:string;

    @Column("varchar", { length: 100 })
    Type_diplome:string;

    async validatePassword(password:string):Promise<Boolean>{
        const  hash=await bcrypt.hash(password,this.pass_salt);
         return hash===this.password;
     }

 
}