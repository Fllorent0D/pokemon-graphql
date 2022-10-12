import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesWhereInput } from '../encounter-condition-values/encounter-condition-values-where.input';

@InputType()
export class Encounter_condition_valuesRelationFilter {

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    is?: encounter_condition_valuesWhereInput;

    @Field(() => encounter_condition_valuesWhereInput, {nullable:true})
    isNot?: encounter_condition_valuesWhereInput;
}
