import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_effect_changelogCountAggregate } from './move-effect-changelog-count-aggregate.output';
import { Move_effect_changelogAvgAggregate } from './move-effect-changelog-avg-aggregate.output';
import { Move_effect_changelogSumAggregate } from './move-effect-changelog-sum-aggregate.output';
import { Move_effect_changelogMinAggregate } from './move-effect-changelog-min-aggregate.output';
import { Move_effect_changelogMaxAggregate } from './move-effect-changelog-max-aggregate.output';

@ObjectType()
export class AggregateMove_effect_changelog {

    @Field(() => Move_effect_changelogCountAggregate, {nullable:true})
    _count?: Move_effect_changelogCountAggregate;

    @Field(() => Move_effect_changelogAvgAggregate, {nullable:true})
    _avg?: Move_effect_changelogAvgAggregate;

    @Field(() => Move_effect_changelogSumAggregate, {nullable:true})
    _sum?: Move_effect_changelogSumAggregate;

    @Field(() => Move_effect_changelogMinAggregate, {nullable:true})
    _min?: Move_effect_changelogMinAggregate;

    @Field(() => Move_effect_changelogMaxAggregate, {nullable:true})
    _max?: Move_effect_changelogMaxAggregate;
}
