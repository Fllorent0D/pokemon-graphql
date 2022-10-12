import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_flagsCountAggregate } from './item-flags-count-aggregate.output';
import { Item_flagsAvgAggregate } from './item-flags-avg-aggregate.output';
import { Item_flagsSumAggregate } from './item-flags-sum-aggregate.output';
import { Item_flagsMinAggregate } from './item-flags-min-aggregate.output';
import { Item_flagsMaxAggregate } from './item-flags-max-aggregate.output';

@ObjectType()
export class Item_flagsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Item_flagsCountAggregate, {nullable:true})
    _count?: Item_flagsCountAggregate;

    @Field(() => Item_flagsAvgAggregate, {nullable:true})
    _avg?: Item_flagsAvgAggregate;

    @Field(() => Item_flagsSumAggregate, {nullable:true})
    _sum?: Item_flagsSumAggregate;

    @Field(() => Item_flagsMinAggregate, {nullable:true})
    _min?: Item_flagsMinAggregate;

    @Field(() => Item_flagsMaxAggregate, {nullable:true})
    _max?: Item_flagsMaxAggregate;
}
