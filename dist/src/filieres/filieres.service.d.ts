import { Filiere } from './filiere.entity';
import { FiliereRepository } from './filiere.repository';
export declare class FilieresService {
    private filiereRepository;
    constructor(filiereRepository: FiliereRepository);
    getAllFilieres(): Promise<Filiere[]>;
    createFiliere(nom_filiere: string): Promise<Filiere>;
    getById(id_filiere: number): Promise<Filiere>;
}
