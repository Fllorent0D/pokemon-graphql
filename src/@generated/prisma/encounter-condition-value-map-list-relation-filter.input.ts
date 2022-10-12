import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereInput } from '../encounter-condition-value-map/encounter-condition-value-map-where.input';

@InputType()
export class Encounter_condition_value_mapListRelationFilter {

    @Field(() => encounter_condition_value_mapWhereInput, {nullable:true})
    every?: encounter_condition_value_mapWhereInput;

    @Field(() => encounter_condition_value_mapWhereInput, {nullable:true})
    some?: encounter_condition_value_mapWhereInput;

    @Field(() => encounter_condition_value_mapWhereInput, {nullable:true})
    none?: encounter_condition_value_mapWhereInput;
}
