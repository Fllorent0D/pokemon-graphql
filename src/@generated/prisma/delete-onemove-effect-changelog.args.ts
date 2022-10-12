import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogWhereUniqueInput } from '../move-effect-changelog/move-effect-changelog-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveEffectChangelogArgs {

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelogWhereUniqueInput)
    where!: move_effect_changelogWhereUniqueInput;
}
