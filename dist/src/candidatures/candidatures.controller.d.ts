import { CandidaturesService } from './candidatures.service';
import { Candidature } from './candidature.entity';
import { CreateCandidatureDTO } from './dto/createCandidatureDTO';
import { AuthDTO } from './dto/AuthDTO';
export declare class CandidaturesController {
    private candidatureService;
    constructor(candidatureService: CandidaturesService);
    getCandidatures(req: any): Promise<Candidature[]>;
    createCandidature(createCandDTO: CreateCandidatureDTO): Promise<void>;
    signIn(authDTO: AuthDTO): Promise<{
        accessToken: string;
    }>;
}
