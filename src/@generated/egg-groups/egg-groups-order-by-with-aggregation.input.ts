import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { egg_groupsCountOrderByAggregateInput } from './egg-groups-count-order-by-aggregate.input';
import { egg_groupsAvgOrderByAggregateInput } from './egg-groups-avg-order-by-aggregate.input';
import { egg_groupsMaxOrderByAggregateInput } from './egg-groups-max-order-by-aggregate.input';
import { egg_groupsMinOrderByAggregateInput } from './egg-groups-min-order-by-aggregate.input';
import { egg_groupsSumOrderByAggregateInput } from './egg-groups-sum-order-by-aggregate.input';

@InputType()
export class egg_groupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => egg_groupsCountOrderByAggregateInput, {nullable:true})
    _count?: egg_groupsCountOrderByAggregateInput;

    @Field(() => egg_groupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: egg_groupsAvgOrderByAggregateInput;

    @Field(() => egg_groupsMaxOrderByAggregateInput, {nullable:true})
    _max?: egg_groupsMaxOrderByAggregateInput;

    @Field(() => egg_groupsMinOrderByAggregateInput, {nullable:true})
    _min?: egg_groupsMinOrderByAggregateInput;

    @Field(() => egg_groupsSumOrderByAggregateInput, {nullable:true})
    _sum?: egg_groupsSumOrderByAggregateInput;
}
