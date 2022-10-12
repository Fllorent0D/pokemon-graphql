import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesWhereUniqueInput } from './pokemon-color-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesUpdateWithoutPokemon_colorsInput } from './pokemon-color-names-update-without-pokemon-colors.input';

@InputType()
export class pokemon_color_namesUpdateWithWhereUniqueWithoutPokemon_colorsInput {

    @Field(() => pokemon_color_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    where!: pokemon_color_namesWhereUniqueInput;

    @Field(() => pokemon_color_namesUpdateWithoutPokemon_colorsInput, {nullable:false})
    @Type(() => pokemon_color_namesUpdateWithoutPokemon_colorsInput)
    data!: pokemon_color_namesUpdateWithoutPokemon_colorsInput;
}
