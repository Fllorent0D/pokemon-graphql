import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesCreateInput } from '../pokemon-habitat-names/pokemon-habitat-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesCreateInput, {nullable:false})
    @Type(() => pokemon_habitat_namesCreateInput)
    data!: pokemon_habitat_namesCreateInput;
}
