import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateManyWithoutItem_fling_effectsNestedInput } from '../items/items-update-many-without-item-fling-effects-nested.input';

@InputType()
export class item_fling_effectsUpdateWithoutItem_fling_effect_proseInput {

    @Field(() => itemsUpdateManyWithoutItem_fling_effectsNestedInput, {nullable:true})
    items?: itemsUpdateManyWithoutItem_fling_effectsNestedInput;
}
