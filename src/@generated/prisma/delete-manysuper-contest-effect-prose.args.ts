import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereInput } from '../super-contest-effect-prose/super-contest-effect-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseWhereInput, {nullable:true})
    @Type(() => super_contest_effect_proseWhereInput)
    where?: super_contest_effect_proseWhereInput;
}
