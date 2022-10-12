import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogUpdateInput } from '../move-effect-changelog/move-effect-changelog-update.input';
import { Type } from 'class-transformer';
import { move_effect_changelogWhereUniqueInput } from '../move-effect-changelog/move-effect-changelog-where-unique.input';

@ArgsType()
export class UpdateOnemoveEffectChangelogArgs {

    @Field(() => move_effect_changelogUpdateInput, {nullable:false})
    @Type(() => move_effect_changelogUpdateInput)
    data!: move_effect_changelogUpdateInput;

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelogWhereUniqueInput)
    where!: move_effect_changelogWhereUniqueInput;
}
