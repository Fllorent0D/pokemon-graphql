import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseCreateNestedManyWithoutItem_flagsInput } from '../item-flag-prose/item-flag-prose-create-nested-many-without-item-flags.input';

@InputType()
export class item_flagsCreateWithoutItem_flag_mapInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_flag_proseCreateNestedManyWithoutItem_flagsInput, {nullable:true})
    item_flag_prose?: item_flag_proseCreateNestedManyWithoutItem_flagsInput;
}
