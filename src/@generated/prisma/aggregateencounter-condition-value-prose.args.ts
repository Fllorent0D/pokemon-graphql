import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseOrderByWithRelationInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-order-by-with-relation.input';
import { encounter_condition_value_proseWhereUniqueInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateencounterConditionValueProseArgs {

    @Field(() => encounter_condition_value_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_proseWhereInput)
    where?: encounter_condition_value_proseWhereInput;

    @Field(() => [encounter_condition_value_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_condition_value_proseOrderByWithRelationInput>;

    @Field(() => encounter_condition_value_proseWhereUniqueInput, {nullable:true})
    cursor?: encounter_condition_value_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
