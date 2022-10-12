import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { item_fling_effect_proseUncheckedUpdateManyWithoutItem_fling_effectsNestedInput } from '../item-fling-effect-prose/item-fling-effect-prose-unchecked-update-many-without-item-fling-effects-nested.input';
import { itemsUncheckedUpdateManyWithoutItem_fling_effectsNestedInput } from '../items/items-unchecked-update-many-without-item-fling-effects-nested.input';

@InputType()
export class item_fling_effectsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => item_fling_effect_proseUncheckedUpdateManyWithoutItem_fling_effectsNestedInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseUncheckedUpdateManyWithoutItem_fling_effectsNestedInput;

    @Field(() => itemsUncheckedUpdateManyWithoutItem_fling_effectsNestedInput, {nullable:true})
    items?: itemsUncheckedUpdateManyWithoutItem_fling_effectsNestedInput;
}
