import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_color_namesUncheckedUpdateManyWithoutPokemon_colorsNestedInput } from '../pokemon-color-names/pokemon-color-names-unchecked-update-many-without-pokemon-colors-nested.input';

@InputType()
export class pokemon_colorsUncheckedUpdateWithoutPokemon_speciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_color_namesUncheckedUpdateManyWithoutPokemon_colorsNestedInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUncheckedUpdateManyWithoutPokemon_colorsNestedInput;
}
