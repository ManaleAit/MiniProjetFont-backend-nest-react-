import { Candidature } from './candidature.entity';
import { CandidatureRepository } from './candidature.repository';
import { CreateCandidatureDTO } from './dto/createCandidatureDTO';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { AuthDTO } from './dto/AuthDTO';
import { JwtService } from '@nestjs/jwt';
export declare class CandidaturesService {
    private candidatureRepository;
    private filiereRepository;
    private jwtService;
    constructor(candidatureRepository: CandidatureRepository, filiereRepository: FiliereRepository, jwtService: JwtService);
    getAllCandidatures(): Promise<Candidature[]>;
    createCandidature(createCandDTO: CreateCandidatureDTO): Promise<void>;
    signIn(authDTO: AuthDTO): Promise<{
        accessToken: string;
    }>;
    hashPassword(password: string, salt: string): Promise<string>;
}
