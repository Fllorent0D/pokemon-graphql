import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonRelationFilter } from '../prisma/pokemon-relation-filter.input';
import { Encounter_slotsRelationFilter } from '../prisma/encounter-slots-relation-filter.input';
import { Location_areasRelationFilter } from '../prisma/location-areas-relation-filter.input';
import { VersionsRelationFilter } from '../prisma/versions-relation-filter.input';
import { Encounter_condition_value_mapListRelationFilter } from '../prisma/encounter-condition-value-map-list-relation-filter.input';

@InputType()
export class encountersWhereInput {

    @Field(() => [encountersWhereInput], {nullable:true})
    AND?: Array<encountersWhereInput>;

    @Field(() => [encountersWhereInput], {nullable:true})
    OR?: Array<encountersWhereInput>;

    @Field(() => [encountersWhereInput], {nullable:true})
    NOT?: Array<encountersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_slot_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    min_level?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_level?: IntFilter;

    @Field(() => PokemonRelationFilter, {nullable:true})
    pokemon?: PokemonRelationFilter;

    @Field(() => Encounter_slotsRelationFilter, {nullable:true})
    encounter_slots?: Encounter_slotsRelationFilter;

    @Field(() => Location_areasRelationFilter, {nullable:true})
    location_areas?: Location_areasRelationFilter;

    @Field(() => VersionsRelationFilter, {nullable:true})
    versions?: VersionsRelationFilter;

    @Field(() => Encounter_condition_value_mapListRelationFilter, {nullable:true})
    encounter_condition_value_map?: Encounter_condition_value_mapListRelationFilter;
}
