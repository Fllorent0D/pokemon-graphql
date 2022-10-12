import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Berry_flavorsCountAggregate } from './berry-flavors-count-aggregate.output';
import { Berry_flavorsAvgAggregate } from './berry-flavors-avg-aggregate.output';
import { Berry_flavorsSumAggregate } from './berry-flavors-sum-aggregate.output';
import { Berry_flavorsMinAggregate } from './berry-flavors-min-aggregate.output';
import { Berry_flavorsMaxAggregate } from './berry-flavors-max-aggregate.output';

@ObjectType()
export class AggregateBerry_flavors {

    @Field(() => Berry_flavorsCountAggregate, {nullable:true})
    _count?: Berry_flavorsCountAggregate;

    @Field(() => Berry_flavorsAvgAggregate, {nullable:true})
    _avg?: Berry_flavorsAvgAggregate;

    @Field(() => Berry_flavorsSumAggregate, {nullable:true})
    _sum?: Berry_flavorsSumAggregate;

    @Field(() => Berry_flavorsMinAggregate, {nullable:true})
    _min?: Berry_flavorsMinAggregate;

    @Field(() => Berry_flavorsMaxAggregate, {nullable:true})
    _max?: Berry_flavorsMaxAggregate;
}
