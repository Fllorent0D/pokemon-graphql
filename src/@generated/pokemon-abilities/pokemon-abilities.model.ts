import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { abilities } from '../abilities/abilities.model';
import { pokemon } from '../pokemon/pokemon.model';

@ObjectType()
export class pokemon_abilities {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Boolean, {nullable:false})
    is_dream!: boolean;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => abilities, {nullable:false})
    abilities?: abilities;

    @Field(() => pokemon, {nullable:false})
    pokemon?: pokemon;
}
