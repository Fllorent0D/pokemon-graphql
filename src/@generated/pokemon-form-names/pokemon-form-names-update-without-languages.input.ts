import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { pokemon_formsUpdateOneRequiredWithoutPokemon_form_namesNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-pokemon-form-names-nested.input';

@InputType()
export class pokemon_form_namesUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    pokemon_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => pokemon_formsUpdateOneRequiredWithoutPokemon_form_namesNestedInput, {nullable:true})
    pokemon_forms?: pokemon_formsUpdateOneRequiredWithoutPokemon_form_namesNestedInput;
}
