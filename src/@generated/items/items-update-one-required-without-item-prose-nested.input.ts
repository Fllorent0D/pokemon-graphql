import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_proseInput } from './items-create-without-item-prose.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_proseInput } from './items-create-or-connect-without-item-prose.input';
import { itemsUpsertWithoutItem_proseInput } from './items-upsert-without-item-prose.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutItem_proseInput } from './items-update-without-item-prose.input';

@InputType()
export class itemsUpdateOneRequiredWithoutItem_proseNestedInput {

    @Field(() => itemsCreateWithoutItem_proseInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_proseInput)
    create?: itemsCreateWithoutItem_proseInput;

    @Field(() => itemsCreateOrConnectWithoutItem_proseInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_proseInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_proseInput;

    @Field(() => itemsUpsertWithoutItem_proseInput, {nullable:true})
    @Type(() => itemsUpsertWithoutItem_proseInput)
    upsert?: itemsUpsertWithoutItem_proseInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_proseInput, {nullable:true})
    @Type(() => itemsUpdateWithoutItem_proseInput)
    update?: itemsUpdateWithoutItem_proseInput;
}
