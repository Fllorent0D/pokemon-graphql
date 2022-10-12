import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_flavor_summariesInput } from './items-create-without-item-flavor-summaries.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_flavor_summariesInput } from './items-create-or-connect-without-item-flavor-summaries.input';
import { itemsUpsertWithoutItem_flavor_summariesInput } from './items-upsert-without-item-flavor-summaries.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutItem_flavor_summariesInput } from './items-update-without-item-flavor-summaries.input';

@InputType()
export class itemsUpdateOneRequiredWithoutItem_flavor_summariesNestedInput {

    @Field(() => itemsCreateWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_flavor_summariesInput)
    create?: itemsCreateWithoutItem_flavor_summariesInput;

    @Field(() => itemsCreateOrConnectWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_flavor_summariesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_flavor_summariesInput;

    @Field(() => itemsUpsertWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => itemsUpsertWithoutItem_flavor_summariesInput)
    upsert?: itemsUpsertWithoutItem_flavor_summariesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => itemsUpdateWithoutItem_flavor_summariesInput)
    update?: itemsUpdateWithoutItem_flavor_summariesInput;
}
