import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_changelogCountAggregate } from './move-changelog-count-aggregate.output';
import { Move_changelogAvgAggregate } from './move-changelog-avg-aggregate.output';
import { Move_changelogSumAggregate } from './move-changelog-sum-aggregate.output';
import { Move_changelogMinAggregate } from './move-changelog-min-aggregate.output';
import { Move_changelogMaxAggregate } from './move-changelog-max-aggregate.output';

@ObjectType()
export class AggregateMove_changelog {

    @Field(() => Move_changelogCountAggregate, {nullable:true})
    _count?: Move_changelogCountAggregate;

    @Field(() => Move_changelogAvgAggregate, {nullable:true})
    _avg?: Move_changelogAvgAggregate;

    @Field(() => Move_changelogSumAggregate, {nullable:true})
    _sum?: Move_changelogSumAggregate;

    @Field(() => Move_changelogMinAggregate, {nullable:true})
    _min?: Move_changelogMinAggregate;

    @Field(() => Move_changelogMaxAggregate, {nullable:true})
    _max?: Move_changelogMaxAggregate;
}
