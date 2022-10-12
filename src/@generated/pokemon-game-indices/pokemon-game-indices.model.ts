import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generations } from '../generations/generations.model';
import { pokemon } from '../pokemon/pokemon.model';

@ObjectType()
export class pokemon_game_indices {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => generations, {nullable:false})
    generations?: generations;

    @Field(() => pokemon, {nullable:false})
    pokemon?: pokemon;
}
