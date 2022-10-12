import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_flavor_summariesInput } from './items-create-without-item-flavor-summaries.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_flavor_summariesInput } from './items-create-or-connect-without-item-flavor-summaries.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutItem_flavor_summariesInput {

    @Field(() => itemsCreateWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_flavor_summariesInput)
    create?: itemsCreateWithoutItem_flavor_summariesInput;

    @Field(() => itemsCreateOrConnectWithoutItem_flavor_summariesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_flavor_summariesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_flavor_summariesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}
