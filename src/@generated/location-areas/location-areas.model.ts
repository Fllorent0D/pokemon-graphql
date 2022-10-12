import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { locations } from '../locations/locations.model';
import { encounters } from '../encounters/encounters.model';
import { location_area_encounter_rates } from '../location-area-encounter-rates/location-area-encounter-rates.model';
import { location_area_prose } from '../location-area-prose/location-area-prose.model';
import { Location_areasCount } from '../prisma/location-areas-count.output';

@ObjectType()
export class location_areas {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier!: string | null;

    @Field(() => locations, {nullable:false})
    locations?: locations;

    @Field(() => [encounters], {nullable:true})
    encounters?: Array<encounters>;

    @Field(() => [location_area_encounter_rates], {nullable:true})
    location_area_encounter_rates?: Array<location_area_encounter_rates>;

    @Field(() => [location_area_prose], {nullable:true})
    location_area_prose?: Array<location_area_prose>;

    @Field(() => Location_areasCount, {nullable:false})
    _count?: Location_areasCount;
}
