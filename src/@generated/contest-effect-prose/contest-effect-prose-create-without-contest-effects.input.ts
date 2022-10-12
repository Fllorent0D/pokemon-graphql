import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutContest_effect_proseInput } from '../languages/languages-create-nested-one-without-contest-effect-prose.input';

@InputType()
export class contest_effect_proseCreateWithoutContest_effectsInput {

    @Field(() => String, {nullable:true})
    flavor_text?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => languagesCreateNestedOneWithoutContest_effect_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutContest_effect_proseInput;
}
