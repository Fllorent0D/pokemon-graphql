import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Encounter_methodsRelationFilter } from '../prisma/encounter-methods-relation-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';
import { EncountersListRelationFilter } from '../prisma/encounters-list-relation-filter.input';

@InputType()
export class encounter_slotsWhereInput {

    @Field(() => [encounter_slotsWhereInput], {nullable:true})
    AND?: Array<encounter_slotsWhereInput>;

    @Field(() => [encounter_slotsWhereInput], {nullable:true})
    OR?: Array<encounter_slotsWhereInput>;

    @Field(() => [encounter_slotsWhereInput], {nullable:true})
    NOT?: Array<encounter_slotsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    slot?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rarity?: IntNullableFilter;

    @Field(() => Encounter_methodsRelationFilter, {nullable:true})
    encounter_methods?: Encounter_methodsRelationFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;
}
