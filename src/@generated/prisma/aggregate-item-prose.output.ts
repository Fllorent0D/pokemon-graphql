import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Item_proseCountAggregate } from './item-prose-count-aggregate.output';
import { Item_proseAvgAggregate } from './item-prose-avg-aggregate.output';
import { Item_proseSumAggregate } from './item-prose-sum-aggregate.output';
import { Item_proseMinAggregate } from './item-prose-min-aggregate.output';
import { Item_proseMaxAggregate } from './item-prose-max-aggregate.output';

@ObjectType()
export class AggregateItem_prose {

    @Field(() => Item_proseCountAggregate, {nullable:true})
    _count?: Item_proseCountAggregate;

    @Field(() => Item_proseAvgAggregate, {nullable:true})
    _avg?: Item_proseAvgAggregate;

    @Field(() => Item_proseSumAggregate, {nullable:true})
    _sum?: Item_proseSumAggregate;

    @Field(() => Item_proseMinAggregate, {nullable:true})
    _min?: Item_proseMinAggregate;

    @Field(() => Item_proseMaxAggregate, {nullable:true})
    _max?: Item_proseMaxAggregate;
}
