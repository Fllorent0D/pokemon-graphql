import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereInput } from '../location-area-encounter-rates/location-area-encounter-rates-where.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesOrderByWithAggregationInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-with-aggregation.input';
import { Location_area_encounter_ratesScalarFieldEnum } from './location-area-encounter-rates-scalar-field.enum';
import { location_area_encounter_ratesScalarWhereWithAggregatesInput } from '../location-area-encounter-rates/location-area-encounter-rates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesWhereInput, {nullable:true})
    @Type(() => location_area_encounter_ratesWhereInput)
    where?: location_area_encounter_ratesWhereInput;

    @Field(() => [location_area_encounter_ratesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<location_area_encounter_ratesOrderByWithAggregationInput>;

    @Field(() => [Location_area_encounter_ratesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Location_area_encounter_ratesScalarFieldEnum>;

    @Field(() => location_area_encounter_ratesScalarWhereWithAggregatesInput, {nullable:true})
    having?: location_area_encounter_ratesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
