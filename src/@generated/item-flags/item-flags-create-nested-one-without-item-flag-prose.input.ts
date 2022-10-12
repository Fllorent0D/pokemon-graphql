import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsCreateWithoutItem_flag_proseInput } from './item-flags-create-without-item-flag-prose.input';
import { Type } from 'class-transformer';
import { item_flagsCreateOrConnectWithoutItem_flag_proseInput } from './item-flags-create-or-connect-without-item-flag-prose.input';
import { item_flagsWhereUniqueInput } from './item-flags-where-unique.input';

@InputType()
export class item_flagsCreateNestedOneWithoutItem_flag_proseInput {

    @Field(() => item_flagsCreateWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => item_flagsCreateWithoutItem_flag_proseInput)
    create?: item_flagsCreateWithoutItem_flag_proseInput;

    @Field(() => item_flagsCreateOrConnectWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => item_flagsCreateOrConnectWithoutItem_flag_proseInput)
    connectOrCreate?: item_flagsCreateOrConnectWithoutItem_flag_proseInput;

    @Field(() => item_flagsWhereUniqueInput, {nullable:true})
    @Type(() => item_flagsWhereUniqueInput)
    connect?: item_flagsWhereUniqueInput;
}
