import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_flag_proseInput } from '../languages/languages-create-nested-one-without-item-flag-prose.input';
import { item_flagsCreateNestedOneWithoutItem_flag_proseInput } from '../item-flags/item-flags-create-nested-one-without-item-flag-prose.input';

@InputType()
export class item_flag_proseCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutItem_flag_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_flag_proseInput;

    @Field(() => item_flagsCreateNestedOneWithoutItem_flag_proseInput, {nullable:false})
    item_flags!: item_flagsCreateNestedOneWithoutItem_flag_proseInput;
}
