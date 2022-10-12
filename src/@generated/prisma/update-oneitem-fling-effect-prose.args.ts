import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseUpdateInput } from '../item-fling-effect-prose/item-fling-effect-prose-update.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseWhereUniqueInput } from '../item-fling-effect-prose/item-fling-effect-prose-where-unique.input';

@ArgsType()
export class UpdateOneitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseUpdateInput, {nullable:false})
    @Type(() => item_fling_effect_proseUpdateInput)
    data!: item_fling_effect_proseUpdateInput;

    @Field(() => item_fling_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    where!: item_fling_effect_proseWhereUniqueInput;
}
