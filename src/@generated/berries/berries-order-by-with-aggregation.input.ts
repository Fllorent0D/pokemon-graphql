import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { berriesCountOrderByAggregateInput } from './berries-count-order-by-aggregate.input';
import { berriesAvgOrderByAggregateInput } from './berries-avg-order-by-aggregate.input';
import { berriesMaxOrderByAggregateInput } from './berries-max-order-by-aggregate.input';
import { berriesMinOrderByAggregateInput } from './berries-min-order-by-aggregate.input';
import { berriesSumOrderByAggregateInput } from './berries-sum-order-by-aggregate.input';

@InputType()
export class berriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firmness_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    natural_gift_power?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    natural_gift_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_harvest?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    growth_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    soil_dryness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    smoothness?: keyof typeof SortOrder;

    @Field(() => berriesCountOrderByAggregateInput, {nullable:true})
    _count?: berriesCountOrderByAggregateInput;

    @Field(() => berriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: berriesAvgOrderByAggregateInput;

    @Field(() => berriesMaxOrderByAggregateInput, {nullable:true})
    _max?: berriesMaxOrderByAggregateInput;

    @Field(() => berriesMinOrderByAggregateInput, {nullable:true})
    _min?: berriesMinOrderByAggregateInput;

    @Field(() => berriesSumOrderByAggregateInput, {nullable:true})
    _sum?: berriesSumOrderByAggregateInput;
}
