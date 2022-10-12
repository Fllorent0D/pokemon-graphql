import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasUpdateWithoutLocation_area_encounter_ratesInput } from './location-areas-update-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { location_areasCreateWithoutLocation_area_encounter_ratesInput } from './location-areas-create-without-location-area-encounter-rates.input';

@InputType()
export class location_areasUpsertWithoutLocation_area_encounter_ratesInput {

    @Field(() => location_areasUpdateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => location_areasUpdateWithoutLocation_area_encounter_ratesInput)
    update!: location_areasUpdateWithoutLocation_area_encounter_ratesInput;

    @Field(() => location_areasCreateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => location_areasCreateWithoutLocation_area_encounter_ratesInput)
    create!: location_areasCreateWithoutLocation_area_encounter_ratesInput;
}
