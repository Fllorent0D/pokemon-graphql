import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GenerationsCount {

    @Field(() => Int, {nullable:false})
    abilities!: number;

    @Field(() => Int, {nullable:false})
    generation_names!: number;

    @Field(() => Int, {nullable:false})
    item_game_indices!: number;

    @Field(() => Int, {nullable:false})
    location_game_indices!: number;

    @Field(() => Int, {nullable:false})
    moves!: number;

    @Field(() => Int, {nullable:false})
    pokemon_game_indices!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species!: number;

    @Field(() => Int, {nullable:false})
    types!: number;

    @Field(() => Int, {nullable:false})
    version_groups!: number;
}
