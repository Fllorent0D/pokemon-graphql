import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_flag_mapInput } from './items-create-without-item-flag-map.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_flag_mapInput } from './items-create-or-connect-without-item-flag-map.input';
import { itemsUpsertWithoutItem_flag_mapInput } from './items-upsert-without-item-flag-map.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutItem_flag_mapInput } from './items-update-without-item-flag-map.input';

@InputType()
export class itemsUpdateOneRequiredWithoutItem_flag_mapNestedInput {

    @Field(() => itemsCreateWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_flag_mapInput)
    create?: itemsCreateWithoutItem_flag_mapInput;

    @Field(() => itemsCreateOrConnectWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_flag_mapInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_flag_mapInput;

    @Field(() => itemsUpsertWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => itemsUpsertWithoutItem_flag_mapInput)
    upsert?: itemsUpsertWithoutItem_flag_mapInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_flag_mapInput, {nullable:true})
    @Type(() => itemsUpdateWithoutItem_flag_mapInput)
    update?: itemsUpdateWithoutItem_flag_mapInput;
}
