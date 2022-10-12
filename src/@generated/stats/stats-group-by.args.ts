import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { statsOrderByWithAggregationInput } from './stats-order-by-with-aggregation.input';
import { StatsScalarFieldEnum } from '../prisma/stats-scalar-field.enum';
import { statsScalarWhereWithAggregatesInput } from './stats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class statsGroupByArgs {

    @Field(() => statsWhereInput, {nullable:true})
    @Type(() => statsWhereInput)
    where?: statsWhereInput;

    @Field(() => [statsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<statsOrderByWithAggregationInput>;

    @Field(() => [StatsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StatsScalarFieldEnum>;

    @Field(() => statsScalarWhereWithAggregatesInput, {nullable:true})
    having?: statsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
