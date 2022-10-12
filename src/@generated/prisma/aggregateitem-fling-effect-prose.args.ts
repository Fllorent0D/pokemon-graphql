import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereInput } from '../item-fling-effect-prose/item-fling-effect-prose-where.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseOrderByWithRelationInput } from '../item-fling-effect-prose/item-fling-effect-prose-order-by-with-relation.input';
import { item_fling_effect_proseWhereUniqueInput } from '../item-fling-effect-prose/item-fling-effect-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseWhereInput, {nullable:true})
    @Type(() => item_fling_effect_proseWhereInput)
    where?: item_fling_effect_proseWhereInput;

    @Field(() => [item_fling_effect_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_fling_effect_proseOrderByWithRelationInput>;

    @Field(() => item_fling_effect_proseWhereUniqueInput, {nullable:true})
    cursor?: item_fling_effect_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
