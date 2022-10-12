import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import { contest_effectsUpdateWithoutContest_effect_proseInput } from './contest-effects-update-without-contest-effect-prose.input';

@InputType()
export class contest_effectsUpdateOneRequiredWithoutContest_effect_proseNestedInput {

    @Field(() => contest_effectsWhereUniqueInput, {nullable:true})
    @Type(() => contest_effectsWhereUniqueInput)
    connect?: contest_effectsWhereUniqueInput;

    @Field(() => contest_effectsUpdateWithoutContest_effect_proseInput, {nullable:true})
    @Type(() => contest_effectsUpdateWithoutContest_effect_proseInput)
    update?: contest_effectsUpdateWithoutContest_effect_proseInput;
}
