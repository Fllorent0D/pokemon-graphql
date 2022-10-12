import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesUpdateInput } from '../location-area-encounter-rates/location-area-encounter-rates-update.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesWhereUniqueInput } from '../location-area-encounter-rates/location-area-encounter-rates-where-unique.input';

@ArgsType()
export class UpdateOnelocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesUpdateInput, {nullable:false})
    @Type(() => location_area_encounter_ratesUpdateInput)
    data!: location_area_encounter_ratesUpdateInput;

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:false})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    where!: location_area_encounter_ratesWhereUniqueInput;
}
