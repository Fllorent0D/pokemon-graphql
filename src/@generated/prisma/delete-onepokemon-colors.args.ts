import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsWhereUniqueInput } from '../pokemon-colors/pokemon-colors-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonColorsArgs {

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_colorsWhereUniqueInput)
    where!: pokemon_colorsWhereUniqueInput;
}
