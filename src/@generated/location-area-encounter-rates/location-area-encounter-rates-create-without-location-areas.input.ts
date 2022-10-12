import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { versionsCreateNestedOneWithoutLocation_area_encounter_ratesInput } from '../versions/versions-create-nested-one-without-location-area-encounter-rates.input';
import { encounter_methodsCreateNestedOneWithoutLocation_area_encounter_ratesInput } from '../encounter-methods/encounter-methods-create-nested-one-without-location-area-encounter-rates.input';

@InputType()
export class location_area_encounter_ratesCreateWithoutLocation_areasInput {

    @Field(() => Int, {nullable:true})
    rate?: number;

    @Field(() => versionsCreateNestedOneWithoutLocation_area_encounter_ratesInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutLocation_area_encounter_ratesInput;

    @Field(() => encounter_methodsCreateNestedOneWithoutLocation_area_encounter_ratesInput, {nullable:false})
    encounter_methods!: encounter_methodsCreateNestedOneWithoutLocation_area_encounter_ratesInput;
}
