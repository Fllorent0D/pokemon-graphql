import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_metaCountAggregate } from './move-meta-count-aggregate.output';
import { Move_metaAvgAggregate } from './move-meta-avg-aggregate.output';
import { Move_metaSumAggregate } from './move-meta-sum-aggregate.output';
import { Move_metaMinAggregate } from './move-meta-min-aggregate.output';
import { Move_metaMaxAggregate } from './move-meta-max-aggregate.output';

@ObjectType()
export class Move_metaGroupBy {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    meta_category_id!: number;

    @Field(() => Int, {nullable:false})
    meta_ailment_id!: number;

    @Field(() => Int, {nullable:true})
    min_hits?: number;

    @Field(() => Int, {nullable:true})
    max_hits?: number;

    @Field(() => Int, {nullable:true})
    min_turns?: number;

    @Field(() => Int, {nullable:true})
    max_turns?: number;

    @Field(() => Int, {nullable:false})
    recoil!: number;

    @Field(() => Int, {nullable:false})
    healing!: number;

    @Field(() => Int, {nullable:false})
    crit_rate!: number;

    @Field(() => Int, {nullable:false})
    ailment_chance!: number;

    @Field(() => Int, {nullable:false})
    flinch_chance!: number;

    @Field(() => Int, {nullable:false})
    stat_chance!: number;

    @Field(() => Move_metaCountAggregate, {nullable:true})
    _count?: Move_metaCountAggregate;

    @Field(() => Move_metaAvgAggregate, {nullable:true})
    _avg?: Move_metaAvgAggregate;

    @Field(() => Move_metaSumAggregate, {nullable:true})
    _sum?: Move_metaSumAggregate;

    @Field(() => Move_metaMinAggregate, {nullable:true})
    _min?: Move_metaMinAggregate;

    @Field(() => Move_metaMaxAggregate, {nullable:true})
    _max?: Move_metaMaxAggregate;
}
