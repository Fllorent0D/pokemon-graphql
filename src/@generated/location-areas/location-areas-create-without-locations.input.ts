import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encountersCreateNestedManyWithoutLocation_areasInput } from '../encounters/encounters-create-nested-many-without-location-areas.input';
import { location_area_encounter_ratesCreateNestedManyWithoutLocation_areasInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-location-areas.input';
import { location_area_proseCreateNestedManyWithoutLocation_areasInput } from '../location-area-prose/location-area-prose-create-nested-many-without-location-areas.input';

@InputType()
export class location_areasCreateWithoutLocationsInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => encountersCreateNestedManyWithoutLocation_areasInput, {nullable:true})
    encounters?: encountersCreateNestedManyWithoutLocation_areasInput;

    @Field(() => location_area_encounter_ratesCreateNestedManyWithoutLocation_areasInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesCreateNestedManyWithoutLocation_areasInput;

    @Field(() => location_area_proseCreateNestedManyWithoutLocation_areasInput, {nullable:true})
    location_area_prose?: location_area_proseCreateNestedManyWithoutLocation_areasInput;
}
