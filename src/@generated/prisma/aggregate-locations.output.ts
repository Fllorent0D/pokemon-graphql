import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LocationsCountAggregate } from './locations-count-aggregate.output';
import { LocationsAvgAggregate } from './locations-avg-aggregate.output';
import { LocationsSumAggregate } from './locations-sum-aggregate.output';
import { LocationsMinAggregate } from './locations-min-aggregate.output';
import { LocationsMaxAggregate } from './locations-max-aggregate.output';

@ObjectType()
export class AggregateLocations {

    @Field(() => LocationsCountAggregate, {nullable:true})
    _count?: LocationsCountAggregate;

    @Field(() => LocationsAvgAggregate, {nullable:true})
    _avg?: LocationsAvgAggregate;

    @Field(() => LocationsSumAggregate, {nullable:true})
    _sum?: LocationsSumAggregate;

    @Field(() => LocationsMinAggregate, {nullable:true})
    _min?: LocationsMinAggregate;

    @Field(() => LocationsMaxAggregate, {nullable:true})
    _max?: LocationsMaxAggregate;
}
