import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsWhereInput } from '../stat-hints/stat-hints-where.input';
import { Type } from 'class-transformer';
import { stat_hintsOrderByWithAggregationInput } from '../stat-hints/stat-hints-order-by-with-aggregation.input';
import { Stat_hintsScalarFieldEnum } from './stat-hints-scalar-field.enum';
import { stat_hintsScalarWhereWithAggregatesInput } from '../stat-hints/stat-hints-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBystatHintsArgs {

    @Field(() => stat_hintsWhereInput, {nullable:true})
    @Type(() => stat_hintsWhereInput)
    where?: stat_hintsWhereInput;

    @Field(() => [stat_hintsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<stat_hintsOrderByWithAggregationInput>;

    @Field(() => [Stat_hintsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Stat_hintsScalarFieldEnum>;

    @Field(() => stat_hintsScalarWhereWithAggregatesInput, {nullable:true})
    having?: stat_hintsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
