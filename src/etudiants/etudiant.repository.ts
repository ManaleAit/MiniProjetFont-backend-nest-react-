import { Repository, EntityRepository } from "typeorm";
import { etudiant } from "./etudiant.entity";
import {AuthDTO} from './dto/AuthDTO';

@EntityRepository( etudiant)
export class etudiantRepository extends Repository< etudiant>{
    async validateUserPassword(authdto: AuthDTO) :Promise<string>{
        const { massar, email, password } = authdto;
        const etudiant=await this.findOne({massar,email});
        if(etudiant && await etudiant.validatePassword(password)){
            return massar;
        }
        else{
            return null;
        }
    
    }
}