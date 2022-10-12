import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseWhereUniqueInput } from '../contest-effect-prose/contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecontestEffectProseArgs {

    @Field(() => contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => contest_effect_proseWhereUniqueInput)
    where!: contest_effect_proseWhereUniqueInput;
}
