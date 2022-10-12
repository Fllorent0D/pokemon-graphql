import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Item_flavor_textCountAggregate } from './item-flavor-text-count-aggregate.output';
import { Item_flavor_textAvgAggregate } from './item-flavor-text-avg-aggregate.output';
import { Item_flavor_textSumAggregate } from './item-flavor-text-sum-aggregate.output';
import { Item_flavor_textMinAggregate } from './item-flavor-text-min-aggregate.output';
import { Item_flavor_textMaxAggregate } from './item-flavor-text-max-aggregate.output';

@ObjectType()
export class AggregateItem_flavor_text {

    @Field(() => Item_flavor_textCountAggregate, {nullable:true})
    _count?: Item_flavor_textCountAggregate;

    @Field(() => Item_flavor_textAvgAggregate, {nullable:true})
    _avg?: Item_flavor_textAvgAggregate;

    @Field(() => Item_flavor_textSumAggregate, {nullable:true})
    _sum?: Item_flavor_textSumAggregate;

    @Field(() => Item_flavor_textMinAggregate, {nullable:true})
    _min?: Item_flavor_textMinAggregate;

    @Field(() => Item_flavor_textMaxAggregate, {nullable:true})
    _max?: Item_flavor_textMaxAggregate;
}
