import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationsCount {

    @Field(() => Int, {nullable:false})
    location_areas!: number;

    @Field(() => Int, {nullable:false})
    location_game_indices!: number;

    @Field(() => Int, {nullable:false})
    location_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution!: number;
}
