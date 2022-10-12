import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesCreateInput } from '../pokemon-color-names/pokemon-color-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonColorNamesArgs {

    @Field(() => pokemon_color_namesCreateInput, {nullable:false})
    @Type(() => pokemon_color_namesCreateInput)
    data!: pokemon_color_namesCreateInput;
}
