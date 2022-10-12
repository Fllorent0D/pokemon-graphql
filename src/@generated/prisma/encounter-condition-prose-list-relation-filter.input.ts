import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseWhereInput } from '../encounter-condition-prose/encounter-condition-prose-where.input';

@InputType()
export class Encounter_condition_proseListRelationFilter {

    @Field(() => encounter_condition_proseWhereInput, {nullable:true})
    every?: encounter_condition_proseWhereInput;

    @Field(() => encounter_condition_proseWhereInput, {nullable:true})
    some?: encounter_condition_proseWhereInput;

    @Field(() => encounter_condition_proseWhereInput, {nullable:true})
    none?: encounter_condition_proseWhereInput;
}
