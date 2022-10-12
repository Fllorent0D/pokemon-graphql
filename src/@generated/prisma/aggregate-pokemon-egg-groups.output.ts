import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_egg_groupsCountAggregate } from './pokemon-egg-groups-count-aggregate.output';
import { Pokemon_egg_groupsAvgAggregate } from './pokemon-egg-groups-avg-aggregate.output';
import { Pokemon_egg_groupsSumAggregate } from './pokemon-egg-groups-sum-aggregate.output';
import { Pokemon_egg_groupsMinAggregate } from './pokemon-egg-groups-min-aggregate.output';
import { Pokemon_egg_groupsMaxAggregate } from './pokemon-egg-groups-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_egg_groups {

    @Field(() => Pokemon_egg_groupsCountAggregate, {nullable:true})
    _count?: Pokemon_egg_groupsCountAggregate;

    @Field(() => Pokemon_egg_groupsAvgAggregate, {nullable:true})
    _avg?: Pokemon_egg_groupsAvgAggregate;

    @Field(() => Pokemon_egg_groupsSumAggregate, {nullable:true})
    _sum?: Pokemon_egg_groupsSumAggregate;

    @Field(() => Pokemon_egg_groupsMinAggregate, {nullable:true})
    _min?: Pokemon_egg_groupsMinAggregate;

    @Field(() => Pokemon_egg_groupsMaxAggregate, {nullable:true})
    _max?: Pokemon_egg_groupsMaxAggregate;
}
