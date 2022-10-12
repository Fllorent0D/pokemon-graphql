import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_method_proseUncheckedCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-method-prose/encounter-method-prose-unchecked-create-nested-many-without-encounter-methods.input';
import { location_area_encounter_ratesUncheckedCreateNestedManyWithoutEncounter_methodsInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-encounter-methods.input';

@InputType()
export class encounter_methodsUncheckedCreateWithoutEncounter_slotsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_method_proseUncheckedCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUncheckedCreateNestedManyWithoutEncounter_methodsInput;

    @Field(() => location_area_encounter_ratesUncheckedCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUncheckedCreateNestedManyWithoutEncounter_methodsInput;
}
