import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_flag_mapCountAggregate } from './move-flag-map-count-aggregate.output';
import { Move_flag_mapAvgAggregate } from './move-flag-map-avg-aggregate.output';
import { Move_flag_mapSumAggregate } from './move-flag-map-sum-aggregate.output';
import { Move_flag_mapMinAggregate } from './move-flag-map-min-aggregate.output';
import { Move_flag_mapMaxAggregate } from './move-flag-map-max-aggregate.output';

@ObjectType()
export class Move_flag_mapGroupBy {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;

    @Field(() => Move_flag_mapCountAggregate, {nullable:true})
    _count?: Move_flag_mapCountAggregate;

    @Field(() => Move_flag_mapAvgAggregate, {nullable:true})
    _avg?: Move_flag_mapAvgAggregate;

    @Field(() => Move_flag_mapSumAggregate, {nullable:true})
    _sum?: Move_flag_mapSumAggregate;

    @Field(() => Move_flag_mapMinAggregate, {nullable:true})
    _min?: Move_flag_mapMinAggregate;

    @Field(() => Move_flag_mapMaxAggregate, {nullable:true})
    _max?: Move_flag_mapMaxAggregate;
}
