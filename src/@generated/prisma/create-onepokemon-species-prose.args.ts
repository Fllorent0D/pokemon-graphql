import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseCreateInput } from '../pokemon-species-prose/pokemon-species-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseCreateInput, {nullable:false})
    @Type(() => pokemon_species_proseCreateInput)
    data!: pokemon_species_proseCreateInput;
}
