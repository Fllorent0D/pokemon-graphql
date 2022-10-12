import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_flag_mapUncheckedCreateNestedManyWithoutItem_flagsInput } from '../item-flag-map/item-flag-map-unchecked-create-nested-many-without-item-flags.input';

@InputType()
export class item_flagsUncheckedCreateWithoutItem_flag_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_flag_mapUncheckedCreateNestedManyWithoutItem_flagsInput, {nullable:true})
    item_flag_map?: item_flag_mapUncheckedCreateNestedManyWithoutItem_flagsInput;
}
