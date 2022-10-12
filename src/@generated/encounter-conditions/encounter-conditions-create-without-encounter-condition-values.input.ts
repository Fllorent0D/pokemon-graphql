import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseCreateNestedManyWithoutEncounter_conditionsInput } from '../encounter-condition-prose/encounter-condition-prose-create-nested-many-without-encounter-conditions.input';

@InputType()
export class encounter_conditionsCreateWithoutEncounter_condition_valuesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_condition_proseCreateNestedManyWithoutEncounter_conditionsInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseCreateNestedManyWithoutEncounter_conditionsInput;
}
