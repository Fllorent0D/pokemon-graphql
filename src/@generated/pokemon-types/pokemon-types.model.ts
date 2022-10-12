import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { types } from '../types/types.model';
import { pokemon } from '../pokemon/pokemon.model';

@ObjectType()
export class pokemon_types {

    @HideField()
    pokemon_id!: number;

    @HideField()
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => types, {nullable:false})
    types?: types;

    @Field(() => pokemon, {nullable:false})
    pokemon?: pokemon;
}
