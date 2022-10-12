import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_color_namesNestedInput } from '../languages/languages-update-one-required-without-pokemon-color-names-nested.input';
import { pokemon_colorsUpdateOneRequiredWithoutPokemon_color_namesNestedInput } from '../pokemon-colors/pokemon-colors-update-one-required-without-pokemon-color-names-nested.input';

@InputType()
export class pokemon_color_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_color_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_color_namesNestedInput;

    @Field(() => pokemon_colorsUpdateOneRequiredWithoutPokemon_color_namesNestedInput, {nullable:true})
    pokemon_colors?: pokemon_colorsUpdateOneRequiredWithoutPokemon_color_namesNestedInput;
}
