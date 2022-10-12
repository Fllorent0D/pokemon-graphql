import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effectsCreateNestedOneWithoutContest_effect_proseInput } from '../contest-effects/contest-effects-create-nested-one-without-contest-effect-prose.input';

@InputType()
export class contest_effect_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    flavor_text?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => contest_effectsCreateNestedOneWithoutContest_effect_proseInput, {nullable:false})
    contest_effects!: contest_effectsCreateNestedOneWithoutContest_effect_proseInput;
}
