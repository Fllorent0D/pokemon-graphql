import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseCreateWithoutItem_fling_effectsInput } from './item-fling-effect-prose-create-without-item-fling-effects.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput } from './item-fling-effect-prose-create-or-connect-without-item-fling-effects.input';
import { item_fling_effect_proseWhereUniqueInput } from './item-fling-effect-prose-where-unique.input';

@InputType()
export class item_fling_effect_proseCreateNestedManyWithoutItem_fling_effectsInput {

    @Field(() => [item_fling_effect_proseCreateWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateWithoutItem_fling_effectsInput)
    create?: Array<item_fling_effect_proseCreateWithoutItem_fling_effectsInput>;

    @Field(() => [item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput)
    connectOrCreate?: Array<item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    connect?: Array<item_fling_effect_proseWhereUniqueInput>;
}
