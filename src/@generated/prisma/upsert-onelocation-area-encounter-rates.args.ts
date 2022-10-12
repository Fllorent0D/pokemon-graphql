import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereUniqueInput } from '../location-area-encounter-rates/location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateInput } from '../location-area-encounter-rates/location-area-encounter-rates-create.input';
import { location_area_encounter_ratesUpdateInput } from '../location-area-encounter-rates/location-area-encounter-rates-update.input';

@ArgsType()
export class UpsertOnelocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:false})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    where!: location_area_encounter_ratesWhereUniqueInput;

    @Field(() => location_area_encounter_ratesCreateInput, {nullable:false})
    @Type(() => location_area_encounter_ratesCreateInput)
    create!: location_area_encounter_ratesCreateInput;

    @Field(() => location_area_encounter_ratesUpdateInput, {nullable:false})
    @Type(() => location_area_encounter_ratesUpdateInput)
    update!: location_area_encounter_ratesUpdateInput;
}
