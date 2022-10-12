import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateWithoutPokemon_color_namesInput } from './pokemon-colors-create-without-pokemon-color-names.input';

@InputType()
export class pokemon_colorsCreateOrConnectWithoutPokemon_color_namesInput {

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_colorsWhereUniqueInput)
    where!: pokemon_colorsWhereUniqueInput;

    @Field(() => pokemon_colorsCreateWithoutPokemon_color_namesInput, {nullable:false})
    @Type(() => pokemon_colorsCreateWithoutPokemon_color_namesInput)
    create!: pokemon_colorsCreateWithoutPokemon_color_namesInput;
}
