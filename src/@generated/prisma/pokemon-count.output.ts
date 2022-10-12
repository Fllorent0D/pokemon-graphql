import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonCount {

    @Field(() => Int, {nullable:false})
    encounters!: number;

    @Field(() => Int, {nullable:false})
    pokemon_abilities!: number;

    @Field(() => Int, {nullable:false})
    pokemon_forms!: number;

    @Field(() => Int, {nullable:false})
    pokemon_game_indices!: number;

    @Field(() => Int, {nullable:false})
    pokemon_items!: number;

    @Field(() => Int, {nullable:false})
    pokemon_stats!: number;

    @Field(() => Int, {nullable:false})
    pokemon_types!: number;
}
