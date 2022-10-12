import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokedexesCount {

    @Field(() => Int, {nullable:false})
    generations!: number;

    @Field(() => Int, {nullable:false})
    pokedex_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_dex_numbers!: number;

    @Field(() => Int, {nullable:false})
    version_groups!: number;
}
