import { BaseEntity } from "typeorm";
import { Candidature } from "src/candidatures/candidature.entity";
export declare class DeplomesCandidature extends BaseEntity {
    id_deplome: number;
    type_deplome: string;
    etablissement: string;
    deplome_scan: string;
    notes: {
        semester: string;
        note: number;
    };
    redoublement: string;
    villeEtablissement: string;
    anneeDiplome: string;
    created_at: Date;
    updated_at: Date;
    candidature: Candidature;
}
