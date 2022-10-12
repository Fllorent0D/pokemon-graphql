import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_slotsWhereInput } from '../encounter-slots/encounter-slots-where.input';
import { Type } from 'class-transformer';
import { encounter_slotsOrderByWithAggregationInput } from '../encounter-slots/encounter-slots-order-by-with-aggregation.input';
import { Encounter_slotsScalarFieldEnum } from './encounter-slots-scalar-field.enum';
import { encounter_slotsScalarWhereWithAggregatesInput } from '../encounter-slots/encounter-slots-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterSlotsArgs {

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    @Type(() => encounter_slotsWhereInput)
    where?: encounter_slotsWhereInput;

    @Field(() => [encounter_slotsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_slotsOrderByWithAggregationInput>;

    @Field(() => [Encounter_slotsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_slotsScalarFieldEnum>;

    @Field(() => encounter_slotsScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_slotsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
