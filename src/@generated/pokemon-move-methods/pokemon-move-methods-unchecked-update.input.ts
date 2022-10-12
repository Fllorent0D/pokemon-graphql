import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_move_method_proseUncheckedUpdateManyWithoutPokemon_move_methodsNestedInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-unchecked-update-many-without-pokemon-move-methods-nested.input';

@InputType()
export class pokemon_move_methodsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_move_method_proseUncheckedUpdateManyWithoutPokemon_move_methodsNestedInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseUncheckedUpdateManyWithoutPokemon_move_methodsNestedInput;
}
