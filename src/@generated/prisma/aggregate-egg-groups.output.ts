import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Egg_groupsCountAggregate } from './egg-groups-count-aggregate.output';
import { Egg_groupsAvgAggregate } from './egg-groups-avg-aggregate.output';
import { Egg_groupsSumAggregate } from './egg-groups-sum-aggregate.output';
import { Egg_groupsMinAggregate } from './egg-groups-min-aggregate.output';
import { Egg_groupsMaxAggregate } from './egg-groups-max-aggregate.output';

@ObjectType()
export class AggregateEgg_groups {

    @Field(() => Egg_groupsCountAggregate, {nullable:true})
    _count?: Egg_groupsCountAggregate;

    @Field(() => Egg_groupsAvgAggregate, {nullable:true})
    _avg?: Egg_groupsAvgAggregate;

    @Field(() => Egg_groupsSumAggregate, {nullable:true})
    _sum?: Egg_groupsSumAggregate;

    @Field(() => Egg_groupsMinAggregate, {nullable:true})
    _min?: Egg_groupsMinAggregate;

    @Field(() => Egg_groupsMaxAggregate, {nullable:true})
    _max?: Egg_groupsMaxAggregate;
}
