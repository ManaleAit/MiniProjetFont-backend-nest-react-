import { BaseEntity } from "typeorm";
import { Candidature } from "src/candidatures/candidature.entity";
import { etudiant } from "src/etudiants/etudiant.entity";
export declare class Filiere extends BaseEntity {
    id_filiere: number;
    nom_filiere: string;
    created_at: Date;
    updated_at: Date;
    liste_candidature: Candidature[];
    liste_etudiant: etudiant[];
}
