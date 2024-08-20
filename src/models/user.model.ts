import { Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({ tableName: "user" })
export class UserModel extends Model <UserModel>{
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.STRING)
    username: string;

    @Unique
    @Column(DataType.STRING)
    password: string;
}
