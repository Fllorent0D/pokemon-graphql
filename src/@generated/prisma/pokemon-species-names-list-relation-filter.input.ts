import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesWhereInput } from '../pokemon-species-names/pokemon-species-names-where.input';

@InputType()
export class Pokemon_species_namesListRelationFilter {

    @Field(() => pokemon_species_namesWhereInput, {nullable:true})
    every?: pokemon_species_namesWhereInput;

    @Field(() => pokemon_species_namesWhereInput, {nullable:true})
    some?: pokemon_species_namesWhereInput;

    @Field(() => pokemon_species_namesWhereInput, {nullable:true})
    none?: pokemon_species_namesWhereInput;
}
