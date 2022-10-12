import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsWhereInput } from '../encounter-methods/encounter-methods-where.input';
import { Type } from 'class-transformer';
import { encounter_methodsOrderByWithAggregationInput } from '../encounter-methods/encounter-methods-order-by-with-aggregation.input';
import { Encounter_methodsScalarFieldEnum } from './encounter-methods-scalar-field.enum';
import { encounter_methodsScalarWhereWithAggregatesInput } from '../encounter-methods/encounter-methods-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByencounterMethodsArgs {

    @Field(() => encounter_methodsWhereInput, {nullable:true})
    @Type(() => encounter_methodsWhereInput)
    where?: encounter_methodsWhereInput;

    @Field(() => [encounter_methodsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encounter_methodsOrderByWithAggregationInput>;

    @Field(() => [Encounter_methodsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Encounter_methodsScalarFieldEnum>;

    @Field(() => encounter_methodsScalarWhereWithAggregatesInput, {nullable:true})
    having?: encounter_methodsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
