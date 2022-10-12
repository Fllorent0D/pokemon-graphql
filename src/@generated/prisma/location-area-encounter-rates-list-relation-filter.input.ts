import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereInput } from '../location-area-encounter-rates/location-area-encounter-rates-where.input';

@InputType()
export class Location_area_encounter_ratesListRelationFilter {

    @Field(() => location_area_encounter_ratesWhereInput, {nullable:true})
    every?: location_area_encounter_ratesWhereInput;

    @Field(() => location_area_encounter_ratesWhereInput, {nullable:true})
    some?: location_area_encounter_ratesWhereInput;

    @Field(() => location_area_encounter_ratesWhereInput, {nullable:true})
    none?: location_area_encounter_ratesWhereInput;
}
