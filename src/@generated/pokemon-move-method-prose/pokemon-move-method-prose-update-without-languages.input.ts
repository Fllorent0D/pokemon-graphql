import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { pokemon_move_methodsUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-pokemon-move-method-prose-nested.input';

@InputType()
export class pokemon_move_method_proseUpdateWithoutLanguagesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => pokemon_move_methodsUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput, {nullable:true})
    pokemon_move_methods?: pokemon_move_methodsUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput;
}
