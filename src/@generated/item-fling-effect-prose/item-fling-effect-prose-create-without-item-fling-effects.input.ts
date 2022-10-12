import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_fling_effect_proseInput } from '../languages/languages-create-nested-one-without-item-fling-effect-prose.input';

@InputType()
export class item_fling_effect_proseCreateWithoutItem_fling_effectsInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languagesCreateNestedOneWithoutItem_fling_effect_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_fling_effect_proseInput;
}
