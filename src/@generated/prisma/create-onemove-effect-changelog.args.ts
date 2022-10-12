import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogCreateInput } from '../move-effect-changelog/move-effect-changelog-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveEffectChangelogArgs {

    @Field(() => move_effect_changelogCreateInput, {nullable:false})
    @Type(() => move_effect_changelogCreateInput)
    data!: move_effect_changelogCreateInput;
}
