import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Item_fling_effect_proseCountAggregate } from './item-fling-effect-prose-count-aggregate.output';
import { Item_fling_effect_proseAvgAggregate } from './item-fling-effect-prose-avg-aggregate.output';
import { Item_fling_effect_proseSumAggregate } from './item-fling-effect-prose-sum-aggregate.output';
import { Item_fling_effect_proseMinAggregate } from './item-fling-effect-prose-min-aggregate.output';
import { Item_fling_effect_proseMaxAggregate } from './item-fling-effect-prose-max-aggregate.output';

@ObjectType()
export class AggregateItem_fling_effect_prose {

    @Field(() => Item_fling_effect_proseCountAggregate, {nullable:true})
    _count?: Item_fling_effect_proseCountAggregate;

    @Field(() => Item_fling_effect_proseAvgAggregate, {nullable:true})
    _avg?: Item_fling_effect_proseAvgAggregate;

    @Field(() => Item_fling_effect_proseSumAggregate, {nullable:true})
    _sum?: Item_fling_effect_proseSumAggregate;

    @Field(() => Item_fling_effect_proseMinAggregate, {nullable:true})
    _min?: Item_fling_effect_proseMinAggregate;

    @Field(() => Item_fling_effect_proseMaxAggregate, {nullable:true})
    _max?: Item_fling_effect_proseMaxAggregate;
}
