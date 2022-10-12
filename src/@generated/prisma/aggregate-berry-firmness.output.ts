import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Berry_firmnessCountAggregate } from './berry-firmness-count-aggregate.output';
import { Berry_firmnessAvgAggregate } from './berry-firmness-avg-aggregate.output';
import { Berry_firmnessSumAggregate } from './berry-firmness-sum-aggregate.output';
import { Berry_firmnessMinAggregate } from './berry-firmness-min-aggregate.output';
import { Berry_firmnessMaxAggregate } from './berry-firmness-max-aggregate.output';

@ObjectType()
export class AggregateBerry_firmness {

    @Field(() => Berry_firmnessCountAggregate, {nullable:true})
    _count?: Berry_firmnessCountAggregate;

    @Field(() => Berry_firmnessAvgAggregate, {nullable:true})
    _avg?: Berry_firmnessAvgAggregate;

    @Field(() => Berry_firmnessSumAggregate, {nullable:true})
    _sum?: Berry_firmnessSumAggregate;

    @Field(() => Berry_firmnessMinAggregate, {nullable:true})
    _min?: Berry_firmnessMinAggregate;

    @Field(() => Berry_firmnessMaxAggregate, {nullable:true})
    _max?: Berry_firmnessMaxAggregate;
}
