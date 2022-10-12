import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_flagsCountOrderByAggregateInput } from './move-flags-count-order-by-aggregate.input';
import { move_flagsAvgOrderByAggregateInput } from './move-flags-avg-order-by-aggregate.input';
import { move_flagsMaxOrderByAggregateInput } from './move-flags-max-order-by-aggregate.input';
import { move_flagsMinOrderByAggregateInput } from './move-flags-min-order-by-aggregate.input';
import { move_flagsSumOrderByAggregateInput } from './move-flags-sum-order-by-aggregate.input';

@InputType()
export class move_flagsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_flagsCountOrderByAggregateInput, {nullable:true})
    _count?: move_flagsCountOrderByAggregateInput;

    @Field(() => move_flagsAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_flagsAvgOrderByAggregateInput;

    @Field(() => move_flagsMaxOrderByAggregateInput, {nullable:true})
    _max?: move_flagsMaxOrderByAggregateInput;

    @Field(() => move_flagsMinOrderByAggregateInput, {nullable:true})
    _min?: move_flagsMinOrderByAggregateInput;

    @Field(() => move_flagsSumOrderByAggregateInput, {nullable:true})
    _sum?: move_flagsSumOrderByAggregateInput;
}
