import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereInput } from '../pokemon-species/pokemon-species-where.input';

@InputType()
export class Pokemon_speciesListRelationFilter {

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    every?: pokemon_speciesWhereInput;

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    some?: pokemon_speciesWhereInput;

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    none?: pokemon_speciesWhereInput;
}
