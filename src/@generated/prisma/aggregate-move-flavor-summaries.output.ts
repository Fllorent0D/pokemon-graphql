import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_flavor_summariesCountAggregate } from './move-flavor-summaries-count-aggregate.output';
import { Move_flavor_summariesAvgAggregate } from './move-flavor-summaries-avg-aggregate.output';
import { Move_flavor_summariesSumAggregate } from './move-flavor-summaries-sum-aggregate.output';
import { Move_flavor_summariesMinAggregate } from './move-flavor-summaries-min-aggregate.output';
import { Move_flavor_summariesMaxAggregate } from './move-flavor-summaries-max-aggregate.output';

@ObjectType()
export class AggregateMove_flavor_summaries {

    @Field(() => Move_flavor_summariesCountAggregate, {nullable:true})
    _count?: Move_flavor_summariesCountAggregate;

    @Field(() => Move_flavor_summariesAvgAggregate, {nullable:true})
    _avg?: Move_flavor_summariesAvgAggregate;

    @Field(() => Move_flavor_summariesSumAggregate, {nullable:true})
    _sum?: Move_flavor_summariesSumAggregate;

    @Field(() => Move_flavor_summariesMinAggregate, {nullable:true})
    _min?: Move_flavor_summariesMinAggregate;

    @Field(() => Move_flavor_summariesMaxAggregate, {nullable:true})
    _max?: Move_flavor_summariesMaxAggregate;
}
