import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_meta_stat_changesCountOrderByAggregateInput } from './move-meta-stat-changes-count-order-by-aggregate.input';
import { move_meta_stat_changesAvgOrderByAggregateInput } from './move-meta-stat-changes-avg-order-by-aggregate.input';
import { move_meta_stat_changesMaxOrderByAggregateInput } from './move-meta-stat-changes-max-order-by-aggregate.input';
import { move_meta_stat_changesMinOrderByAggregateInput } from './move-meta-stat-changes-min-order-by-aggregate.input';
import { move_meta_stat_changesSumOrderByAggregateInput } from './move-meta-stat-changes-sum-order-by-aggregate.input';

@InputType()
export class move_meta_stat_changesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    change?: keyof typeof SortOrder;

    @Field(() => move_meta_stat_changesCountOrderByAggregateInput, {nullable:true})
    _count?: move_meta_stat_changesCountOrderByAggregateInput;

    @Field(() => move_meta_stat_changesAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_meta_stat_changesAvgOrderByAggregateInput;

    @Field(() => move_meta_stat_changesMaxOrderByAggregateInput, {nullable:true})
    _max?: move_meta_stat_changesMaxOrderByAggregateInput;

    @Field(() => move_meta_stat_changesMinOrderByAggregateInput, {nullable:true})
    _min?: move_meta_stat_changesMinOrderByAggregateInput;

    @Field(() => move_meta_stat_changesSumOrderByAggregateInput, {nullable:true})
    _sum?: move_meta_stat_changesSumOrderByAggregateInput;
}
