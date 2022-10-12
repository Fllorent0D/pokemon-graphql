import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effectsCreateNestedOneWithoutItem_fling_effect_proseInput } from '../item-fling-effects/item-fling-effects-create-nested-one-without-item-fling-effect-prose.input';

@InputType()
export class item_fling_effect_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => item_fling_effectsCreateNestedOneWithoutItem_fling_effect_proseInput, {nullable:false})
    item_fling_effects!: item_fling_effectsCreateNestedOneWithoutItem_fling_effect_proseInput;
}
