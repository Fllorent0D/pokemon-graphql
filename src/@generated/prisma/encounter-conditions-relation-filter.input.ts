import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsWhereInput } from '../encounter-conditions/encounter-conditions-where.input';

@InputType()
export class Encounter_conditionsRelationFilter {

    @Field(() => encounter_conditionsWhereInput, {nullable:true})
    is?: encounter_conditionsWhereInput;

    @Field(() => encounter_conditionsWhereInput, {nullable:true})
    isNot?: encounter_conditionsWhereInput;
}
