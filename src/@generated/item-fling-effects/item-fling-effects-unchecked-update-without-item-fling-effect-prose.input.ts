import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { itemsUncheckedUpdateManyWithoutItem_fling_effectsNestedInput } from '../items/items-unchecked-update-many-without-item-fling-effects-nested.input';

@InputType()
export class item_fling_effectsUncheckedUpdateWithoutItem_fling_effect_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => itemsUncheckedUpdateManyWithoutItem_fling_effectsNestedInput, {nullable:true})
    items?: itemsUncheckedUpdateManyWithoutItem_fling_effectsNestedInput;
}
