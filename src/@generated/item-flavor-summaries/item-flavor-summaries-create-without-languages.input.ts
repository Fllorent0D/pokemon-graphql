import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutItem_flavor_summariesInput } from '../items/items-create-nested-one-without-item-flavor-summaries.input';

@InputType()
export class item_flavor_summariesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    flavor_summary?: string;

    @Field(() => itemsCreateNestedOneWithoutItem_flavor_summariesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_flavor_summariesInput;
}
