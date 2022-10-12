import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import { super_contest_effectsUpdateWithoutSuper_contest_effect_proseInput } from './super-contest-effects-update-without-super-contest-effect-prose.input';

@InputType()
export class super_contest_effectsUpdateOneRequiredWithoutSuper_contest_effect_proseNestedInput {

    @Field(() => super_contest_effectsWhereUniqueInput, {nullable:true})
    @Type(() => super_contest_effectsWhereUniqueInput)
    connect?: super_contest_effectsWhereUniqueInput;

    @Field(() => super_contest_effectsUpdateWithoutSuper_contest_effect_proseInput, {nullable:true})
    @Type(() => super_contest_effectsUpdateWithoutSuper_contest_effect_proseInput)
    update?: super_contest_effectsUpdateWithoutSuper_contest_effect_proseInput;
}
