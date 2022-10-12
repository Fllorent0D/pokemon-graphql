import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogWhereUniqueInput } from '../move-effect-changelog/move-effect-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateInput } from '../move-effect-changelog/move-effect-changelog-create.input';
import { move_effect_changelogUpdateInput } from '../move-effect-changelog/move-effect-changelog-update.input';

@ArgsType()
export class UpsertOnemoveEffectChangelogArgs {

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelogWhereUniqueInput)
    where!: move_effect_changelogWhereUniqueInput;

    @Field(() => move_effect_changelogCreateInput, {nullable:false})
    @Type(() => move_effect_changelogCreateInput)
    create!: move_effect_changelogCreateInput;

    @Field(() => move_effect_changelogUpdateInput, {nullable:false})
    @Type(() => move_effect_changelogUpdateInput)
    update!: move_effect_changelogUpdateInput;
}
