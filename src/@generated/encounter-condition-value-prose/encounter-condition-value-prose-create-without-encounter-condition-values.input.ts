import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEncounter_condition_value_proseInput } from '../languages/languages-create-nested-one-without-encounter-condition-value-prose.input';

@InputType()
export class encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEncounter_condition_value_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEncounter_condition_value_proseInput;
}
