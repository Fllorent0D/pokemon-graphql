import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-slots/encounter-slots-create-nested-many-without-encounter-methods.input';
import { location_area_encounter_ratesCreateNestedManyWithoutEncounter_methodsInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-encounter-methods.input';

@InputType()
export class encounter_methodsCreateWithoutEncounter_method_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_slotsCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_slots?: encounter_slotsCreateNestedManyWithoutEncounter_methodsInput;

    @Field(() => location_area_encounter_ratesCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesCreateNestedManyWithoutEncounter_methodsInput;
}
