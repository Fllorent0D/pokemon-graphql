import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effectsCreateNestedOneWithoutSuper_contest_effect_proseInput } from '../super-contest-effects/super-contest-effects-create-nested-one-without-super-contest-effect-prose.input';

@InputType()
export class super_contest_effect_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => super_contest_effectsCreateNestedOneWithoutSuper_contest_effect_proseInput, {nullable:false})
    super_contest_effects!: super_contest_effectsCreateNestedOneWithoutSuper_contest_effect_proseInput;
}
