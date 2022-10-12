import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseWhereInput } from '../encounter-method-prose/encounter-method-prose-where.input';
import { Type } from 'class-transformer';
import { encounter_method_proseOrderByWithAggregationInput } from '../encounter-method-prose/encounter-method-prose-order-by-with-aggregation.input';
import { Encounter_method_proseScalarFieldEnum } from './encounter-method-prose-scalar-field.enum';
import { encounter_method_proseScalarWhereWithAggregatesInput } from '../encounter-method-prose/encounter-method-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterMethodProseArgs {

    @Field(() => encounter_method_proseWhereInput, {nullable:true})
    @Type(() => encounter_method_proseWhereInput)
    where?: encounter_method_proseWhereInput;

    @Field(() => [encounter_method_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_method_proseOrderByWithAggregationInput>;

    @Field(() => [Encounter_method_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_method_proseScalarFieldEnum>;

    @Field(() => encounter_method_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_method_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
