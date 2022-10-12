import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_fling_effect_proseInput } from '../languages/languages-create-nested-one-without-item-fling-effect-prose.input';
import { item_fling_effectsCreateNestedOneWithoutItem_fling_effect_proseInput } from '../item-fling-effects/item-fling-effects-create-nested-one-without-item-fling-effect-prose.input';

@InputType()
export class item_fling_effect_proseCreateInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => languagesCreateNestedOneWithoutItem_fling_effect_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_fling_effect_proseInput;

    @Field(() => item_fling_effectsCreateNestedOneWithoutItem_fling_effect_proseInput, {nullable:false})
    item_fling_effects!: item_fling_effectsCreateNestedOneWithoutItem_fling_effect_proseInput;
}
