import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseCreateNestedManyWithoutEncounter_conditionsInput } from '../encounter-condition-prose/encounter-condition-prose-create-nested-many-without-encounter-conditions.input';
import { encounter_condition_valuesCreateNestedManyWithoutEncounter_conditionsInput } from '../encounter-condition-values/encounter-condition-values-create-nested-many-without-encounter-conditions.input';

@InputType()
export class encounter_conditionsCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_condition_proseCreateNestedManyWithoutEncounter_conditionsInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseCreateNestedManyWithoutEncounter_conditionsInput;

    @Field(() => encounter_condition_valuesCreateNestedManyWithoutEncounter_conditionsInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesCreateNestedManyWithoutEncounter_conditionsInput;
}
