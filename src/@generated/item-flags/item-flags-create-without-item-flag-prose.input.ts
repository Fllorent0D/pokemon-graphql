import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapCreateNestedManyWithoutItem_flagsInput } from '../item-flag-map/item-flag-map-create-nested-many-without-item-flags.input';

@InputType()
export class item_flagsCreateWithoutItem_flag_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_flag_mapCreateNestedManyWithoutItem_flagsInput, {nullable:true})
    item_flag_map?: item_flag_mapCreateNestedManyWithoutItem_flagsInput;
}
