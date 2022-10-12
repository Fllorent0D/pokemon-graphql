import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseCreateInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseCreateInput, {nullable:false})
    @Type(() => move_effect_changelog_proseCreateInput)
    data!: move_effect_changelog_proseCreateInput;
}
