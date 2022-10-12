import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesWhereInput } from '../item-flavor-summaries/item-flavor-summaries-where.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesOrderByWithRelationInput } from '../item-flavor-summaries/item-flavor-summaries-order-by-with-relation.input';
import { item_flavor_summariesWhereUniqueInput } from '../item-flavor-summaries/item-flavor-summaries-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesWhereInput, {nullable:true})
    @Type(() => item_flavor_summariesWhereInput)
    where?: item_flavor_summariesWhereInput;

    @Field(() => [item_flavor_summariesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_flavor_summariesOrderByWithRelationInput>;

    @Field(() => item_flavor_summariesWhereUniqueInput, {nullable:true})
    cursor?: item_flavor_summariesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
