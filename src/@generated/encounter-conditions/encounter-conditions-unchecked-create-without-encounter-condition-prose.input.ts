import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_condition_valuesUncheckedCreateNestedManyWithoutEncounter_conditionsInput } from '../encounter-condition-values/encounter-condition-values-unchecked-create-nested-many-without-encounter-conditions.input';

@InputType()
export class encounter_conditionsUncheckedCreateWithoutEncounter_condition_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_condition_valuesUncheckedCreateNestedManyWithoutEncounter_conditionsInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesUncheckedCreateNestedManyWithoutEncounter_conditionsInput;
}
