import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateWithoutEncountersInput } from './encounter-slots-create-without-encounters.input';

@InputType()
export class encounter_slotsCreateOrConnectWithoutEncountersInput {

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;

    @Field(() => encounter_slotsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => encounter_slotsCreateWithoutEncountersInput)
    create!: encounter_slotsCreateWithoutEncountersInput;
}
