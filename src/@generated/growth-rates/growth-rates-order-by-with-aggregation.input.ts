import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { growth_ratesCountOrderByAggregateInput } from './growth-rates-count-order-by-aggregate.input';
import { growth_ratesAvgOrderByAggregateInput } from './growth-rates-avg-order-by-aggregate.input';
import { growth_ratesMaxOrderByAggregateInput } from './growth-rates-max-order-by-aggregate.input';
import { growth_ratesMinOrderByAggregateInput } from './growth-rates-min-order-by-aggregate.input';
import { growth_ratesSumOrderByAggregateInput } from './growth-rates-sum-order-by-aggregate.input';

@InputType()
export class growth_ratesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formula?: keyof typeof SortOrder;

    @Field(() => growth_ratesCountOrderByAggregateInput, {nullable:true})
    _count?: growth_ratesCountOrderByAggregateInput;

    @Field(() => growth_ratesAvgOrderByAggregateInput, {nullable:true})
    _avg?: growth_ratesAvgOrderByAggregateInput;

    @Field(() => growth_ratesMaxOrderByAggregateInput, {nullable:true})
    _max?: growth_ratesMaxOrderByAggregateInput;

    @Field(() => growth_ratesMinOrderByAggregateInput, {nullable:true})
    _min?: growth_ratesMinOrderByAggregateInput;

    @Field(() => growth_ratesSumOrderByAggregateInput, {nullable:true})
    _sum?: growth_ratesSumOrderByAggregateInput;
}
