import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_proseInput } from '../encounter-condition-values/encounter-condition-values-create-nested-one-without-encounter-condition-value-prose.input';

@InputType()
export class encounter_condition_value_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_proseInput, {nullable:false})
    encounter_condition_values!: encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_proseInput;
}
