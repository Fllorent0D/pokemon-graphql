import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_namesInput } from '../languages/languages-create-nested-one-without-item-names.input';

@InputType()
export class item_namesCreateWithoutItemsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutItem_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_namesInput;
}
