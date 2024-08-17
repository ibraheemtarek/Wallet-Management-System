import { Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({ tableName: "user", })
export class UserModel extends Model {
    
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;
    
    @Unique
    @Column(DataType.STRING)
    username: string;
}
