import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { versions } from '../versions/versions.model';
import { encounter_methods } from '../encounter-methods/encounter-methods.model';
import { location_areas } from '../location-areas/location-areas.model';

@ObjectType()
export class location_area_encounter_rates {

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:true})
    rate!: number | null;

    @Field(() => versions, {nullable:false})
    versions?: versions;

    @Field(() => encounter_methods, {nullable:false})
    encounter_methods?: encounter_methods;

    @Field(() => location_areas, {nullable:false})
    location_areas?: location_areas;
}
