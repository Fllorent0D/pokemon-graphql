import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesWhereInput } from '../stat-names/stat-names-where.input';
import { Type } from 'class-transformer';
import { stat_namesOrderByWithAggregationInput } from '../stat-names/stat-names-order-by-with-aggregation.input';
import { Stat_namesScalarFieldEnum } from './stat-names-scalar-field.enum';
import { stat_namesScalarWhereWithAggregatesInput } from '../stat-names/stat-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBystatNamesArgs {

    @Field(() => stat_namesWhereInput, {nullable:true})
    @Type(() => stat_namesWhereInput)
    where?: stat_namesWhereInput;

    @Field(() => [stat_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<stat_namesOrderByWithAggregationInput>;

    @Field(() => [Stat_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Stat_namesScalarFieldEnum>;

    @Field(() => stat_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: stat_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
