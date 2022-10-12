import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseCreateNestedManyWithoutItem_fling_effectsInput } from '../item-fling-effect-prose/item-fling-effect-prose-create-nested-many-without-item-fling-effects.input';
import { itemsCreateNestedManyWithoutItem_fling_effectsInput } from '../items/items-create-nested-many-without-item-fling-effects.input';

@InputType()
export class item_fling_effectsCreateInput {

    @Field(() => item_fling_effect_proseCreateNestedManyWithoutItem_fling_effectsInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseCreateNestedManyWithoutItem_fling_effectsInput;

    @Field(() => itemsCreateNestedManyWithoutItem_fling_effectsInput, {nullable:true})
    items?: itemsCreateNestedManyWithoutItem_fling_effectsInput;
}
