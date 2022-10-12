import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_shape_proseNestedInput } from '../languages/languages-update-one-required-without-pokemon-shape-prose-nested.input';

@InputType()
export class pokemon_shape_proseUpdateWithoutPokemon_shapesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    awesome_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_shape_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_shape_proseNestedInput;
}
