import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_proseWhereInput } from '../encounter-condition-prose/encounter-condition-prose-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseOrderByWithRelationInput } from '../encounter-condition-prose/encounter-condition-prose-order-by-with-relation.input';
import { encounter_condition_proseWhereUniqueInput } from '../encounter-condition-prose/encounter-condition-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Encounter_condition_proseScalarFieldEnum } from './encounter-condition-prose-scalar-field.enum';

@ArgsType()
export class FindManyencounterConditionProseArgs {

    @Field(() => encounter_condition_proseWhereInput, {nullable:true})
    @Type(() => encounter_condition_proseWhereInput)
    where?: encounter_condition_proseWhereInput;

    @Field(() => [encounter_condition_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_condition_proseOrderByWithRelationInput>;

    @Field(() => encounter_condition_proseWhereUniqueInput, {nullable:true})
    cursor?: encounter_condition_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Encounter_condition_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Encounter_condition_proseScalarFieldEnum>;
}
