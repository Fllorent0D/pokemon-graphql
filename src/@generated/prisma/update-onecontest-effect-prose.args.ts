import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseUpdateInput } from '../contest-effect-prose/contest-effect-prose-update.input';
import { Type } from 'class-transformer';
import { contest_effect_proseWhereUniqueInput } from '../contest-effect-prose/contest-effect-prose-where-unique.input';

@ArgsType()
export class UpdateOnecontestEffectProseArgs {

    @Field(() => contest_effect_proseUpdateInput, {nullable:false})
    @Type(() => contest_effect_proseUpdateInput)
    data!: contest_effect_proseUpdateInput;

    @Field(() => contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => contest_effect_proseWhereUniqueInput)
    where!: contest_effect_proseWhereUniqueInput;
}
