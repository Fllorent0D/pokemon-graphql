import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereInput } from '../encounter-condition-value-map/encounter-condition-value-map-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapOrderByWithAggregationInput } from '../encounter-condition-value-map/encounter-condition-value-map-order-by-with-aggregation.input';
import { Encounter_condition_value_mapScalarFieldEnum } from './encounter-condition-value-map-scalar-field.enum';
import { encounter_condition_value_mapScalarWhereWithAggregatesInput } from '../encounter-condition-value-map/encounter-condition-value-map-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_mapWhereInput)
    where?: encounter_condition_value_mapWhereInput;

    @Field(() => [encounter_condition_value_mapOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_condition_value_mapOrderByWithAggregationInput>;

    @Field(() => [Encounter_condition_value_mapScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_condition_value_mapScalarFieldEnum>;

    @Field(() => encounter_condition_value_mapScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_condition_value_mapScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
