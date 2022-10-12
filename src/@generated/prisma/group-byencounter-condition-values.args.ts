import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereInput } from '../encounter-condition-values/encounter-condition-values-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesOrderByWithAggregationInput } from '../encounter-condition-values/encounter-condition-values-order-by-with-aggregation.input';
import { Encounter_condition_valuesScalarFieldEnum } from './encounter-condition-values-scalar-field.enum';
import { encounter_condition_valuesScalarWhereWithAggregatesInput } from '../encounter-condition-values/encounter-condition-values-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    @Type(() => encounter_condition_valuesWhereInput)
    where?: encounter_condition_valuesWhereInput;

    @Field(() => [encounter_condition_valuesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_condition_valuesOrderByWithAggregationInput>;

    @Field(() => [Encounter_condition_valuesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_condition_valuesScalarFieldEnum>;

    @Field(() => encounter_condition_valuesScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_condition_valuesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
