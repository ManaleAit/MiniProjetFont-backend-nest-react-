import { AdminService } from './admin.service';
import { AdminAuthDTO } from './dto/AdminAuthDTO';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    SignIn(adminAuthDTO: AdminAuthDTO): Promise<{
        accessToken: string;
    }>;
    SignUp(adminAuthDTO: AdminAuthDTO): Promise<void>;
}
