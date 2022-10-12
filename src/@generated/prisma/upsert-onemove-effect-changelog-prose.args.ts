import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereUniqueInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseCreateInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-create.input';
import { move_effect_changelog_proseUpdateInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-update.input';

@ArgsType()
export class UpsertOnemoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    where!: move_effect_changelog_proseWhereUniqueInput;

    @Field(() => move_effect_changelog_proseCreateInput, {nullable:false})
    @Type(() => move_effect_changelog_proseCreateInput)
    create!: move_effect_changelog_proseCreateInput;

    @Field(() => move_effect_changelog_proseUpdateInput, {nullable:false})
    @Type(() => move_effect_changelog_proseUpdateInput)
    update!: move_effect_changelog_proseUpdateInput;
}
