import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesWhereInput } from '../pokemon-species-names/pokemon-species-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesWhereInput, {nullable:true})
    @Type(() => pokemon_species_namesWhereInput)
    where?: pokemon_species_namesWhereInput;
}
