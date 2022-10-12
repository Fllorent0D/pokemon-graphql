import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapCreateNestedManyWithoutEncounter_condition_valuesInput } from '../encounter-condition-value-map/encounter-condition-value-map-create-nested-many-without-encounter-condition-values.input';
import { encounter_condition_value_proseCreateNestedManyWithoutEncounter_condition_valuesInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-create-nested-many-without-encounter-condition-values.input';

@InputType()
export class encounter_condition_valuesCreateWithoutEncounter_conditionsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => encounter_condition_value_mapCreateNestedManyWithoutEncounter_condition_valuesInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapCreateNestedManyWithoutEncounter_condition_valuesInput;

    @Field(() => encounter_condition_value_proseCreateNestedManyWithoutEncounter_condition_valuesInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseCreateNestedManyWithoutEncounter_condition_valuesInput;
}
