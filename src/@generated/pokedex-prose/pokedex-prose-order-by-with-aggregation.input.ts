import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokedex_proseCountOrderByAggregateInput } from './pokedex-prose-count-order-by-aggregate.input';
import { pokedex_proseAvgOrderByAggregateInput } from './pokedex-prose-avg-order-by-aggregate.input';
import { pokedex_proseMaxOrderByAggregateInput } from './pokedex-prose-max-order-by-aggregate.input';
import { pokedex_proseMinOrderByAggregateInput } from './pokedex-prose-min-order-by-aggregate.input';
import { pokedex_proseSumOrderByAggregateInput } from './pokedex-prose-sum-order-by-aggregate.input';

@InputType()
export class pokedex_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => pokedex_proseCountOrderByAggregateInput, {nullable:true})
    _count?: pokedex_proseCountOrderByAggregateInput;

    @Field(() => pokedex_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokedex_proseAvgOrderByAggregateInput;

    @Field(() => pokedex_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: pokedex_proseMaxOrderByAggregateInput;

    @Field(() => pokedex_proseMinOrderByAggregateInput, {nullable:true})
    _min?: pokedex_proseMinOrderByAggregateInput;

    @Field(() => pokedex_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: pokedex_proseSumOrderByAggregateInput;
}
