import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Contest_effectsCountAggregate } from './contest-effects-count-aggregate.output';
import { Contest_effectsAvgAggregate } from './contest-effects-avg-aggregate.output';
import { Contest_effectsSumAggregate } from './contest-effects-sum-aggregate.output';
import { Contest_effectsMinAggregate } from './contest-effects-min-aggregate.output';
import { Contest_effectsMaxAggregate } from './contest-effects-max-aggregate.output';

@ObjectType()
export class AggregateContest_effects {

    @Field(() => Contest_effectsCountAggregate, {nullable:true})
    _count?: Contest_effectsCountAggregate;

    @Field(() => Contest_effectsAvgAggregate, {nullable:true})
    _avg?: Contest_effectsAvgAggregate;

    @Field(() => Contest_effectsSumAggregate, {nullable:true})
    _sum?: Contest_effectsSumAggregate;

    @Field(() => Contest_effectsMinAggregate, {nullable:true})
    _min?: Contest_effectsMinAggregate;

    @Field(() => Contest_effectsMaxAggregate, {nullable:true})
    _max?: Contest_effectsMaxAggregate;
}
