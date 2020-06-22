import { BaseEntity } from "typeorm";
import { Filiere } from "src/filieres/filiere.entity";
import { DeplomesCandidature } from "src/deplomes-candidature/deplomes-candidature.entity";
declare enum CANDIDATURE_STATU {
    Active = 1,
    Desactive = 2
}
export declare class Candidature extends BaseEntity {
    massar: string;
    cin: string;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    pass_salt: string;
    status: CANDIDATURE_STATU;
    photo: string;
    niveau: number;
    adresse: string;
    date_naissance: Date;
    depot_dossier: boolean;
    presence: boolean;
    verified_at: Date;
    created_at: Date;
    updated_at: Date;
    filiere: Filiere;
    liste_deplomes: DeplomesCandidature[];
    validatePassword(password: string): Promise<boolean>;
}
export {};
