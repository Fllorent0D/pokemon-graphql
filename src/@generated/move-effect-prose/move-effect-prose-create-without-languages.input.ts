import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateNestedOneWithoutMove_effect_proseInput } from '../move-effects/move-effects-create-nested-one-without-move-effect-prose.input';

@InputType()
export class move_effect_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => move_effectsCreateNestedOneWithoutMove_effect_proseInput, {nullable:false})
    move_effects!: move_effectsCreateNestedOneWithoutMove_effect_proseInput;
}
