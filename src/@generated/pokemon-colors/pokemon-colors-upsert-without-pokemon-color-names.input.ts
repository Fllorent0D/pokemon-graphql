import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsUpdateWithoutPokemon_color_namesInput } from './pokemon-colors-update-without-pokemon-color-names.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateWithoutPokemon_color_namesInput } from './pokemon-colors-create-without-pokemon-color-names.input';

@InputType()
export class pokemon_colorsUpsertWithoutPokemon_color_namesInput {

    @Field(() => pokemon_colorsUpdateWithoutPokemon_color_namesInput, {nullable:false})
    @Type(() => pokemon_colorsUpdateWithoutPokemon_color_namesInput)
    update!: pokemon_colorsUpdateWithoutPokemon_color_namesInput;

    @Field(() => pokemon_colorsCreateWithoutPokemon_color_namesInput, {nullable:false})
    @Type(() => pokemon_colorsCreateWithoutPokemon_color_namesInput)
    create!: pokemon_colorsCreateWithoutPokemon_color_namesInput;
}
