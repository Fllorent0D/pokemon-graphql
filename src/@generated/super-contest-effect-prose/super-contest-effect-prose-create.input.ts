import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutSuper_contest_effect_proseInput } from '../languages/languages-create-nested-one-without-super-contest-effect-prose.input';
import { super_contest_effectsCreateNestedOneWithoutSuper_contest_effect_proseInput } from '../super-contest-effects/super-contest-effects-create-nested-one-without-super-contest-effect-prose.input';

@InputType()
export class super_contest_effect_proseCreateInput {

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => languagesCreateNestedOneWithoutSuper_contest_effect_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutSuper_contest_effect_proseInput;

    @Field(() => super_contest_effectsCreateNestedOneWithoutSuper_contest_effect_proseInput, {nullable:false})
    super_contest_effects!: super_contest_effectsCreateNestedOneWithoutSuper_contest_effect_proseInput;
}
