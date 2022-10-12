import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_pocket_namesCountAggregate } from './item-pocket-names-count-aggregate.output';
import { Item_pocket_namesAvgAggregate } from './item-pocket-names-avg-aggregate.output';
import { Item_pocket_namesSumAggregate } from './item-pocket-names-sum-aggregate.output';
import { Item_pocket_namesMinAggregate } from './item-pocket-names-min-aggregate.output';
import { Item_pocket_namesMaxAggregate } from './item-pocket-names-max-aggregate.output';

@ObjectType()
export class Item_pocket_namesGroupBy {

    @Field(() => Int, {nullable:false})
    item_pocket_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Item_pocket_namesCountAggregate, {nullable:true})
    _count?: Item_pocket_namesCountAggregate;

    @Field(() => Item_pocket_namesAvgAggregate, {nullable:true})
    _avg?: Item_pocket_namesAvgAggregate;

    @Field(() => Item_pocket_namesSumAggregate, {nullable:true})
    _sum?: Item_pocket_namesSumAggregate;

    @Field(() => Item_pocket_namesMinAggregate, {nullable:true})
    _min?: Item_pocket_namesMinAggregate;

    @Field(() => Item_pocket_namesMaxAggregate, {nullable:true})
    _max?: Item_pocket_namesMaxAggregate;
}
