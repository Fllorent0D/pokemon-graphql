import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereInput } from '../encounter-condition-value-map/encounter-condition-value-map-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapOrderByWithRelationInput } from '../encounter-condition-value-map/encounter-condition-value-map-order-by-with-relation.input';
import { encounter_condition_value_mapWhereUniqueInput } from '../encounter-condition-value-map/encounter-condition-value-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Encounter_condition_value_mapScalarFieldEnum } from './encounter-condition-value-map-scalar-field.enum';

@ArgsType()
export class FindManyencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_mapWhereInput)
    where?: encounter_condition_value_mapWhereInput;

    @Field(() => [encounter_condition_value_mapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<encounter_condition_value_mapOrderByWithRelationInput>;

    @Field(() => encounter_condition_value_mapWhereUniqueInput, {nullable:true})
    cursor?: encounter_condition_value_mapWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Encounter_condition_value_mapScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Encounter_condition_value_mapScalarFieldEnum>;
}
