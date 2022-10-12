import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereUniqueInput } from '../item-fling-effect-prose/item-fling-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseCreateInput } from '../item-fling-effect-prose/item-fling-effect-prose-create.input';
import { item_fling_effect_proseUpdateInput } from '../item-fling-effect-prose/item-fling-effect-prose-update.input';

@ArgsType()
export class UpsertOneitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    where!: item_fling_effect_proseWhereUniqueInput;

    @Field(() => item_fling_effect_proseCreateInput, {nullable:false})
    @Type(() => item_fling_effect_proseCreateInput)
    create!: item_fling_effect_proseCreateInput;

    @Field(() => item_fling_effect_proseUpdateInput, {nullable:false})
    @Type(() => item_fling_effect_proseUpdateInput)
    update!: item_fling_effect_proseUpdateInput;
}
