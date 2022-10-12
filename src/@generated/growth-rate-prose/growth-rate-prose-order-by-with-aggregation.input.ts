import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { growth_rate_proseCountOrderByAggregateInput } from './growth-rate-prose-count-order-by-aggregate.input';
import { growth_rate_proseAvgOrderByAggregateInput } from './growth-rate-prose-avg-order-by-aggregate.input';
import { growth_rate_proseMaxOrderByAggregateInput } from './growth-rate-prose-max-order-by-aggregate.input';
import { growth_rate_proseMinOrderByAggregateInput } from './growth-rate-prose-min-order-by-aggregate.input';
import { growth_rate_proseSumOrderByAggregateInput } from './growth-rate-prose-sum-order-by-aggregate.input';

@InputType()
export class growth_rate_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => growth_rate_proseCountOrderByAggregateInput, {nullable:true})
    _count?: growth_rate_proseCountOrderByAggregateInput;

    @Field(() => growth_rate_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: growth_rate_proseAvgOrderByAggregateInput;

    @Field(() => growth_rate_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: growth_rate_proseMaxOrderByAggregateInput;

    @Field(() => growth_rate_proseMinOrderByAggregateInput, {nullable:true})
    _min?: growth_rate_proseMinOrderByAggregateInput;

    @Field(() => growth_rate_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: growth_rate_proseSumOrderByAggregateInput;
}
