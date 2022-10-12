import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereUniqueInput } from '../super-contest-effect-prose/super-contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnesuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    where!: super_contest_effect_proseWhereUniqueInput;
}
