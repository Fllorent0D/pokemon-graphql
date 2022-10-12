import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { itemsUncheckedCreateNestedManyWithoutItem_fling_effectsInput } from '../items/items-unchecked-create-nested-many-without-item-fling-effects.input';

@InputType()
export class item_fling_effectsUncheckedCreateWithoutItem_fling_effect_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => itemsUncheckedCreateNestedManyWithoutItem_fling_effectsInput, {nullable:true})
    items?: itemsUncheckedCreateNestedManyWithoutItem_fling_effectsInput;
}
