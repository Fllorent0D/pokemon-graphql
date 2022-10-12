import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereInput } from '../location-area-encounter-rates/location-area-encounter-rates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesWhereInput, {nullable:true})
    @Type(() => location_area_encounter_ratesWhereInput)
    where?: location_area_encounter_ratesWhereInput;
}
