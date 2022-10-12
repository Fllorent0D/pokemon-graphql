import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_meta_stat_changesCountAggregate } from './move-meta-stat-changes-count-aggregate.output';
import { Move_meta_stat_changesAvgAggregate } from './move-meta-stat-changes-avg-aggregate.output';
import { Move_meta_stat_changesSumAggregate } from './move-meta-stat-changes-sum-aggregate.output';
import { Move_meta_stat_changesMinAggregate } from './move-meta-stat-changes-min-aggregate.output';
import { Move_meta_stat_changesMaxAggregate } from './move-meta-stat-changes-max-aggregate.output';

@ObjectType()
export class Move_meta_stat_changesGroupBy {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => Move_meta_stat_changesCountAggregate, {nullable:true})
    _count?: Move_meta_stat_changesCountAggregate;

    @Field(() => Move_meta_stat_changesAvgAggregate, {nullable:true})
    _avg?: Move_meta_stat_changesAvgAggregate;

    @Field(() => Move_meta_stat_changesSumAggregate, {nullable:true})
    _sum?: Move_meta_stat_changesSumAggregate;

    @Field(() => Move_meta_stat_changesMinAggregate, {nullable:true})
    _min?: Move_meta_stat_changesMinAggregate;

    @Field(() => Move_meta_stat_changesMaxAggregate, {nullable:true})
    _max?: Move_meta_stat_changesMaxAggregate;
}
