import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_flag_mapCountOrderByAggregateInput } from './move-flag-map-count-order-by-aggregate.input';
import { move_flag_mapAvgOrderByAggregateInput } from './move-flag-map-avg-order-by-aggregate.input';
import { move_flag_mapMaxOrderByAggregateInput } from './move-flag-map-max-order-by-aggregate.input';
import { move_flag_mapMinOrderByAggregateInput } from './move-flag-map-min-order-by-aggregate.input';
import { move_flag_mapSumOrderByAggregateInput } from './move-flag-map-sum-order-by-aggregate.input';

@InputType()
export class move_flag_mapOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: keyof typeof SortOrder;

    @Field(() => move_flag_mapCountOrderByAggregateInput, {nullable:true})
    _count?: move_flag_mapCountOrderByAggregateInput;

    @Field(() => move_flag_mapAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_flag_mapAvgOrderByAggregateInput;

    @Field(() => move_flag_mapMaxOrderByAggregateInput, {nullable:true})
    _max?: move_flag_mapMaxOrderByAggregateInput;

    @Field(() => move_flag_mapMinOrderByAggregateInput, {nullable:true})
    _min?: move_flag_mapMinOrderByAggregateInput;

    @Field(() => move_flag_mapSumOrderByAggregateInput, {nullable:true})
    _sum?: move_flag_mapSumOrderByAggregateInput;
}
