import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesUpdateManyMutationInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesWhereInput } from '../location-area-encounter-rates/location-area-encounter-rates-where.input';

@ArgsType()
export class UpdateManylocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => location_area_encounter_ratesUpdateManyMutationInput)
    data!: location_area_encounter_ratesUpdateManyMutationInput;

    @Field(() => location_area_encounter_ratesWhereInput, {nullable:true})
    @Type(() => location_area_encounter_ratesWhereInput)
    where?: location_area_encounter_ratesWhereInput;
}
