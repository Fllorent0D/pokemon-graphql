import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEncounter_condition_proseInput } from '../languages/languages-create-nested-one-without-encounter-condition-prose.input';
import { encounter_conditionsCreateNestedOneWithoutEncounter_condition_proseInput } from '../encounter-conditions/encounter-conditions-create-nested-one-without-encounter-condition-prose.input';

@InputType()
export class encounter_condition_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEncounter_condition_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEncounter_condition_proseInput;

    @Field(() => encounter_conditionsCreateNestedOneWithoutEncounter_condition_proseInput, {nullable:false})
    encounter_conditions!: encounter_conditionsCreateNestedOneWithoutEncounter_condition_proseInput;
}
