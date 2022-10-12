import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Location_areasCount {

    @Field(() => Int, {nullable:false})
    encounters!: number;

    @Field(() => Int, {nullable:false})
    location_area_encounter_rates!: number;

    @Field(() => Int, {nullable:false})
    location_area_prose!: number;
}
