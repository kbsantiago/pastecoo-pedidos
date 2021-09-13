import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("Roles")
class Role {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column() 
    created_by: string;
    @CreateDateColumn()
    created_at: Date;
    @Column()
    updated_by: string;
    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
            this.created_by = "user";
            this.created_at = new Date();
        } else {
            this.updated_by = "user" 
            this.updated_at = new Date();
        }
    }
}

export { Role }