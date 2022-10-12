import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereInput } from '../pokemon-abilities/pokemon-abilities-where.input';

@InputType()
export class Pokemon_abilitiesListRelationFilter {

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    every?: pokemon_abilitiesWhereInput;

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    some?: pokemon_abilitiesWhereInput;

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    none?: pokemon_abilitiesWhereInput;
}
