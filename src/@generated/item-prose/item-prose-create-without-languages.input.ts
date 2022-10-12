import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutItem_proseInput } from '../items/items-create-nested-one-without-item-prose.input';

@InputType()
export class item_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => itemsCreateNestedOneWithoutItem_proseInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_proseInput;
}
