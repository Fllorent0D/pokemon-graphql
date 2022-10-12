import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelog_proseWhereInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveEffectChangelogProseArgs {

    @Field(() => move_effect_changelog_proseWhereInput, {nullable:true})
    @Type(() => move_effect_changelog_proseWhereInput)
    where?: move_effect_changelog_proseWhereInput;
}
