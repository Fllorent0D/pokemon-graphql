import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';
import { AbilitiesRelationFilter } from '../prisma/abilities-relation-filter.input';
import { Ability_changelog_proseListRelationFilter } from '../prisma/ability-changelog-prose-list-relation-filter.input';

@InputType()
export class ability_changelogWhereInput {

    @Field(() => [ability_changelogWhereInput], {nullable:true})
    AND?: Array<ability_changelogWhereInput>;

    @Field(() => [ability_changelogWhereInput], {nullable:true})
    OR?: Array<ability_changelogWhereInput>;

    @Field(() => [ability_changelogWhereInput], {nullable:true})
    NOT?: Array<ability_changelogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    changed_in_version_group_id?: IntFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;

    @Field(() => AbilitiesRelationFilter, {nullable:true})
    abilities?: AbilitiesRelationFilter;

    @Field(() => Ability_changelog_proseListRelationFilter, {nullable:true})
    ability_changelog_prose?: Ability_changelog_proseListRelationFilter;
}
