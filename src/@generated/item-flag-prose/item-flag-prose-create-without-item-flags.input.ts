import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_flag_proseInput } from '../languages/languages-create-nested-one-without-item-flag-prose.input';

@InputType()
export class item_flag_proseCreateWithoutItem_flagsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutItem_flag_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_flag_proseInput;
}
