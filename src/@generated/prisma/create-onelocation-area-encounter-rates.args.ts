import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesCreateInput } from '../location-area-encounter-rates/location-area-encounter-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesCreateInput, {nullable:false})
    @Type(() => location_area_encounter_ratesCreateInput)
    data!: location_area_encounter_ratesCreateInput;
}
