import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsCreateNestedOneWithoutItem_flag_mapInput } from '../item-flags/item-flags-create-nested-one-without-item-flag-map.input';

@InputType()
export class item_flag_mapCreateWithoutItemsInput {

    @Field(() => item_flagsCreateNestedOneWithoutItem_flag_mapInput, {nullable:false})
    item_flags!: item_flagsCreateNestedOneWithoutItem_flag_mapInput;
}
