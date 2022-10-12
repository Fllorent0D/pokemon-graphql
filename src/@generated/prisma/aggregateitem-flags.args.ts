import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsWhereInput } from '../item-flags/item-flags-where.input';
import { Type } from 'class-transformer';
import { item_flagsOrderByWithRelationInput } from '../item-flags/item-flags-order-by-with-relation.input';
import { item_flagsWhereUniqueInput } from '../item-flags/item-flags-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemFlagsArgs {

    @Field(() => item_flagsWhereInput, {nullable:true})
    @Type(() => item_flagsWhereInput)
    where?: item_flagsWhereInput;

    @Field(() => [item_flagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_flagsOrderByWithRelationInput>;

    @Field(() => item_flagsWhereUniqueInput, {nullable:true})
    cursor?: item_flagsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
