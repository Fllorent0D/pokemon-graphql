import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Item_namesCountAggregate } from './item-names-count-aggregate.output';
import { Item_namesAvgAggregate } from './item-names-avg-aggregate.output';
import { Item_namesSumAggregate } from './item-names-sum-aggregate.output';
import { Item_namesMinAggregate } from './item-names-min-aggregate.output';
import { Item_namesMaxAggregate } from './item-names-max-aggregate.output';

@ObjectType()
export class AggregateItem_names {

    @Field(() => Item_namesCountAggregate, {nullable:true})
    _count?: Item_namesCountAggregate;

    @Field(() => Item_namesAvgAggregate, {nullable:true})
    _avg?: Item_namesAvgAggregate;

    @Field(() => Item_namesSumAggregate, {nullable:true})
    _sum?: Item_namesSumAggregate;

    @Field(() => Item_namesMinAggregate, {nullable:true})
    _min?: Item_namesMinAggregate;

    @Field(() => Item_namesMaxAggregate, {nullable:true})
    _max?: Item_namesMaxAggregate;
}
