import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_fling_effect_proseUncheckedCreateNestedManyWithoutItem_fling_effectsInput } from '../item-fling-effect-prose/item-fling-effect-prose-unchecked-create-nested-many-without-item-fling-effects.input';
import { itemsUncheckedCreateNestedManyWithoutItem_fling_effectsInput } from '../items/items-unchecked-create-nested-many-without-item-fling-effects.input';

@InputType()
export class item_fling_effectsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => item_fling_effect_proseUncheckedCreateNestedManyWithoutItem_fling_effectsInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseUncheckedCreateNestedManyWithoutItem_fling_effectsInput;

    @Field(() => itemsUncheckedCreateNestedManyWithoutItem_fling_effectsInput, {nullable:true})
    items?: itemsUncheckedCreateNestedManyWithoutItem_fling_effectsInput;
}
