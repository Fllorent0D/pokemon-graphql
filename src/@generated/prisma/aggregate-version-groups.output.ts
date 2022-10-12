import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Version_groupsCountAggregate } from './version-groups-count-aggregate.output';
import { Version_groupsAvgAggregate } from './version-groups-avg-aggregate.output';
import { Version_groupsSumAggregate } from './version-groups-sum-aggregate.output';
import { Version_groupsMinAggregate } from './version-groups-min-aggregate.output';
import { Version_groupsMaxAggregate } from './version-groups-max-aggregate.output';

@ObjectType()
export class AggregateVersion_groups {

    @Field(() => Version_groupsCountAggregate, {nullable:true})
    _count?: Version_groupsCountAggregate;

    @Field(() => Version_groupsAvgAggregate, {nullable:true})
    _avg?: Version_groupsAvgAggregate;

    @Field(() => Version_groupsSumAggregate, {nullable:true})
    _sum?: Version_groupsSumAggregate;

    @Field(() => Version_groupsMinAggregate, {nullable:true})
    _min?: Version_groupsMinAggregate;

    @Field(() => Version_groupsMaxAggregate, {nullable:true})
    _max?: Version_groupsMaxAggregate;
}
