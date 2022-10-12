import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ability_changelogCountAggregate } from './ability-changelog-count-aggregate.output';
import { Ability_changelogAvgAggregate } from './ability-changelog-avg-aggregate.output';
import { Ability_changelogSumAggregate } from './ability-changelog-sum-aggregate.output';
import { Ability_changelogMinAggregate } from './ability-changelog-min-aggregate.output';
import { Ability_changelogMaxAggregate } from './ability-changelog-max-aggregate.output';

@ObjectType()
export class Ability_changelogGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;

    @Field(() => Ability_changelogCountAggregate, {nullable:true})
    _count?: Ability_changelogCountAggregate;

    @Field(() => Ability_changelogAvgAggregate, {nullable:true})
    _avg?: Ability_changelogAvgAggregate;

    @Field(() => Ability_changelogSumAggregate, {nullable:true})
    _sum?: Ability_changelogSumAggregate;

    @Field(() => Ability_changelogMinAggregate, {nullable:true})
    _min?: Ability_changelogMinAggregate;

    @Field(() => Ability_changelogMaxAggregate, {nullable:true})
    _max?: Ability_changelogMaxAggregate;
}
