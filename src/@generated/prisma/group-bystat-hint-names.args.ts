import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesWhereInput } from '../stat-hint-names/stat-hint-names-where.input';
import { Type } from 'class-transformer';
import { stat_hint_namesOrderByWithAggregationInput } from '../stat-hint-names/stat-hint-names-order-by-with-aggregation.input';
import { Stat_hint_namesScalarFieldEnum } from './stat-hint-names-scalar-field.enum';
import { stat_hint_namesScalarWhereWithAggregatesInput } from '../stat-hint-names/stat-hint-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBystatHintNamesArgs {

    @Field(() => stat_hint_namesWhereInput, {nullable:true})
    @Type(() => stat_hint_namesWhereInput)
    where?: stat_hint_namesWhereInput;

    @Field(() => [stat_hint_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<stat_hint_namesOrderByWithAggregationInput>;

    @Field(() => [Stat_hint_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Stat_hint_namesScalarFieldEnum>;

    @Field(() => stat_hint_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: stat_hint_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
