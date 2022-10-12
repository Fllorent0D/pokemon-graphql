import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput } from '../languages/languages-update-one-required-without-pokemon-move-method-prose-nested.input';
import { pokemon_move_methodsUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-pokemon-move-method-prose-nested.input';

@InputType()
export class pokemon_move_method_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput;

    @Field(() => pokemon_move_methodsUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput, {nullable:true})
    pokemon_move_methods?: pokemon_move_methodsUpdateOneRequiredWithoutPokemon_move_method_proseNestedInput;
}
