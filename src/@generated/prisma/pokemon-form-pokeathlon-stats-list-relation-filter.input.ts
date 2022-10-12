import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsWhereInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-where.input';

@InputType()
export class Pokemon_form_pokeathlon_statsListRelationFilter {

    @Field(() => pokemon_form_pokeathlon_statsWhereInput, {nullable:true})
    every?: pokemon_form_pokeathlon_statsWhereInput;

    @Field(() => pokemon_form_pokeathlon_statsWhereInput, {nullable:true})
    some?: pokemon_form_pokeathlon_statsWhereInput;

    @Field(() => pokemon_form_pokeathlon_statsWhereInput, {nullable:true})
    none?: pokemon_form_pokeathlon_statsWhereInput;
}
