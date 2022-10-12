import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LocationsRelationFilter } from '../prisma/locations-relation-filter.input';
import { EncountersListRelationFilter } from '../prisma/encounters-list-relation-filter.input';
import { Location_area_encounter_ratesListRelationFilter } from '../prisma/location-area-encounter-rates-list-relation-filter.input';
import { Location_area_proseListRelationFilter } from '../prisma/location-area-prose-list-relation-filter.input';

@InputType()
export class location_areasWhereInput {

    @Field(() => [location_areasWhereInput], {nullable:true})
    AND?: Array<location_areasWhereInput>;

    @Field(() => [location_areasWhereInput], {nullable:true})
    OR?: Array<location_areasWhereInput>;

    @Field(() => [location_areasWhereInput], {nullable:true})
    NOT?: Array<location_areasWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    identifier?: StringNullableFilter;

    @Field(() => LocationsRelationFilter, {nullable:true})
    locations?: LocationsRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;

    @Field(() => Location_area_encounter_ratesListRelationFilter, {nullable:true})
    location_area_encounter_rates?: Location_area_encounter_ratesListRelationFilter;

    @Field(() => Location_area_proseListRelationFilter, {nullable:true})
    location_area_prose?: Location_area_proseListRelationFilter;
}
