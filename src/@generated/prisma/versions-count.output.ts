import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VersionsCount {

    @Field(() => Int, {nullable:false})
    encounters!: number;

    @Field(() => Int, {nullable:false})
    location_area_encounter_rates!: number;

    @Field(() => Int, {nullable:false})
    pokemon_items!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    version_names!: number;
}
