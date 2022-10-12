import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsUpdateWithoutLocation_area_encounter_ratesInput } from './encounter-methods-update-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateWithoutLocation_area_encounter_ratesInput } from './encounter-methods-create-without-location-area-encounter-rates.input';

@InputType()
export class encounter_methodsUpsertWithoutLocation_area_encounter_ratesInput {

    @Field(() => encounter_methodsUpdateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => encounter_methodsUpdateWithoutLocation_area_encounter_ratesInput)
    update!: encounter_methodsUpdateWithoutLocation_area_encounter_ratesInput;

    @Field(() => encounter_methodsCreateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => encounter_methodsCreateWithoutLocation_area_encounter_ratesInput)
    create!: encounter_methodsCreateWithoutLocation_area_encounter_ratesInput;
}
