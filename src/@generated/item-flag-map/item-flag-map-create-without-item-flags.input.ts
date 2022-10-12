import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutItem_flag_mapInput } from '../items/items-create-nested-one-without-item-flag-map.input';

@InputType()
export class item_flag_mapCreateWithoutItem_flagsInput {

    @Field(() => itemsCreateNestedOneWithoutItem_flag_mapInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutItem_flag_mapInput;
}
