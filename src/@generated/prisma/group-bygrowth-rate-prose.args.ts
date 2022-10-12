import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseWhereInput } from '../growth-rate-prose/growth-rate-prose-where.input';
import { Type } from 'class-transformer';
import { growth_rate_proseOrderByWithAggregationInput } from '../growth-rate-prose/growth-rate-prose-order-by-with-aggregation.input';
import { Growth_rate_proseScalarFieldEnum } from './growth-rate-prose-scalar-field.enum';
import { growth_rate_proseScalarWhereWithAggregatesInput } from '../growth-rate-prose/growth-rate-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygrowthRateProseArgs {

    @Field(() => growth_rate_proseWhereInput, {nullable:true})
    @Type(() => growth_rate_proseWhereInput)
    where?: growth_rate_proseWhereInput;

    @Field(() => [growth_rate_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<growth_rate_proseOrderByWithAggregationInput>;

    @Field(() => [Growth_rate_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Growth_rate_proseScalarFieldEnum>;

    @Field(() => growth_rate_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: growth_rate_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
