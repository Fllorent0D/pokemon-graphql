import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_flavor_textCountOrderByAggregateInput } from './item-flavor-text-count-order-by-aggregate.input';
import { item_flavor_textAvgOrderByAggregateInput } from './item-flavor-text-avg-order-by-aggregate.input';
import { item_flavor_textMaxOrderByAggregateInput } from './item-flavor-text-max-order-by-aggregate.input';
import { item_flavor_textMinOrderByAggregateInput } from './item-flavor-text-min-order-by-aggregate.input';
import { item_flavor_textSumOrderByAggregateInput } from './item-flavor-text-sum-order-by-aggregate.input';

@InputType()
export class item_flavor_textOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => item_flavor_textCountOrderByAggregateInput, {nullable:true})
    _count?: item_flavor_textCountOrderByAggregateInput;

    @Field(() => item_flavor_textAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_flavor_textAvgOrderByAggregateInput;

    @Field(() => item_flavor_textMaxOrderByAggregateInput, {nullable:true})
    _max?: item_flavor_textMaxOrderByAggregateInput;

    @Field(() => item_flavor_textMinOrderByAggregateInput, {nullable:true})
    _min?: item_flavor_textMinOrderByAggregateInput;

    @Field(() => item_flavor_textSumOrderByAggregateInput, {nullable:true})
    _sum?: item_flavor_textSumOrderByAggregateInput;
}
