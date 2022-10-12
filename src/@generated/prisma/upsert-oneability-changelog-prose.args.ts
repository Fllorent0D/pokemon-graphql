import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseWhereUniqueInput } from '../ability-changelog-prose/ability-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseCreateInput } from '../ability-changelog-prose/ability-changelog-prose-create.input';
import { ability_changelog_proseUpdateInput } from '../ability-changelog-prose/ability-changelog-prose-update.input';

@ArgsType()
export class UpsertOneabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    where!: ability_changelog_proseWhereUniqueInput;

    @Field(() => ability_changelog_proseCreateInput, {nullable:false})
    @Type(() => ability_changelog_proseCreateInput)
    create!: ability_changelog_proseCreateInput;

    @Field(() => ability_changelog_proseUpdateInput, {nullable:false})
    @Type(() => ability_changelog_proseUpdateInput)
    update!: ability_changelog_proseUpdateInput;
}
