import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesUpdateWithoutEncounter_condition_value_proseInput } from './encounter-condition-values-update-without-encounter-condition-value-prose.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput } from './encounter-condition-values-create-without-encounter-condition-value-prose.input';

@InputType()
export class encounter_condition_valuesUpsertWithoutEncounter_condition_value_proseInput {

    @Field(() => encounter_condition_valuesUpdateWithoutEncounter_condition_value_proseInput, {nullable:false})
    @Type(() => encounter_condition_valuesUpdateWithoutEncounter_condition_value_proseInput)
    update!: encounter_condition_valuesUpdateWithoutEncounter_condition_value_proseInput;

    @Field(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput, {nullable:false})
    @Type(() => encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput)
    create!: encounter_condition_valuesCreateWithoutEncounter_condition_value_proseInput;
}
