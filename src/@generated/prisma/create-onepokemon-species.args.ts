import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesCreateInput } from '../pokemon-species/pokemon-species-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonSpeciesArgs {

    @Field(() => pokemon_speciesCreateInput, {nullable:false})
    @Type(() => pokemon_speciesCreateInput)
    data!: pokemon_speciesCreateInput;
}
