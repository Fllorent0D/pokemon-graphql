import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { nature_pokeathlon_statsCountOrderByAggregateInput } from './nature-pokeathlon-stats-count-order-by-aggregate.input';
import { nature_pokeathlon_statsAvgOrderByAggregateInput } from './nature-pokeathlon-stats-avg-order-by-aggregate.input';
import { nature_pokeathlon_statsMaxOrderByAggregateInput } from './nature-pokeathlon-stats-max-order-by-aggregate.input';
import { nature_pokeathlon_statsMinOrderByAggregateInput } from './nature-pokeathlon-stats-min-order-by-aggregate.input';
import { nature_pokeathlon_statsSumOrderByAggregateInput } from './nature-pokeathlon-stats-sum-order-by-aggregate.input';

@InputType()
export class nature_pokeathlon_statsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokeathlon_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_change?: keyof typeof SortOrder;

    @Field(() => nature_pokeathlon_statsCountOrderByAggregateInput, {nullable:true})
    _count?: nature_pokeathlon_statsCountOrderByAggregateInput;

    @Field(() => nature_pokeathlon_statsAvgOrderByAggregateInput, {nullable:true})
    _avg?: nature_pokeathlon_statsAvgOrderByAggregateInput;

    @Field(() => nature_pokeathlon_statsMaxOrderByAggregateInput, {nullable:true})
    _max?: nature_pokeathlon_statsMaxOrderByAggregateInput;

    @Field(() => nature_pokeathlon_statsMinOrderByAggregateInput, {nullable:true})
    _min?: nature_pokeathlon_statsMinOrderByAggregateInput;

    @Field(() => nature_pokeathlon_statsSumOrderByAggregateInput, {nullable:true})
    _sum?: nature_pokeathlon_statsSumOrderByAggregateInput;
}
