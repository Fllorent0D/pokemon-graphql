import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where.input';

@InputType()
export class Pokemon_species_flavor_textListRelationFilter {

    @Field(() => pokemon_species_flavor_textWhereInput, {nullable:true})
    every?: pokemon_species_flavor_textWhereInput;

    @Field(() => pokemon_species_flavor_textWhereInput, {nullable:true})
    some?: pokemon_species_flavor_textWhereInput;

    @Field(() => pokemon_species_flavor_textWhereInput, {nullable:true})
    none?: pokemon_species_flavor_textWhereInput;
}
