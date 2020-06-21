import { JwtPayload } from './jwt-payload.interface';
import { Strategy } from "passport-jwt";
import { CandidatureRepository } from './candidature.repository';
import { Candidature } from './candidature.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private candRepo;
    constructor(candRepo: CandidatureRepository);
    validate(payload: JwtPayload): Promise<Candidature>;
}
export {};
