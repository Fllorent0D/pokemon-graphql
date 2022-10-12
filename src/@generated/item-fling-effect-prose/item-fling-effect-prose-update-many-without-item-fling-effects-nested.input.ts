import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseCreateWithoutItem_fling_effectsInput } from './item-fling-effect-prose-create-without-item-fling-effects.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput } from './item-fling-effect-prose-create-or-connect-without-item-fling-effects.input';
import { item_fling_effect_proseUpsertWithWhereUniqueWithoutItem_fling_effectsInput } from './item-fling-effect-prose-upsert-with-where-unique-without-item-fling-effects.input';
import { item_fling_effect_proseWhereUniqueInput } from './item-fling-effect-prose-where-unique.input';
import { item_fling_effect_proseUpdateWithWhereUniqueWithoutItem_fling_effectsInput } from './item-fling-effect-prose-update-with-where-unique-without-item-fling-effects.input';
import { item_fling_effect_proseUpdateManyWithWhereWithoutItem_fling_effectsInput } from './item-fling-effect-prose-update-many-with-where-without-item-fling-effects.input';
import { item_fling_effect_proseScalarWhereInput } from './item-fling-effect-prose-scalar-where.input';

@InputType()
export class item_fling_effect_proseUpdateManyWithoutItem_fling_effectsNestedInput {

    @Field(() => [item_fling_effect_proseCreateWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateWithoutItem_fling_effectsInput)
    create?: Array<item_fling_effect_proseCreateWithoutItem_fling_effectsInput>;

    @Field(() => [item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput)
    connectOrCreate?: Array<item_fling_effect_proseCreateOrConnectWithoutItem_fling_effectsInput>;

    @Field(() => [item_fling_effect_proseUpsertWithWhereUniqueWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => item_fling_effect_proseUpsertWithWhereUniqueWithoutItem_fling_effectsInput)
    upsert?: Array<item_fling_effect_proseUpsertWithWhereUniqueWithoutItem_fling_effectsInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    set?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    disconnect?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    delete?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    connect?: Array<item_fling_effect_proseWhereUniqueInput>;

    @Field(() => [item_fling_effect_proseUpdateWithWhereUniqueWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => item_fling_effect_proseUpdateWithWhereUniqueWithoutItem_fling_effectsInput)
    update?: Array<item_fling_effect_proseUpdateWithWhereUniqueWithoutItem_fling_effectsInput>;

    @Field(() => [item_fling_effect_proseUpdateManyWithWhereWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => item_fling_effect_proseUpdateManyWithWhereWithoutItem_fling_effectsInput)
    updateMany?: Array<item_fling_effect_proseUpdateManyWithWhereWithoutItem_fling_effectsInput>;

    @Field(() => [item_fling_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => item_fling_effect_proseScalarWhereInput)
    deleteMany?: Array<item_fling_effect_proseScalarWhereInput>;
}
