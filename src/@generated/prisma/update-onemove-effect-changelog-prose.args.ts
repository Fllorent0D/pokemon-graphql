import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseUpdateInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-update.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseWhereUniqueInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where-unique.input';

@ArgsType()
export class UpdateOnemoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseUpdateInput, {nullable:false})
    @Type(() => move_effect_changelog_proseUpdateInput)
    data!: move_effect_changelog_proseUpdateInput;

    @Field(() => move_effect_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    where!: move_effect_changelog_proseWhereUniqueInput;
}
