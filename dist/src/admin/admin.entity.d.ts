import { BaseEntity } from "typeorm";
export declare class Admin extends BaseEntity {
    id_admin: number;
    username: string;
    password: string;
    pass_salt: string;
    validatePassword(password: string): Promise<boolean>;
}
