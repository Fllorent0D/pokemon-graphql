import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_proseInput } from '../languages/languages-create-nested-one-without-item-prose.input';
import { itemsCreateNestedOneWithoutItem_proseInput } from '../items/items-create-nested-one-without-item-prose.input';

@InputType()
export class item_proseCreateInput {

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => languagesCreateNestedOneWithoutItem_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_proseInput;

    @Field(() => itemsCreateNestedOneWithoutItem_proseInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_proseInput;
}
