import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Item_flag_proseCountAggregate } from './item-flag-prose-count-aggregate.output';
import { Item_flag_proseAvgAggregate } from './item-flag-prose-avg-aggregate.output';
import { Item_flag_proseSumAggregate } from './item-flag-prose-sum-aggregate.output';
import { Item_flag_proseMinAggregate } from './item-flag-prose-min-aggregate.output';
import { Item_flag_proseMaxAggregate } from './item-flag-prose-max-aggregate.output';

@ObjectType()
export class Item_flag_proseGroupBy {

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Item_flag_proseCountAggregate, {nullable:true})
    _count?: Item_flag_proseCountAggregate;

    @Field(() => Item_flag_proseAvgAggregate, {nullable:true})
    _avg?: Item_flag_proseAvgAggregate;

    @Field(() => Item_flag_proseSumAggregate, {nullable:true})
    _sum?: Item_flag_proseSumAggregate;

    @Field(() => Item_flag_proseMinAggregate, {nullable:true})
    _min?: Item_flag_proseMinAggregate;

    @Field(() => Item_flag_proseMaxAggregate, {nullable:true})
    _max?: Item_flag_proseMaxAggregate;
}
