import { JwtPayload } from './jwt-payload.interface';
import { Strategy } from "passport-jwt";
import { etudiantRepository } from './etudiant.repository';
import { etudiant } from './etudiant.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private candRepo;
    constructor(candRepo: etudiantRepository);
    validate(payload: JwtPayload): Promise<etudiant>;
}
export {};
