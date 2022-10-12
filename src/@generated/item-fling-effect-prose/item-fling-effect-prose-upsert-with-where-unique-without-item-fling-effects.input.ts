import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereUniqueInput } from './item-fling-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseUpdateWithoutItem_fling_effectsInput } from './item-fling-effect-prose-update-without-item-fling-effects.input';
import { item_fling_effect_proseCreateWithoutItem_fling_effectsInput } from './item-fling-effect-prose-create-without-item-fling-effects.input';

@InputType()
export class item_fling_effect_proseUpsertWithWhereUniqueWithoutItem_fling_effectsInput {

    @Field(() => item_fling_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    where!: item_fling_effect_proseWhereUniqueInput;

    @Field(() => item_fling_effect_proseUpdateWithoutItem_fling_effectsInput, {nullable:false})
    @Type(() => item_fling_effect_proseUpdateWithoutItem_fling_effectsInput)
    update!: item_fling_effect_proseUpdateWithoutItem_fling_effectsInput;

    @Field(() => item_fling_effect_proseCreateWithoutItem_fling_effectsInput, {nullable:false})
    @Type(() => item_fling_effect_proseCreateWithoutItem_fling_effectsInput)
    create!: item_fling_effect_proseCreateWithoutItem_fling_effectsInput;
}
