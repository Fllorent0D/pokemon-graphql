import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_namesInput } from './items-create-without-item-names.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_namesInput } from './items-create-or-connect-without-item-names.input';
import { itemsUpsertWithoutItem_namesInput } from './items-upsert-without-item-names.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutItem_namesInput } from './items-update-without-item-names.input';

@InputType()
export class itemsUpdateOneRequiredWithoutItem_namesNestedInput {

    @Field(() => itemsCreateWithoutItem_namesInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_namesInput)
    create?: itemsCreateWithoutItem_namesInput;

    @Field(() => itemsCreateOrConnectWithoutItem_namesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_namesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_namesInput;

    @Field(() => itemsUpsertWithoutItem_namesInput, {nullable:true})
    @Type(() => itemsUpsertWithoutItem_namesInput)
    upsert?: itemsUpsertWithoutItem_namesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_namesInput, {nullable:true})
    @Type(() => itemsUpdateWithoutItem_namesInput)
    update?: itemsUpdateWithoutItem_namesInput;
}
