import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseWhereInput } from '../pokemon-species-prose/pokemon-species-prose-where.input';

@InputType()
export class Pokemon_species_proseListRelationFilter {

    @Field(() => pokemon_species_proseWhereInput, {nullable:true})
    every?: pokemon_species_proseWhereInput;

    @Field(() => pokemon_species_proseWhereInput, {nullable:true})
    some?: pokemon_species_proseWhereInput;

    @Field(() => pokemon_species_proseWhereInput, {nullable:true})
    none?: pokemon_species_proseWhereInput;
}
