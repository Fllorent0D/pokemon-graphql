import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsUpdateWithoutEncounter_condition_proseInput } from './encounter-conditions-update-without-encounter-condition-prose.input';
import { Type } from 'class-transformer';
import { encounter_conditionsCreateWithoutEncounter_condition_proseInput } from './encounter-conditions-create-without-encounter-condition-prose.input';

@InputType()
export class encounter_conditionsUpsertWithoutEncounter_condition_proseInput {

    @Field(() => encounter_conditionsUpdateWithoutEncounter_condition_proseInput, {nullable:false})
    @Type(() => encounter_conditionsUpdateWithoutEncounter_condition_proseInput)
    update!: encounter_conditionsUpdateWithoutEncounter_condition_proseInput;

    @Field(() => encounter_conditionsCreateWithoutEncounter_condition_proseInput, {nullable:false})
    @Type(() => encounter_conditionsCreateWithoutEncounter_condition_proseInput)
    create!: encounter_conditionsCreateWithoutEncounter_condition_proseInput;
}
