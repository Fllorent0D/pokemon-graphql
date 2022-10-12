import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokeathlon_stat_namesCountOrderByAggregateInput } from './pokeathlon-stat-names-count-order-by-aggregate.input';
import { pokeathlon_stat_namesAvgOrderByAggregateInput } from './pokeathlon-stat-names-avg-order-by-aggregate.input';
import { pokeathlon_stat_namesMaxOrderByAggregateInput } from './pokeathlon-stat-names-max-order-by-aggregate.input';
import { pokeathlon_stat_namesMinOrderByAggregateInput } from './pokeathlon-stat-names-min-order-by-aggregate.input';
import { pokeathlon_stat_namesSumOrderByAggregateInput } from './pokeathlon-stat-names-sum-order-by-aggregate.input';

@InputType()
export class pokeathlon_stat_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokeathlon_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => pokeathlon_stat_namesCountOrderByAggregateInput, {nullable:true})
    _count?: pokeathlon_stat_namesCountOrderByAggregateInput;

    @Field(() => pokeathlon_stat_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokeathlon_stat_namesAvgOrderByAggregateInput;

    @Field(() => pokeathlon_stat_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokeathlon_stat_namesMaxOrderByAggregateInput;

    @Field(() => pokeathlon_stat_namesMinOrderByAggregateInput, {nullable:true})
    _min?: pokeathlon_stat_namesMinOrderByAggregateInput;

    @Field(() => pokeathlon_stat_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokeathlon_stat_namesSumOrderByAggregateInput;
}
