import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_flavor_textCountAggregate } from './move-flavor-text-count-aggregate.output';
import { Move_flavor_textAvgAggregate } from './move-flavor-text-avg-aggregate.output';
import { Move_flavor_textSumAggregate } from './move-flavor-text-sum-aggregate.output';
import { Move_flavor_textMinAggregate } from './move-flavor-text-min-aggregate.output';
import { Move_flavor_textMaxAggregate } from './move-flavor-text-max-aggregate.output';

@ObjectType()
export class AggregateMove_flavor_text {

    @Field(() => Move_flavor_textCountAggregate, {nullable:true})
    _count?: Move_flavor_textCountAggregate;

    @Field(() => Move_flavor_textAvgAggregate, {nullable:true})
    _avg?: Move_flavor_textAvgAggregate;

    @Field(() => Move_flavor_textSumAggregate, {nullable:true})
    _sum?: Move_flavor_textSumAggregate;

    @Field(() => Move_flavor_textMinAggregate, {nullable:true})
    _min?: Move_flavor_textMinAggregate;

    @Field(() => Move_flavor_textMaxAggregate, {nullable:true})
    _max?: Move_flavor_textMaxAggregate;
}
