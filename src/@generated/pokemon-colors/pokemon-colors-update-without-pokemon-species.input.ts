import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_color_namesUpdateManyWithoutPokemon_colorsNestedInput } from '../pokemon-color-names/pokemon-color-names-update-many-without-pokemon-colors-nested.input';

@InputType()
export class pokemon_colorsUpdateWithoutPokemon_speciesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_color_namesUpdateManyWithoutPokemon_colorsNestedInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUpdateManyWithoutPokemon_colorsNestedInput;
}
