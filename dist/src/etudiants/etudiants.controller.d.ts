import { etudiantsService } from './etudiant.service';
import { CreateEtudiantDTO } from './dto/CreateEtudiantDTO';
import { etudiant } from './etudiant.entity';
import { AuthDTO } from 'src/candidatures/dto/AuthDTO';
export declare class EtudiantsController {
    private etudiantsService;
    constructor(etudiantsService: etudiantsService);
    getetudiants(): Promise<etudiant[]>;
    createEtudiant(createEtDTO: CreateEtudiantDTO): Promise<void>;
    getTudo(ma: string): Promise<etudiant>;
    update(id: any, contactData: CreateEtudiantDTO): Promise<any>;
    delete(id: any): Promise<any>;
    choixFiliere(nbplaceInfo: any, nbplaceIndus: any, nbplaceGPMC: any, nbplaceGTR: any): Promise<void>;
    getdiliere(ma: string): Promise<any>;
    uploadMultipleFiles(files: any): Promise<any[]>;
    seeUploadedFile(image: any, res: any): any;
    signIn(authDTO: AuthDTO): Promise<{
        accessToken: string;
    }>;
}
