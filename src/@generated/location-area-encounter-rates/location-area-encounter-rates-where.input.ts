import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { VersionsRelationFilter } from '../prisma/versions-relation-filter.input';
import { Encounter_methodsRelationFilter } from '../prisma/encounter-methods-relation-filter.input';
import { Location_areasRelationFilter } from '../prisma/location-areas-relation-filter.input';

@InputType()
export class location_area_encounter_ratesWhereInput {

    @Field(() => [location_area_encounter_ratesWhereInput], {nullable:true})
    AND?: Array<location_area_encounter_ratesWhereInput>;

    @Field(() => [location_area_encounter_ratesWhereInput], {nullable:true})
    OR?: Array<location_area_encounter_ratesWhereInput>;

    @Field(() => [location_area_encounter_ratesWhereInput], {nullable:true})
    NOT?: Array<location_area_encounter_ratesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rate?: IntNullableFilter;

    @Field(() => VersionsRelationFilter, {nullable:true})
    versions?: VersionsRelationFilter;

    @Field(() => Encounter_methodsRelationFilter, {nullable:true})
    encounter_methods?: Encounter_methodsRelationFilter;

    @Field(() => Location_areasRelationFilter, {nullable:true})
    location_areas?: Location_areasRelationFilter;
}
