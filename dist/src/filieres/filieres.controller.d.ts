import { FilieresService } from './filieres.service';
import { Filiere } from './filiere.entity';
export declare class FilieresController {
    private filiereService;
    constructor(filiereService: FilieresService);
    getAllFilieres(): Promise<Filiere[]>;
    getTudo(fil: number): Promise<Filiere>;
    createFiliere(body: any): Promise<Filiere>;
    deleteFiliere(body: any): Promise<Filiere>;
    updateFiliere(body: any): Promise<Filiere>;
}
