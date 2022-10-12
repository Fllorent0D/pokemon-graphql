import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsUpdateWithoutLocation_area_encounter_ratesInput } from './versions-update-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutLocation_area_encounter_ratesInput } from './versions-create-without-location-area-encounter-rates.input';

@InputType()
export class versionsUpsertWithoutLocation_area_encounter_ratesInput {

    @Field(() => versionsUpdateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => versionsUpdateWithoutLocation_area_encounter_ratesInput)
    update!: versionsUpdateWithoutLocation_area_encounter_ratesInput;

    @Field(() => versionsCreateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => versionsCreateWithoutLocation_area_encounter_ratesInput)
    create!: versionsCreateWithoutLocation_area_encounter_ratesInput;
}
