import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateNestedManyWithoutItem_fling_effectsInput } from '../items/items-create-nested-many-without-item-fling-effects.input';

@InputType()
export class item_fling_effectsCreateWithoutItem_fling_effect_proseInput {

    @Field(() => itemsCreateNestedManyWithoutItem_fling_effectsInput, {nullable:true})
    items?: itemsCreateNestedManyWithoutItem_fling_effectsInput;
}
