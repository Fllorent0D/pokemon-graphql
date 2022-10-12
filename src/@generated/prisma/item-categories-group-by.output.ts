import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_categoriesCountAggregate } from './item-categories-count-aggregate.output';
import { Item_categoriesAvgAggregate } from './item-categories-avg-aggregate.output';
import { Item_categoriesSumAggregate } from './item-categories-sum-aggregate.output';
import { Item_categoriesMinAggregate } from './item-categories-min-aggregate.output';
import { Item_categoriesMaxAggregate } from './item-categories-max-aggregate.output';

@ObjectType()
export class Item_categoriesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    pocket_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Item_categoriesCountAggregate, {nullable:true})
    _count?: Item_categoriesCountAggregate;

    @Field(() => Item_categoriesAvgAggregate, {nullable:true})
    _avg?: Item_categoriesAvgAggregate;

    @Field(() => Item_categoriesSumAggregate, {nullable:true})
    _sum?: Item_categoriesSumAggregate;

    @Field(() => Item_categoriesMinAggregate, {nullable:true})
    _min?: Item_categoriesMinAggregate;

    @Field(() => Item_categoriesMaxAggregate, {nullable:true})
    _max?: Item_categoriesMaxAggregate;
}
