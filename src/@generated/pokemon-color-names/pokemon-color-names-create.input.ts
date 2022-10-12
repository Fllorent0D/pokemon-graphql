import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_color_namesInput } from '../languages/languages-create-nested-one-without-pokemon-color-names.input';
import { pokemon_colorsCreateNestedOneWithoutPokemon_color_namesInput } from '../pokemon-colors/pokemon-colors-create-nested-one-without-pokemon-color-names.input';

@InputType()
export class pokemon_color_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_color_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_color_namesInput;

    @Field(() => pokemon_colorsCreateNestedOneWithoutPokemon_color_namesInput, {nullable:false})
    pokemon_colors!: pokemon_colorsCreateNestedOneWithoutPokemon_color_namesInput;
}
