import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_flag_mapCountAggregate } from './item-flag-map-count-aggregate.output';
import { Item_flag_mapAvgAggregate } from './item-flag-map-avg-aggregate.output';
import { Item_flag_mapSumAggregate } from './item-flag-map-sum-aggregate.output';
import { Item_flag_mapMinAggregate } from './item-flag-map-min-aggregate.output';
import { Item_flag_mapMaxAggregate } from './item-flag-map-max-aggregate.output';

@ObjectType()
export class Item_flag_mapGroupBy {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => Item_flag_mapCountAggregate, {nullable:true})
    _count?: Item_flag_mapCountAggregate;

    @Field(() => Item_flag_mapAvgAggregate, {nullable:true})
    _avg?: Item_flag_mapAvgAggregate;

    @Field(() => Item_flag_mapSumAggregate, {nullable:true})
    _sum?: Item_flag_mapSumAggregate;

    @Field(() => Item_flag_mapMinAggregate, {nullable:true})
    _min?: Item_flag_mapMinAggregate;

    @Field(() => Item_flag_mapMaxAggregate, {nullable:true})
    _max?: Item_flag_mapMaxAggregate;
}
