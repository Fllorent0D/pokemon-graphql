import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseWhereInput } from '../item-flag-prose/item-flag-prose-where.input';
import { Type } from 'class-transformer';
import { item_flag_proseOrderByWithAggregationInput } from '../item-flag-prose/item-flag-prose-order-by-with-aggregation.input';
import { Item_flag_proseScalarFieldEnum } from './item-flag-prose-scalar-field.enum';
import { item_flag_proseScalarWhereWithAggregatesInput } from '../item-flag-prose/item-flag-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemFlagProseArgs {

    @Field(() => item_flag_proseWhereInput, {nullable:true})
    @Type(() => item_flag_proseWhereInput)
    where?: item_flag_proseWhereInput;

    @Field(() => [item_flag_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_flag_proseOrderByWithAggregationInput>;

    @Field(() => [Item_flag_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_flag_proseScalarFieldEnum>;

    @Field(() => item_flag_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_flag_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
