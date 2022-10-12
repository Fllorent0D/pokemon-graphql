import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Ability_changelog_proseCountAggregate } from './ability-changelog-prose-count-aggregate.output';
import { Ability_changelog_proseAvgAggregate } from './ability-changelog-prose-avg-aggregate.output';
import { Ability_changelog_proseSumAggregate } from './ability-changelog-prose-sum-aggregate.output';
import { Ability_changelog_proseMinAggregate } from './ability-changelog-prose-min-aggregate.output';
import { Ability_changelog_proseMaxAggregate } from './ability-changelog-prose-max-aggregate.output';

@ObjectType()
export class AggregateAbility_changelog_prose {

    @Field(() => Ability_changelog_proseCountAggregate, {nullable:true})
    _count?: Ability_changelog_proseCountAggregate;

    @Field(() => Ability_changelog_proseAvgAggregate, {nullable:true})
    _avg?: Ability_changelog_proseAvgAggregate;

    @Field(() => Ability_changelog_proseSumAggregate, {nullable:true})
    _sum?: Ability_changelog_proseSumAggregate;

    @Field(() => Ability_changelog_proseMinAggregate, {nullable:true})
    _min?: Ability_changelog_proseMinAggregate;

    @Field(() => Ability_changelog_proseMaxAggregate, {nullable:true})
    _max?: Ability_changelog_proseMaxAggregate;
}
