import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsUpdateInput } from '../pokemon-colors/pokemon-colors-update.input';
import { Type } from 'class-transformer';
import { pokemon_colorsWhereUniqueInput } from '../pokemon-colors/pokemon-colors-where-unique.input';

@ArgsType()
export class UpdateOnepokemonColorsArgs {

    @Field(() => pokemon_colorsUpdateInput, {nullable:false})
    @Type(() => pokemon_colorsUpdateInput)
    data!: pokemon_colorsUpdateInput;

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_colorsWhereUniqueInput)
    where!: pokemon_colorsWhereUniqueInput;
}
