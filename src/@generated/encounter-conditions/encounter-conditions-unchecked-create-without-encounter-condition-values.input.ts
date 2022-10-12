import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_condition_proseUncheckedCreateNestedManyWithoutEncounter_conditionsInput } from '../encounter-condition-prose/encounter-condition-prose-unchecked-create-nested-many-without-encounter-conditions.input';

@InputType()
export class encounter_conditionsUncheckedCreateWithoutEncounter_condition_valuesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_condition_proseUncheckedCreateNestedManyWithoutEncounter_conditionsInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseUncheckedCreateNestedManyWithoutEncounter_conditionsInput;
}
