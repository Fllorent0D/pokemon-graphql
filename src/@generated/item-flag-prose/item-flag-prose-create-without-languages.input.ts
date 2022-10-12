import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsCreateNestedOneWithoutItem_flag_proseInput } from '../item-flags/item-flags-create-nested-one-without-item-flag-prose.input';

@InputType()
export class item_flag_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => item_flagsCreateNestedOneWithoutItem_flag_proseInput, {nullable:false})
    item_flags!: item_flagsCreateNestedOneWithoutItem_flag_proseInput;
}
