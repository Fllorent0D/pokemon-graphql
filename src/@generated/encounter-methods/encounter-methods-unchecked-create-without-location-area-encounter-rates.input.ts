import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_method_proseUncheckedCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-method-prose/encounter-method-prose-unchecked-create-nested-many-without-encounter-methods.input';
import { encounter_slotsUncheckedCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-slots/encounter-slots-unchecked-create-nested-many-without-encounter-methods.input';

@InputType()
export class encounter_methodsUncheckedCreateWithoutLocation_area_encounter_ratesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_method_proseUncheckedCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUncheckedCreateNestedManyWithoutEncounter_methodsInput;

    @Field(() => encounter_slotsUncheckedCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_slots?: encounter_slotsUncheckedCreateNestedManyWithoutEncounter_methodsInput;
}
