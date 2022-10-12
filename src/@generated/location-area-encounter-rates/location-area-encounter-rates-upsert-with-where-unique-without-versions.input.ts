import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesUpdateWithoutVersionsInput } from './location-area-encounter-rates-update-without-versions.input';
import { location_area_encounter_ratesCreateWithoutVersionsInput } from './location-area-encounter-rates-create-without-versions.input';

@InputType()
export class location_area_encounter_ratesUpsertWithWhereUniqueWithoutVersionsInput {

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:false})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    where!: location_area_encounter_ratesWhereUniqueInput;

    @Field(() => location_area_encounter_ratesUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => location_area_encounter_ratesUpdateWithoutVersionsInput)
    update!: location_area_encounter_ratesUpdateWithoutVersionsInput;

    @Field(() => location_area_encounter_ratesCreateWithoutVersionsInput, {nullable:false})
    @Type(() => location_area_encounter_ratesCreateWithoutVersionsInput)
    create!: location_area_encounter_ratesCreateWithoutVersionsInput;
}
