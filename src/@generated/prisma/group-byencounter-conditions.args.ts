import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_conditionsWhereInput } from '../encounter-conditions/encounter-conditions-where.input';
import { Type } from 'class-transformer';
import { encounter_conditionsOrderByWithAggregationInput } from '../encounter-conditions/encounter-conditions-order-by-with-aggregation.input';
import { Encounter_conditionsScalarFieldEnum } from './encounter-conditions-scalar-field.enum';
import { encounter_conditionsScalarWhereWithAggregatesInput } from '../encounter-conditions/encounter-conditions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterConditionsArgs {

    @Field(() => encounter_conditionsWhereInput, {nullable:true})
    @Type(() => encounter_conditionsWhereInput)
    where?: encounter_conditionsWhereInput;

    @Field(() => [encounter_conditionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_conditionsOrderByWithAggregationInput>;

    @Field(() => [Encounter_conditionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_conditionsScalarFieldEnum>;

    @Field(() => encounter_conditionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_conditionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
