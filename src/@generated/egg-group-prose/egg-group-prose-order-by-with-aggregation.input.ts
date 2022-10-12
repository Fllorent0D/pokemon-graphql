import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { egg_group_proseCountOrderByAggregateInput } from './egg-group-prose-count-order-by-aggregate.input';
import { egg_group_proseAvgOrderByAggregateInput } from './egg-group-prose-avg-order-by-aggregate.input';
import { egg_group_proseMaxOrderByAggregateInput } from './egg-group-prose-max-order-by-aggregate.input';
import { egg_group_proseMinOrderByAggregateInput } from './egg-group-prose-min-order-by-aggregate.input';
import { egg_group_proseSumOrderByAggregateInput } from './egg-group-prose-sum-order-by-aggregate.input';

@InputType()
export class egg_group_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => egg_group_proseCountOrderByAggregateInput, {nullable:true})
    _count?: egg_group_proseCountOrderByAggregateInput;

    @Field(() => egg_group_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: egg_group_proseAvgOrderByAggregateInput;

    @Field(() => egg_group_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: egg_group_proseMaxOrderByAggregateInput;

    @Field(() => egg_group_proseMinOrderByAggregateInput, {nullable:true})
    _min?: egg_group_proseMinOrderByAggregateInput;

    @Field(() => egg_group_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: egg_group_proseSumOrderByAggregateInput;
}
