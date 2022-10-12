import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_flag_mapUncheckedCreateNestedManyWithoutItem_flagsInput } from '../item-flag-map/item-flag-map-unchecked-create-nested-many-without-item-flags.input';
import { item_flag_proseUncheckedCreateNestedManyWithoutItem_flagsInput } from '../item-flag-prose/item-flag-prose-unchecked-create-nested-many-without-item-flags.input';

@InputType()
export class item_flagsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_flag_mapUncheckedCreateNestedManyWithoutItem_flagsInput, {nullable:true})
    item_flag_map?: item_flag_mapUncheckedCreateNestedManyWithoutItem_flagsInput;

    @Field(() => item_flag_proseUncheckedCreateNestedManyWithoutItem_flagsInput, {nullable:true})
    item_flag_prose?: item_flag_proseUncheckedCreateNestedManyWithoutItem_flagsInput;
}
