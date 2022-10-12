import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseCreateInput } from '../contest-effect-prose/contest-effect-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecontestEffectProseArgs {

    @Field(() => contest_effect_proseCreateInput, {nullable:false})
    @Type(() => contest_effect_proseCreateInput)
    data!: contest_effect_proseCreateInput;
}
