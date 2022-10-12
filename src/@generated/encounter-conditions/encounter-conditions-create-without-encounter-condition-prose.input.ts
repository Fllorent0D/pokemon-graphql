import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesCreateNestedManyWithoutEncounter_conditionsInput } from '../encounter-condition-values/encounter-condition-values-create-nested-many-without-encounter-conditions.input';

@InputType()
export class encounter_conditionsCreateWithoutEncounter_condition_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_condition_valuesCreateNestedManyWithoutEncounter_conditionsInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesCreateNestedManyWithoutEncounter_conditionsInput;
}
