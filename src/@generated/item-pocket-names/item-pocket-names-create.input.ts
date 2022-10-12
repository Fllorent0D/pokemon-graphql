import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_pocket_namesInput } from '../languages/languages-create-nested-one-without-item-pocket-names.input';
import { item_pocketsCreateNestedOneWithoutItem_pocket_namesInput } from '../item-pockets/item-pockets-create-nested-one-without-item-pocket-names.input';

@InputType()
export class item_pocket_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutItem_pocket_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_pocket_namesInput;

    @Field(() => item_pocketsCreateNestedOneWithoutItem_pocket_namesInput, {nullable:false})
    item_pockets!: item_pocketsCreateNestedOneWithoutItem_pocket_namesInput;
}
