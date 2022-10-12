import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_pocketsCountAggregate } from './item-pockets-count-aggregate.output';
import { Item_pocketsAvgAggregate } from './item-pockets-avg-aggregate.output';
import { Item_pocketsSumAggregate } from './item-pockets-sum-aggregate.output';
import { Item_pocketsMinAggregate } from './item-pockets-min-aggregate.output';
import { Item_pocketsMaxAggregate } from './item-pockets-max-aggregate.output';

@ObjectType()
export class Item_pocketsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Item_pocketsCountAggregate, {nullable:true})
    _count?: Item_pocketsCountAggregate;

    @Field(() => Item_pocketsAvgAggregate, {nullable:true})
    _avg?: Item_pocketsAvgAggregate;

    @Field(() => Item_pocketsSumAggregate, {nullable:true})
    _sum?: Item_pocketsSumAggregate;

    @Field(() => Item_pocketsMinAggregate, {nullable:true})
    _min?: Item_pocketsMinAggregate;

    @Field(() => Item_pocketsMaxAggregate, {nullable:true})
    _max?: Item_pocketsMaxAggregate;
}
