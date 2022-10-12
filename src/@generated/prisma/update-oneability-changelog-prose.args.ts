import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelog_proseUpdateInput } from '../ability-changelog-prose/ability-changelog-prose-update.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseWhereUniqueInput } from '../ability-changelog-prose/ability-changelog-prose-where-unique.input';

@ArgsType()
export class UpdateOneabilityChangelogProseArgs {

    @Field(() => ability_changelog_proseUpdateInput, {nullable:false})
    @Type(() => ability_changelog_proseUpdateInput)
    data!: ability_changelog_proseUpdateInput;

    @Field(() => ability_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelog_proseWhereUniqueInput)
    where!: ability_changelog_proseWhereUniqueInput;
}
