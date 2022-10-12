import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEncounter_condition_value_proseInput } from '../languages/languages-create-nested-one-without-encounter-condition-value-prose.input';
import { encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_proseInput } from '../encounter-condition-values/encounter-condition-values-create-nested-one-without-encounter-condition-value-prose.input';

@InputType()
export class encounter_condition_value_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEncounter_condition_value_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEncounter_condition_value_proseInput;

    @Field(() => encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_proseInput, {nullable:false})
    encounter_condition_values!: encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_proseInput;
}
