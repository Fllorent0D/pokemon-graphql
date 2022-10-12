import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effectsCreateWithoutItem_fling_effect_proseInput } from './item-fling-effects-create-without-item-fling-effect-prose.input';
import { Type } from 'class-transformer';
import { item_fling_effectsCreateOrConnectWithoutItem_fling_effect_proseInput } from './item-fling-effects-create-or-connect-without-item-fling-effect-prose.input';
import { item_fling_effectsUpsertWithoutItem_fling_effect_proseInput } from './item-fling-effects-upsert-without-item-fling-effect-prose.input';
import { item_fling_effectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { item_fling_effectsUpdateWithoutItem_fling_effect_proseInput } from './item-fling-effects-update-without-item-fling-effect-prose.input';

@InputType()
export class item_fling_effectsUpdateOneRequiredWithoutItem_fling_effect_proseNestedInput {

    @Field(() => item_fling_effectsCreateWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => item_fling_effectsCreateWithoutItem_fling_effect_proseInput)
    create?: item_fling_effectsCreateWithoutItem_fling_effect_proseInput;

    @Field(() => item_fling_effectsCreateOrConnectWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => item_fling_effectsCreateOrConnectWithoutItem_fling_effect_proseInput)
    connectOrCreate?: item_fling_effectsCreateOrConnectWithoutItem_fling_effect_proseInput;

    @Field(() => item_fling_effectsUpsertWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => item_fling_effectsUpsertWithoutItem_fling_effect_proseInput)
    upsert?: item_fling_effectsUpsertWithoutItem_fling_effect_proseInput;

    @Field(() => item_fling_effectsWhereUniqueInput, {nullable:true})
    @Type(() => item_fling_effectsWhereUniqueInput)
    connect?: item_fling_effectsWhereUniqueInput;

    @Field(() => item_fling_effectsUpdateWithoutItem_fling_effect_proseInput, {nullable:true})
    @Type(() => item_fling_effectsUpdateWithoutItem_fling_effect_proseInput)
    update?: item_fling_effectsUpdateWithoutItem_fling_effect_proseInput;
}
