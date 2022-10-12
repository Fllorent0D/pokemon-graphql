import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesWhereInput } from '../growth-rates/growth-rates-where.input';
import { Type } from 'class-transformer';
import { growth_ratesOrderByWithAggregationInput } from '../growth-rates/growth-rates-order-by-with-aggregation.input';
import { Growth_ratesScalarFieldEnum } from './growth-rates-scalar-field.enum';
import { growth_ratesScalarWhereWithAggregatesInput } from '../growth-rates/growth-rates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBygrowthRatesArgs {

    @Field(() => growth_ratesWhereInput, {nullable:true})
    @Type(() => growth_ratesWhereInput)
    where?: growth_ratesWhereInput;

    @Field(() => [growth_ratesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<growth_ratesOrderByWithAggregationInput>;

    @Field(() => [Growth_ratesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Growth_ratesScalarFieldEnum>;

    @Field(() => growth_ratesScalarWhereWithAggregatesInput, {nullable:true})
    having?: growth_ratesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
