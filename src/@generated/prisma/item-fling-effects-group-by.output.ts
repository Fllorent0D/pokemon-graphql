import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_fling_effectsCountAggregate } from './item-fling-effects-count-aggregate.output';
import { Item_fling_effectsAvgAggregate } from './item-fling-effects-avg-aggregate.output';
import { Item_fling_effectsSumAggregate } from './item-fling-effects-sum-aggregate.output';
import { Item_fling_effectsMinAggregate } from './item-fling-effects-min-aggregate.output';
import { Item_fling_effectsMaxAggregate } from './item-fling-effects-max-aggregate.output';

@ObjectType()
export class Item_fling_effectsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Item_fling_effectsCountAggregate, {nullable:true})
    _count?: Item_fling_effectsCountAggregate;

    @Field(() => Item_fling_effectsAvgAggregate, {nullable:true})
    _avg?: Item_fling_effectsAvgAggregate;

    @Field(() => Item_fling_effectsSumAggregate, {nullable:true})
    _sum?: Item_fling_effectsSumAggregate;

    @Field(() => Item_fling_effectsMinAggregate, {nullable:true})
    _min?: Item_fling_effectsMinAggregate;

    @Field(() => Item_fling_effectsMaxAggregate, {nullable:true})
    _max?: Item_fling_effectsMaxAggregate;
}
