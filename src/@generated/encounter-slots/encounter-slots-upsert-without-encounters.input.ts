import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsUpdateWithoutEncountersInput } from './encounter-slots-update-without-encounters.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateWithoutEncountersInput } from './encounter-slots-create-without-encounters.input';

@InputType()
export class encounter_slotsUpsertWithoutEncountersInput {

    @Field(() => encounter_slotsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => encounter_slotsUpdateWithoutEncountersInput)
    update!: encounter_slotsUpdateWithoutEncountersInput;

    @Field(() => encounter_slotsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => encounter_slotsCreateWithoutEncountersInput)
    create!: encounter_slotsCreateWithoutEncountersInput;
}
