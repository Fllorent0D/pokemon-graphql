import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_effect_proseInput } from '../languages/languages-create-nested-one-without-move-effect-prose.input';

@InputType()
export class move_effect_proseCreateWithoutMove_effectsInput {

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => languagesCreateNestedOneWithoutMove_effect_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_effect_proseInput;
}
