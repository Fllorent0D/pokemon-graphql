import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { version_groups } from '../version-groups/version-groups.model';
import { move_effects } from '../move-effects/move-effects.model';
import { move_effect_changelog_prose } from '../move-effect-changelog-prose/move-effect-changelog-prose.model';
import { Move_effect_changelogCount } from '../prisma/move-effect-changelog-count.output';

@ObjectType()
export class move_effect_changelog {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    effect_id!: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;

    @Field(() => move_effects, {nullable:false})
    move_effects?: move_effects;

    @Field(() => [move_effect_changelog_prose], {nullable:true})
    move_effect_changelog_prose?: Array<move_effect_changelog_prose>;

    @Field(() => Move_effect_changelogCount, {nullable:false})
    _count?: Move_effect_changelogCount;
}
