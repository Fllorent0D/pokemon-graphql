import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsUpdateWithoutEncounter_slotsInput } from './encounter-methods-update-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateWithoutEncounter_slotsInput } from './encounter-methods-create-without-encounter-slots.input';

@InputType()
export class encounter_methodsUpsertWithoutEncounter_slotsInput {

    @Field(() => encounter_methodsUpdateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => encounter_methodsUpdateWithoutEncounter_slotsInput)
    update!: encounter_methodsUpdateWithoutEncounter_slotsInput;

    @Field(() => encounter_methodsCreateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => encounter_methodsCreateWithoutEncounter_slotsInput)
    create!: encounter_methodsCreateWithoutEncounter_slotsInput;
}
