import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_statsCountOrderByAggregateInput } from './pokemon-stats-count-order-by-aggregate.input';
import { pokemon_statsAvgOrderByAggregateInput } from './pokemon-stats-avg-order-by-aggregate.input';
import { pokemon_statsMaxOrderByAggregateInput } from './pokemon-stats-max-order-by-aggregate.input';
import { pokemon_statsMinOrderByAggregateInput } from './pokemon-stats-min-order-by-aggregate.input';
import { pokemon_statsSumOrderByAggregateInput } from './pokemon-stats-sum-order-by-aggregate.input';

@InputType()
export class pokemon_statsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_stat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effort?: keyof typeof SortOrder;

    @Field(() => pokemon_statsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_statsCountOrderByAggregateInput;

    @Field(() => pokemon_statsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_statsAvgOrderByAggregateInput;

    @Field(() => pokemon_statsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_statsMaxOrderByAggregateInput;

    @Field(() => pokemon_statsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_statsMinOrderByAggregateInput;

    @Field(() => pokemon_statsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_statsSumOrderByAggregateInput;
}
