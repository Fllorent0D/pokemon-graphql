import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokeathlon_statsCountOrderByAggregateInput } from './pokeathlon-stats-count-order-by-aggregate.input';
import { pokeathlon_statsAvgOrderByAggregateInput } from './pokeathlon-stats-avg-order-by-aggregate.input';
import { pokeathlon_statsMaxOrderByAggregateInput } from './pokeathlon-stats-max-order-by-aggregate.input';
import { pokeathlon_statsMinOrderByAggregateInput } from './pokeathlon-stats-min-order-by-aggregate.input';
import { pokeathlon_statsSumOrderByAggregateInput } from './pokeathlon-stats-sum-order-by-aggregate.input';

@InputType()
export class pokeathlon_statsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokeathlon_statsCountOrderByAggregateInput, {nullable:true})
    _count?: pokeathlon_statsCountOrderByAggregateInput;

    @Field(() => pokeathlon_statsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokeathlon_statsAvgOrderByAggregateInput;

    @Field(() => pokeathlon_statsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokeathlon_statsMaxOrderByAggregateInput;

    @Field(() => pokeathlon_statsMinOrderByAggregateInput, {nullable:true})
    _min?: pokeathlon_statsMinOrderByAggregateInput;

    @Field(() => pokeathlon_statsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokeathlon_statsSumOrderByAggregateInput;
}
