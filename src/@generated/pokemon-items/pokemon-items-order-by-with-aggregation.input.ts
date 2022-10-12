import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_itemsCountOrderByAggregateInput } from './pokemon-items-count-order-by-aggregate.input';
import { pokemon_itemsAvgOrderByAggregateInput } from './pokemon-items-avg-order-by-aggregate.input';
import { pokemon_itemsMaxOrderByAggregateInput } from './pokemon-items-max-order-by-aggregate.input';
import { pokemon_itemsMinOrderByAggregateInput } from './pokemon-items-min-order-by-aggregate.input';
import { pokemon_itemsSumOrderByAggregateInput } from './pokemon-items-sum-order-by-aggregate.input';

@InputType()
export class pokemon_itemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rarity?: keyof typeof SortOrder;

    @Field(() => pokemon_itemsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_itemsCountOrderByAggregateInput;

    @Field(() => pokemon_itemsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_itemsAvgOrderByAggregateInput;

    @Field(() => pokemon_itemsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_itemsMaxOrderByAggregateInput;

    @Field(() => pokemon_itemsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_itemsMinOrderByAggregateInput;

    @Field(() => pokemon_itemsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_itemsSumOrderByAggregateInput;
}
