import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_flavor_summariesInput } from './items-create-without-item-flavor-summaries.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_flavor_summariesInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_flavor_summariesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_flavor_summariesInput)
    create!: itemsCreateWithoutItem_flavor_summariesInput;
}
