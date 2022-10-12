import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsCreateNestedOneWithoutEncounter_condition_valuesInput } from '../encounter-conditions/encounter-conditions-create-nested-one-without-encounter-condition-values.input';
import { encounter_condition_value_proseCreateNestedManyWithoutEncounter_condition_valuesInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-create-nested-many-without-encounter-condition-values.input';

@InputType()
export class encounter_condition_valuesCreateWithoutEncounter_condition_value_mapInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => encounter_conditionsCreateNestedOneWithoutEncounter_condition_valuesInput, {nullable:false})
    encounter_conditions!: encounter_conditionsCreateNestedOneWithoutEncounter_condition_valuesInput;

    @Field(() => encounter_condition_value_proseCreateNestedManyWithoutEncounter_condition_valuesInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseCreateNestedManyWithoutEncounter_condition_valuesInput;
}
