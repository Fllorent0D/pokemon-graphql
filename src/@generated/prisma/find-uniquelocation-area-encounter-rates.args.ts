import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereUniqueInput } from '../location-area-encounter-rates/location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquelocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:false})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    where!: location_area_encounter_ratesWhereUniqueInput;
}
