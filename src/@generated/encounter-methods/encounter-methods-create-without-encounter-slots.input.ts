import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseCreateNestedManyWithoutEncounter_methodsInput } from '../encounter-method-prose/encounter-method-prose-create-nested-many-without-encounter-methods.input';
import { location_area_encounter_ratesCreateNestedManyWithoutEncounter_methodsInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-encounter-methods.input';

@InputType()
export class encounter_methodsCreateWithoutEncounter_slotsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encounter_method_proseCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseCreateNestedManyWithoutEncounter_methodsInput;

    @Field(() => location_area_encounter_ratesCreateNestedManyWithoutEncounter_methodsInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesCreateNestedManyWithoutEncounter_methodsInput;
}
