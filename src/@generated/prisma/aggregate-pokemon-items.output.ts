import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_itemsCountAggregate } from './pokemon-items-count-aggregate.output';
import { Pokemon_itemsAvgAggregate } from './pokemon-items-avg-aggregate.output';
import { Pokemon_itemsSumAggregate } from './pokemon-items-sum-aggregate.output';
import { Pokemon_itemsMinAggregate } from './pokemon-items-min-aggregate.output';
import { Pokemon_itemsMaxAggregate } from './pokemon-items-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_items {

    @Field(() => Pokemon_itemsCountAggregate, {nullable:true})
    _count?: Pokemon_itemsCountAggregate;

    @Field(() => Pokemon_itemsAvgAggregate, {nullable:true})
    _avg?: Pokemon_itemsAvgAggregate;

    @Field(() => Pokemon_itemsSumAggregate, {nullable:true})
    _sum?: Pokemon_itemsSumAggregate;

    @Field(() => Pokemon_itemsMinAggregate, {nullable:true})
    _min?: Pokemon_itemsMinAggregate;

    @Field(() => Pokemon_itemsMaxAggregate, {nullable:true})
    _max?: Pokemon_itemsMaxAggregate;
}
