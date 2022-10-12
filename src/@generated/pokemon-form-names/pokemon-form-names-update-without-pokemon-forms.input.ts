import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_form_namesNestedInput } from '../languages/languages-update-one-required-without-pokemon-form-names-nested.input';

@InputType()
export class pokemon_form_namesUpdateWithoutPokemon_formsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    pokemon_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_form_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_form_namesNestedInput;
}
