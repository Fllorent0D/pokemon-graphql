import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_color_namesInput } from '../languages/languages-create-nested-one-without-pokemon-color-names.input';

@InputType()
export class pokemon_color_namesCreateWithoutPokemon_colorsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_color_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_color_namesInput;
}
