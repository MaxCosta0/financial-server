import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'debt'})
export class Debt {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'amount'})
    amount: number

    @Column({name: 'start_date'})
    startDate: Date

    @Column({name: 'replicate'})
    replicate: number
}