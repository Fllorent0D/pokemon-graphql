import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_formsCount {

    @Field(() => Int, {nullable:false})
    pokemon_form_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_form_pokeathlon_stats!: number;
}
