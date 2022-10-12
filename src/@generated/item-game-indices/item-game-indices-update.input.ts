import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { generationsUpdateOneRequiredWithoutItem_game_indicesNestedInput } from '../generations/generations-update-one-required-without-item-game-indices-nested.input';
import { itemsUpdateOneRequiredWithoutItem_game_indicesNestedInput } from '../items/items-update-one-required-without-item-game-indices-nested.input';

@InputType()
export class item_game_indicesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => generationsUpdateOneRequiredWithoutItem_game_indicesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutItem_game_indicesNestedInput;

    @Field(() => itemsUpdateOneRequiredWithoutItem_game_indicesNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_game_indicesNestedInput;
}
