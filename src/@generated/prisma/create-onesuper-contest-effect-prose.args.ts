import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseCreateInput } from '../super-contest-effect-prose/super-contest-effect-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseCreateInput, {nullable:false})
    @Type(() => super_contest_effect_proseCreateInput)
    data!: super_contest_effect_proseCreateInput;
}
