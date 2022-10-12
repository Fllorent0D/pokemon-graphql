import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsWhereInput } from '../encounter-slots/encounter-slots-where.input';

@InputType()
export class Encounter_slotsListRelationFilter {

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    every?: encounter_slotsWhereInput;

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    some?: encounter_slotsWhereInput;

    @Field(() => encounter_slotsWhereInput, {nullable:true})
    none?: encounter_slotsWhereInput;
}
