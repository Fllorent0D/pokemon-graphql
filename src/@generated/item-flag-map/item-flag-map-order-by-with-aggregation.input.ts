import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_flag_mapCountOrderByAggregateInput } from './item-flag-map-count-order-by-aggregate.input';
import { item_flag_mapAvgOrderByAggregateInput } from './item-flag-map-avg-order-by-aggregate.input';
import { item_flag_mapMaxOrderByAggregateInput } from './item-flag-map-max-order-by-aggregate.input';
import { item_flag_mapMinOrderByAggregateInput } from './item-flag-map-min-order-by-aggregate.input';
import { item_flag_mapSumOrderByAggregateInput } from './item-flag-map-sum-order-by-aggregate.input';

@InputType()
export class item_flag_mapOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_flag_id?: keyof typeof SortOrder;

    @Field(() => item_flag_mapCountOrderByAggregateInput, {nullable:true})
    _count?: item_flag_mapCountOrderByAggregateInput;

    @Field(() => item_flag_mapAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_flag_mapAvgOrderByAggregateInput;

    @Field(() => item_flag_mapMaxOrderByAggregateInput, {nullable:true})
    _max?: item_flag_mapMaxOrderByAggregateInput;

    @Field(() => item_flag_mapMinOrderByAggregateInput, {nullable:true})
    _min?: item_flag_mapMinOrderByAggregateInput;

    @Field(() => item_flag_mapSumOrderByAggregateInput, {nullable:true})
    _sum?: item_flag_mapSumOrderByAggregateInput;
}
