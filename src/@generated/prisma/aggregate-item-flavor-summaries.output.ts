import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Item_flavor_summariesCountAggregate } from './item-flavor-summaries-count-aggregate.output';
import { Item_flavor_summariesAvgAggregate } from './item-flavor-summaries-avg-aggregate.output';
import { Item_flavor_summariesSumAggregate } from './item-flavor-summaries-sum-aggregate.output';
import { Item_flavor_summariesMinAggregate } from './item-flavor-summaries-min-aggregate.output';
import { Item_flavor_summariesMaxAggregate } from './item-flavor-summaries-max-aggregate.output';

@ObjectType()
export class AggregateItem_flavor_summaries {

    @Field(() => Item_flavor_summariesCountAggregate, {nullable:true})
    _count?: Item_flavor_summariesCountAggregate;

    @Field(() => Item_flavor_summariesAvgAggregate, {nullable:true})
    _avg?: Item_flavor_summariesAvgAggregate;

    @Field(() => Item_flavor_summariesSumAggregate, {nullable:true})
    _sum?: Item_flavor_summariesSumAggregate;

    @Field(() => Item_flavor_summariesMinAggregate, {nullable:true})
    _min?: Item_flavor_summariesMinAggregate;

    @Field(() => Item_flavor_summariesMaxAggregate, {nullable:true})
    _max?: Item_flavor_summariesMaxAggregate;
}
