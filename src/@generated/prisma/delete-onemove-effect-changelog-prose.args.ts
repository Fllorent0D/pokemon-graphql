import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereUniqueInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelog_proseWhereUniqueInput)
    where!: move_effect_changelog_proseWhereUniqueInput;
}
