import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-method-prose/encounter-method-prose-create-nested-many-without-encounter-methods.input';
import { encounter_slotsCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-slots/encounter-slots-create-nested-many-without-encounter-methods.input';

@InputType()
export class encounter_methodsCreateWithoutLocation_area_encounter_ratesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_method_proseCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseCreateNestedManyWithoutEncounter_methodsInput;

    @Field(() => encounter_slotsCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_slots?: encounter_slotsCreateNestedManyWithoutEncounter_methodsInput;
}
