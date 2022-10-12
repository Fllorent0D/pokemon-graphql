import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseUpdateManyMutationInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseWhereInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where.input';

@ArgsType()
export class UpdateManymoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_effect_changelog_proseUpdateManyMutationInput)
    data!: move_effect_changelog_proseUpdateManyMutationInput;

    @Field(() => move_effect_changelog_proseWhereInput, {nullable:true})
    @Type(() => move_effect_changelog_proseWhereInput)
    where?: move_effect_changelog_proseWhereInput;
}
