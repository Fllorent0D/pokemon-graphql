import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseUpdateInput } from '../super-contest-effect-prose/super-contest-effect-prose-update.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseWhereUniqueInput } from '../super-contest-effect-prose/super-contest-effect-prose-where-unique.input';

@ArgsType()
export class UpdateOnesuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseUpdateInput, {nullable:false})
    @Type(() => super_contest_effect_proseUpdateInput)
    data!: super_contest_effect_proseUpdateInput;

    @Field(() => super_contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    where!: super_contest_effect_proseWhereUniqueInput;
}
