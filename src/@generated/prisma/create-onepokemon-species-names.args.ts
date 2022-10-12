import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesCreateInput } from '../pokemon-species-names/pokemon-species-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesCreateInput, {nullable:false})
    @Type(() => pokemon_species_namesCreateInput)
    data!: pokemon_species_namesCreateInput;
}
