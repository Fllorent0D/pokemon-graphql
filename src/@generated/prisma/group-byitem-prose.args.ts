import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseWhereInput } from '../item-prose/item-prose-where.input';
import { Type } from 'class-transformer';
import { item_proseOrderByWithAggregationInput } from '../item-prose/item-prose-order-by-with-aggregation.input';
import { Item_proseScalarFieldEnum } from './item-prose-scalar-field.enum';
import { item_proseScalarWhereWithAggregatesInput } from '../item-prose/item-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemProseArgs {

    @Field(() => item_proseWhereInput, {nullable:true})
    @Type(() => item_proseWhereInput)
    where?: item_proseWhereInput;

    @Field(() => [item_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_proseOrderByWithAggregationInput>;

    @Field(() => [Item_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_proseScalarFieldEnum>;

    @Field(() => item_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
