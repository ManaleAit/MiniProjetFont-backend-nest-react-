import { AdminAuthDTO } from './dto/AdminAuthDTO';
import { AdminRepository } from './admin.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AdminService {
    private adminRepo;
    private jwtService;
    constructor(adminRepo: AdminRepository, jwtService: JwtService);
    signIn(adminAuthDTO: AdminAuthDTO): Promise<{
        accessToken: string;
    }>;
    signUp(adminAuthDTO: AdminAuthDTO): Promise<void>;
    hashPassword(password: string, salt: string): Promise<string>;
}
