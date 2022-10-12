import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateNestedOneWithoutEncounter_condition_value_mapInput } from '../encounters/encounters-create-nested-one-without-encounter-condition-value-map.input';

@InputType()
export class encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput {

    @Field(() => encountersCreateNestedOneWithoutEncounter_condition_value_mapInput, {nullable:false})
    encounters!: encountersCreateNestedOneWithoutEncounter_condition_value_mapInput;
}
