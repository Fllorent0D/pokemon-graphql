import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsUpdateWithoutEncounter_condition_valuesInput } from './encounter-conditions-update-without-encounter-condition-values.input';
import { Type } from 'class-transformer';
import { encounter_conditionsCreateWithoutEncounter_condition_valuesInput } from './encounter-conditions-create-without-encounter-condition-values.input';

@InputType()
export class encounter_conditionsUpsertWithoutEncounter_condition_valuesInput {

    @Field(() => encounter_conditionsUpdateWithoutEncounter_condition_valuesInput, {nullable:false})
    @Type(() => encounter_conditionsUpdateWithoutEncounter_condition_valuesInput)
    update!: encounter_conditionsUpdateWithoutEncounter_condition_valuesInput;

    @Field(() => encounter_conditionsCreateWithoutEncounter_condition_valuesInput, {nullable:false})
    @Type(() => encounter_conditionsCreateWithoutEncounter_condition_valuesInput)
    create!: encounter_conditionsCreateWithoutEncounter_condition_valuesInput;
}
