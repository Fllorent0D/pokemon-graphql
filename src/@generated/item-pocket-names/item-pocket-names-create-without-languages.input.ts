import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsCreateNestedOneWithoutItem_pocket_namesInput } from '../item-pockets/item-pockets-create-nested-one-without-item-pocket-names.input';

@InputType()
export class item_pocket_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => item_pocketsCreateNestedOneWithoutItem_pocket_namesInput, {nullable:false})
    item_pockets!: item_pocketsCreateNestedOneWithoutItem_pocket_namesInput;
}
