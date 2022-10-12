import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutItem_namesInput } from '../items/items-create-nested-one-without-item-names.input';

@InputType()
export class item_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => itemsCreateNestedOneWithoutItem_namesInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_namesInput;
}
