import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereInput } from '../location-area-encounter-rates/location-area-encounter-rates-where.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesOrderByWithRelationInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-with-relation.input';
import { location_area_encounter_ratesWhereUniqueInput } from '../location-area-encounter-rates/location-area-encounter-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Location_area_encounter_ratesScalarFieldEnum } from './location-area-encounter-rates-scalar-field.enum';

@ArgsType()
export class FindManylocationAreaEncounterRatesArgs {

    @Field(() => location_area_encounter_ratesWhereInput, {nullable:true})
    @Type(() => location_area_encounter_ratesWhereInput)
    where?: location_area_encounter_ratesWhereInput;

    @Field(() => [location_area_encounter_ratesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<location_area_encounter_ratesOrderByWithRelationInput>;

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:true})
    cursor?: location_area_encounter_ratesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Location_area_encounter_ratesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Location_area_encounter_ratesScalarFieldEnum>;
}
