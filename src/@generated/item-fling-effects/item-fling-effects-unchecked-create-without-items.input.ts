import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_fling_effect_proseUncheckedCreateNestedManyWithoutItem_fling_effectsInput } from '../item-fling-effect-prose/item-fling-effect-prose-unchecked-create-nested-many-without-item-fling-effects.input';

@InputType()
export class item_fling_effectsUncheckedCreateWithoutItemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => item_fling_effect_proseUncheckedCreateNestedManyWithoutItem_fling_effectsInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseUncheckedCreateNestedManyWithoutItem_fling_effectsInput;
}
