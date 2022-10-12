import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseOrderByWithAggregationInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-order-by-with-aggregation.input';
import { Encounter_condition_value_proseScalarFieldEnum } from './encounter-condition-value-prose-scalar-field.enum';
import { encounter_condition_value_proseScalarWhereWithAggregatesInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_proseWhereInput)
    where?: encounter_condition_value_proseWhereInput;

    @Field(() => [encounter_condition_value_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_condition_value_proseOrderByWithAggregationInput>;

    @Field(() => [Encounter_condition_value_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_condition_value_proseScalarFieldEnum>;

    @Field(() => encounter_condition_value_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_condition_value_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
