import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsWhereInput } from '../encounter-slots/encounter-slots-where.input';

@InputType()
export class Encounter_slotsRelationFilter {

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    is?: encounter_slotsWhereInput;

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    isNot?: encounter_slotsWhereInput;
}
