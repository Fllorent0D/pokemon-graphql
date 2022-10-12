import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEncounter_method_proseInput } from '../languages/languages-create-nested-one-without-encounter-method-prose.input';
import { encounter_methodsCreateNestedOneWithoutEncounter_method_proseInput } from '../encounter-methods/encounter-methods-create-nested-one-without-encounter-method-prose.input';

@InputType()
export class encounter_method_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEncounter_method_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEncounter_method_proseInput;

    @Field(() => encounter_methodsCreateNestedOneWithoutEncounter_method_proseInput, {nullable:false})
    encounter_methods!: encounter_methodsCreateNestedOneWithoutEncounter_method_proseInput;
}
