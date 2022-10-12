import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsCreateWithoutItem_flag_mapInput } from './item-flags-create-without-item-flag-map.input';
import { Type } from 'class-transformer';
import { item_flagsCreateOrConnectWithoutItem_flag_mapInput } from './item-flags-create-or-connect-without-item-flag-map.input';
import { item_flagsUpsertWithoutItem_flag_mapInput } from './item-flags-upsert-without-item-flag-map.input';
import { item_flagsWhereUniqueInput } from './item-flags-where-unique.input';
import { item_flagsUpdateWithoutItem_flag_mapInput } from './item-flags-update-without-item-flag-map.input';

@InputType()
export class item_flagsUpdateOneRequiredWithoutItem_flag_mapNestedInput {

    @Field(() => item_flagsCreateWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => item_flagsCreateWithoutItem_flag_mapInput)
    create?: item_flagsCreateWithoutItem_flag_mapInput;

    @Field(() => item_flagsCreateOrConnectWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => item_flagsCreateOrConnectWithoutItem_flag_mapInput)
    connectOrCreate?: item_flagsCreateOrConnectWithoutItem_flag_mapInput;

    @Field(() => item_flagsUpsertWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => item_flagsUpsertWithoutItem_flag_mapInput)
    upsert?: item_flagsUpsertWithoutItem_flag_mapInput;

    @Field(() => item_flagsWhereUniqueInput, {nullable:true})
    @Type(() => item_flagsWhereUniqueInput)
    connect?: item_flagsWhereUniqueInput;

    @Field(() => item_flagsUpdateWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => item_flagsUpdateWithoutItem_flag_mapInput)
    update?: item_flagsUpdateWithoutItem_flag_mapInput;
}
