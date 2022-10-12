import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { version_groups } from '../version-groups/version-groups.model';
import { abilities } from '../abilities/abilities.model';
import { ability_changelog_prose } from '../ability-changelog-prose/ability-changelog-prose.model';
import { Ability_changelogCount } from '../prisma/ability-changelog-count.output';

@ObjectType()
export class ability_changelog {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;

    @Field(() => abilities, {nullable:false})
    abilities?: abilities;

    @Field(() => [ability_changelog_prose], {nullable:true})
    ability_changelog_prose?: Array<ability_changelog_prose>;

    @Field(() => Ability_changelogCount, {nullable:false})
    _count?: Ability_changelogCount;
}
