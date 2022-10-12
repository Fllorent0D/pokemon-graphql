import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsWhereInput } from '../pokemon-colors/pokemon-colors-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonColorsArgs {

    @Field(() => pokemon_colorsWhereInput, {nullable:true})
    @Type(() => pokemon_colorsWhereInput)
    where?: pokemon_colorsWhereInput;
}
