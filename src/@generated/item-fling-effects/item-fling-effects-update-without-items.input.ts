import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseUpdateManyWithoutItem_fling_effectsNestedInput } from '../item-fling-effect-prose/item-fling-effect-prose-update-many-without-item-fling-effects-nested.input';

@InputType()
export class item_fling_effectsUpdateWithoutItemsInput {

    @Field(() => item_fling_effect_proseUpdateManyWithoutItem_fling_effectsNestedInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseUpdateManyWithoutItem_fling_effectsNestedInput;
}
