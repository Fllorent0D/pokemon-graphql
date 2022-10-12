import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsWhereInput } from '../item-fling-effects/item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { item_fling_effectsOrderByWithRelationInput } from '../item-fling-effects/item-fling-effects-order-by-with-relation.input';
import { item_fling_effectsWhereUniqueInput } from '../item-fling-effects/item-fling-effects-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateitemFlingEffectsArgs {

    @Field(() => item_fling_effectsWhereInput, {nullable:true})
    @Type(() => item_fling_effectsWhereInput)
    where?: item_fling_effectsWhereInput;

    @Field(() => [item_fling_effectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_fling_effectsOrderByWithRelationInput>;

    @Field(() => item_fling_effectsWhereUniqueInput, {nullable:true})
    cursor?: item_fling_effectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
