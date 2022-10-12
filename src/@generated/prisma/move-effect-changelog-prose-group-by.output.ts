import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_effect_changelog_proseCountAggregate } from './move-effect-changelog-prose-count-aggregate.output';
import { Move_effect_changelog_proseAvgAggregate } from './move-effect-changelog-prose-avg-aggregate.output';
import { Move_effect_changelog_proseSumAggregate } from './move-effect-changelog-prose-sum-aggregate.output';
import { Move_effect_changelog_proseMinAggregate } from './move-effect-changelog-prose-min-aggregate.output';
import { Move_effect_changelog_proseMaxAggregate } from './move-effect-changelog-prose-max-aggregate.output';

@ObjectType()
export class Move_effect_changelog_proseGroupBy {

    @Field(() => Int, {nullable:false})
    move_effect_changelog_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    effect!: string;

    @Field(() => Move_effect_changelog_proseCountAggregate, {nullable:true})
    _count?: Move_effect_changelog_proseCountAggregate;

    @Field(() => Move_effect_changelog_proseAvgAggregate, {nullable:true})
    _avg?: Move_effect_changelog_proseAvgAggregate;

    @Field(() => Move_effect_changelog_proseSumAggregate, {nullable:true})
    _sum?: Move_effect_changelog_proseSumAggregate;

    @Field(() => Move_effect_changelog_proseMinAggregate, {nullable:true})
    _min?: Move_effect_changelog_proseMinAggregate;

    @Field(() => Move_effect_changelog_proseMaxAggregate, {nullable:true})
    _max?: Move_effect_changelog_proseMaxAggregate;
}
