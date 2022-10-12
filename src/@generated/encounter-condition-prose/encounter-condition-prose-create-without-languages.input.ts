import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsCreateNestedOneWithoutEncounter_condition_proseInput } from '../encounter-conditions/encounter-conditions-create-nested-one-without-encounter-condition-prose.input';

@InputType()
export class encounter_condition_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => encounter_conditionsCreateNestedOneWithoutEncounter_condition_proseInput, {nullable:false})
    encounter_conditions!: encounter_conditionsCreateNestedOneWithoutEncounter_condition_proseInput;
}
