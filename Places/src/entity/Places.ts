import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Reviews } from './Reviews';

@Entity()
export class Place {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address_components?: string;
    
    @Column()
    latlng: number;

    @Column()
    placeName: string;

    @Column()
    rating?: number;

    @Column()
    type?: string;

    @Column()
    website?: string;
    
    @OneToMany(type => Place, place => place.review)
    review?: Reviews;

}
