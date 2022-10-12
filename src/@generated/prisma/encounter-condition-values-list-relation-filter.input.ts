import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereInput } from '../encounter-condition-values/encounter-condition-values-where.input';

@InputType()
export class Encounter_condition_valuesListRelationFilter {

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    every?: encounter_condition_valuesWhereInput;

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    some?: encounter_condition_valuesWhereInput;

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    none?: encounter_condition_valuesWhereInput;
}
