import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsCreateWithoutItem_flag_proseInput } from './item-flags-create-without-item-flag-prose.input';
import { Type } from 'class-transformer';
import { item_flagsCreateOrConnectWithoutItem_flag_proseInput } from './item-flags-create-or-connect-without-item-flag-prose.input';
import { item_flagsUpsertWithoutItem_flag_proseInput } from './item-flags-upsert-without-item-flag-prose.input';
import { item_flagsWhereUniqueInput } from './item-flags-where-unique.input';
import { item_flagsUpdateWithoutItem_flag_proseInput } from './item-flags-update-without-item-flag-prose.input';

@InputType()
export class item_flagsUpdateOneRequiredWithoutItem_flag_proseNestedInput {

    @Field(() => item_flagsCreateWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => item_flagsCreateWithoutItem_flag_proseInput)
    create?: item_flagsCreateWithoutItem_flag_proseInput;

    @Field(() => item_flagsCreateOrConnectWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => item_flagsCreateOrConnectWithoutItem_flag_proseInput)
    connectOrCreate?: item_flagsCreateOrConnectWithoutItem_flag_proseInput;

    @Field(() => item_flagsUpsertWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => item_flagsUpsertWithoutItem_flag_proseInput)
    upsert?: item_flagsUpsertWithoutItem_flag_proseInput;

    @Field(() => item_flagsWhereUniqueInput, {nullable:true})
    @Type(() => item_flagsWhereUniqueInput)
    connect?: item_flagsWhereUniqueInput;

    @Field(() => item_flagsUpdateWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => item_flagsUpdateWithoutItem_flag_proseInput)
    update?: item_flagsUpdateWithoutItem_flag_proseInput;
}
