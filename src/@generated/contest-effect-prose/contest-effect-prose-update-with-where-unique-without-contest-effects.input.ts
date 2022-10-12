import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseWhereUniqueInput } from './contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { contest_effect_proseUpdateWithoutContest_effectsInput } from './contest-effect-prose-update-without-contest-effects.input';

@InputType()
export class contest_effect_proseUpdateWithWhereUniqueWithoutContest_effectsInput {

    @Field(() => contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => contest_effect_proseWhereUniqueInput)
    where!: contest_effect_proseWhereUniqueInput;

    @Field(() => contest_effect_proseUpdateWithoutContest_effectsInput, {nullable:false})
    @Type(() => contest_effect_proseUpdateWithoutContest_effectsInput)
    data!: contest_effect_proseUpdateWithoutContest_effectsInput;
}
