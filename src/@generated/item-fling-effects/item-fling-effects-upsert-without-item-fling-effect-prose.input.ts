import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effectsUpdateWithoutItem_fling_effect_proseInput } from './item-fling-effects-update-without-item-fling-effect-prose.input';
import { Type } from 'class-transformer';
import { item_fling_effectsCreateWithoutItem_fling_effect_proseInput } from './item-fling-effects-create-without-item-fling-effect-prose.input';

@InputType()
export class item_fling_effectsUpsertWithoutItem_fling_effect_proseInput {

    @Field(() => item_fling_effectsUpdateWithoutItem_fling_effect_proseInput, {nullable:false})
    @Type(() => item_fling_effectsUpdateWithoutItem_fling_effect_proseInput)
    update!: item_fling_effectsUpdateWithoutItem_fling_effect_proseInput;

    @Field(() => item_fling_effectsCreateWithoutItem_fling_effect_proseInput, {nullable:false})
    @Type(() => item_fling_effectsCreateWithoutItem_fling_effect_proseInput)
    create!: item_fling_effectsCreateWithoutItem_fling_effect_proseInput;
}
