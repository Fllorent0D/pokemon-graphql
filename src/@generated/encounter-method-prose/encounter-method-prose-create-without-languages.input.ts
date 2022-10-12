import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsCreateNestedOneWithoutEncounter_method_proseInput } from '../encounter-methods/encounter-methods-create-nested-one-without-encounter-method-prose.input';

@InputType()
export class encounter_method_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => encounter_methodsCreateNestedOneWithoutEncounter_method_proseInput, {nullable:false})
    encounter_methods!: encounter_methodsCreateNestedOneWithoutEncounter_method_proseInput;
}
