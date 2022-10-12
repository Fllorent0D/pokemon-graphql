import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Generation_namesCountAggregate } from './generation-names-count-aggregate.output';
import { Generation_namesAvgAggregate } from './generation-names-avg-aggregate.output';
import { Generation_namesSumAggregate } from './generation-names-sum-aggregate.output';
import { Generation_namesMinAggregate } from './generation-names-min-aggregate.output';
import { Generation_namesMaxAggregate } from './generation-names-max-aggregate.output';

@ObjectType()
export class AggregateGeneration_names {

    @Field(() => Generation_namesCountAggregate, {nullable:true})
    _count?: Generation_namesCountAggregate;

    @Field(() => Generation_namesAvgAggregate, {nullable:true})
    _avg?: Generation_namesAvgAggregate;

    @Field(() => Generation_namesSumAggregate, {nullable:true})
    _sum?: Generation_namesSumAggregate;

    @Field(() => Generation_namesMinAggregate, {nullable:true})
    _min?: Generation_namesMinAggregate;

    @Field(() => Generation_namesMaxAggregate, {nullable:true})
    _max?: Generation_namesMaxAggregate;
}
