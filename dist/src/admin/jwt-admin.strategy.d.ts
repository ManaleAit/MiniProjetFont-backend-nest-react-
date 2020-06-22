import { AdminRepository } from './admin.repository';
import { JwtAdminPayload } from './jwt-admin-payload.interface';
import { Admin } from './admin.entity';
import { Strategy } from "passport-jwt";
declare const JwtAdminStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    private adminRepo;
    constructor(adminRepo: AdminRepository);
    validate(payload: JwtAdminPayload): Promise<Admin>;
}
export {};
