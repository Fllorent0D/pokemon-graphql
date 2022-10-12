import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Encounter_method_proseListRelationFilter } from '../prisma/encounter-method-prose-list-relation-filter.input';
import { Encounter_slotsListRelationFilter } from '../prisma/encounter-slots-list-relation-filter.input';
import { Location_area_encounter_ratesListRelationFilter } from '../prisma/location-area-encounter-rates-list-relation-filter.input';

@InputType()
export class encounter_methodsWhereInput {

    @Field(() => [encounter_methodsWhereInput], {nullable:true})
    AND?: Array<encounter_methodsWhereInput>;

    @Field(() => [encounter_methodsWhereInput], {nullable:true})
    OR?: Array<encounter_methodsWhereInput>;

    @Field(() => [encounter_methodsWhereInput], {nullable:true})
    NOT?: Array<encounter_methodsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Encounter_method_proseListRelationFilter, {nullable:true})
    encounter_method_prose?: Encounter_method_proseListRelationFilter;

    @Field(() => Encounter_slotsListRelationFilter, {nullable:true})
    encounter_slots?: Encounter_slotsListRelationFilter;

    @Field(() => Location_area_encounter_ratesListRelationFilter, {nullable:true})
    location_area_encounter_rates?: Location_area_encounter_ratesListRelationFilter;
}
