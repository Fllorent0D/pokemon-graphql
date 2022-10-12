import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_category_proseCountAggregate } from './item-category-prose-count-aggregate.output';
import { Item_category_proseAvgAggregate } from './item-category-prose-avg-aggregate.output';
import { Item_category_proseSumAggregate } from './item-category-prose-sum-aggregate.output';
import { Item_category_proseMinAggregate } from './item-category-prose-min-aggregate.output';
import { Item_category_proseMaxAggregate } from './item-category-prose-max-aggregate.output';

@ObjectType()
export class Item_category_proseGroupBy {

    @Field(() => Int, {nullable:false})
    item_category_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Item_category_proseCountAggregate, {nullable:true})
    _count?: Item_category_proseCountAggregate;

    @Field(() => Item_category_proseAvgAggregate, {nullable:true})
    _avg?: Item_category_proseAvgAggregate;

    @Field(() => Item_category_proseSumAggregate, {nullable:true})
    _sum?: Item_category_proseSumAggregate;

    @Field(() => Item_category_proseMinAggregate, {nullable:true})
    _min?: Item_category_proseMinAggregate;

    @Field(() => Item_category_proseMaxAggregate, {nullable:true})
    _max?: Item_category_proseMaxAggregate;
}
