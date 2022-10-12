import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseWhereInput } from '../encounter-condition-prose/encounter-condition-prose-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseOrderByWithAggregationInput } from '../encounter-condition-prose/encounter-condition-prose-order-by-with-aggregation.input';
import { Encounter_condition_proseScalarFieldEnum } from './encounter-condition-prose-scalar-field.enum';
import { encounter_condition_proseScalarWhereWithAggregatesInput } from '../encounter-condition-prose/encounter-condition-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterConditionProseArgs {

    @Field(() => encounter_condition_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_proseWhereInput)
    where?: encounter_condition_proseWhereInput;

    @Field(() => [encounter_condition_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_condition_proseOrderByWithAggregationInput>;

    @Field(() => [Encounter_condition_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_condition_proseScalarFieldEnum>;

    @Field(() => encounter_condition_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_condition_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
