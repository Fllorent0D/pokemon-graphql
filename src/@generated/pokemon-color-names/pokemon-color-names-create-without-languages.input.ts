import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsCreateNestedOneWithoutPokemon_color_namesInput } from '../pokemon-colors/pokemon-colors-create-nested-one-without-pokemon-color-names.input';

@InputType()
export class pokemon_color_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => pokemon_colorsCreateNestedOneWithoutPokemon_color_namesInput, {nullable:false})
    pokemon_colors!: pokemon_colorsCreateNestedOneWithoutPokemon_color_namesInput;
}
