import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textCreateInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textCreateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textCreateInput)
    data!: pokemon_species_flavor_textCreateInput;
}
