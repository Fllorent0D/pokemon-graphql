import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_slotsUncheckedCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-slots/encounter-slots-unchecked-create-nested-many-without-encounter-methods.input';
import { location_area_encounter_ratesUncheckedCreateNestedManyWithoutEncounter_methodsInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-encounter-methods.input';

@InputType()
export class encounter_methodsUncheckedCreateWithoutEncounter_method_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_slotsUncheckedCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_slots?: encounter_slotsUncheckedCreateNestedManyWithoutEncounter_methodsInput;

    @Field(() => location_area_encounter_ratesUncheckedCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUncheckedCreateNestedManyWithoutEncounter_methodsInput;
}
