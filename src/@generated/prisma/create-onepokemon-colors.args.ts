import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsCreateInput } from '../pokemon-colors/pokemon-colors-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonColorsArgs {

    @Field(() => pokemon_colorsCreateInput, {nullable:false})
    @Type(() => pokemon_colorsCreateInput)
    data!: pokemon_colorsCreateInput;
}
