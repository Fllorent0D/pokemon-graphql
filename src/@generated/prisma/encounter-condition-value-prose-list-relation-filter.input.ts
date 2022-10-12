import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-where.input';

@InputType()
export class Encounter_condition_value_proseListRelationFilter {

    @Field(() => encounter_condition_value_proseWhereInput, {nullable:true})
    every?: encounter_condition_value_proseWhereInput;

    @Field(() => encounter_condition_value_proseWhereInput, {nullable:true})
    some?: encounter_condition_value_proseWhereInput;

    @Field(() => encounter_condition_value_proseWhereInput, {nullable:true})
    none?: encounter_condition_value_proseWhereInput;
}
