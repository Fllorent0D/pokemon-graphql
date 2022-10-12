import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';
import { Move_effectsRelationFilter } from '../prisma/move-effects-relation-filter.input';
import { Move_effect_changelog_proseListRelationFilter } from '../prisma/move-effect-changelog-prose-list-relation-filter.input';

@InputType()
export class move_effect_changelogWhereInput {

    @Field(() => [move_effect_changelogWhereInput], {nullable:true})
    AND?: Array<move_effect_changelogWhereInput>;

    @Field(() => [move_effect_changelogWhereInput], {nullable:true})
    OR?: Array<move_effect_changelogWhereInput>;

    @Field(() => [move_effect_changelogWhereInput], {nullable:true})
    NOT?: Array<move_effect_changelogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    changed_in_version_group_id?: IntFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;

    @Field(() => Move_effectsRelationFilter, {nullable:true})
    move_effects?: Move_effectsRelationFilter;

    @Field(() => Move_effect_changelog_proseListRelationFilter, {nullable:true})
    move_effect_changelog_prose?: Move_effect_changelog_proseListRelationFilter;
}
