import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereUniqueInput } from './super-contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseUpdateWithoutSuper_contest_effectsInput } from './super-contest-effect-prose-update-without-super-contest-effects.input';

@InputType()
export class super_contest_effect_proseUpdateWithWhereUniqueWithoutSuper_contest_effectsInput {

    @Field(() => super_contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    where!: super_contest_effect_proseWhereUniqueInput;

    @Field(() => super_contest_effect_proseUpdateWithoutSuper_contest_effectsInput, {nullable:false})
    @Type(() => super_contest_effect_proseUpdateWithoutSuper_contest_effectsInput)
    data!: super_contest_effect_proseUpdateWithoutSuper_contest_effectsInput;
}
