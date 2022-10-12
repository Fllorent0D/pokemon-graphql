import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereInput } from '../encounter-condition-values/encounter-condition-values-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesOrderByWithRelationInput } from '../encounter-condition-values/encounter-condition-values-order-by-with-relation.input';
import { encounter_condition_valuesWhereUniqueInput } from '../encounter-condition-values/encounter-condition-values-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Encounter_condition_valuesScalarFieldEnum } from './encounter-condition-values-scalar-field.enum';

@ArgsType()
export class FindManyencounterConditionValuesArgs {

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    @Type(() => encounter_condition_valuesWhereInput)
    where?: encounter_condition_valuesWhereInput;

    @Field(() => [encounter_condition_valuesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_condition_valuesOrderByWithRelationInput>;

    @Field(() => encounter_condition_valuesWhereUniqueInput, {nullable:true})
    cursor?: encounter_condition_valuesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Encounter_condition_valuesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Encounter_condition_valuesScalarFieldEnum>;
}
