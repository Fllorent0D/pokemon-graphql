import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_target_proseCountOrderByAggregateInput } from './move-target-prose-count-order-by-aggregate.input';
import { move_target_proseAvgOrderByAggregateInput } from './move-target-prose-avg-order-by-aggregate.input';
import { move_target_proseMaxOrderByAggregateInput } from './move-target-prose-max-order-by-aggregate.input';
import { move_target_proseMinOrderByAggregateInput } from './move-target-prose-min-order-by-aggregate.input';
import { move_target_proseSumOrderByAggregateInput } from './move-target-prose-sum-order-by-aggregate.input';

@InputType()
export class move_target_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_target_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => move_target_proseCountOrderByAggregateInput, {nullable:true})
    _count?: move_target_proseCountOrderByAggregateInput;

    @Field(() => move_target_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_target_proseAvgOrderByAggregateInput;

    @Field(() => move_target_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: move_target_proseMaxOrderByAggregateInput;

    @Field(() => move_target_proseMinOrderByAggregateInput, {nullable:true})
    _min?: move_target_proseMinOrderByAggregateInput;

    @Field(() => move_target_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: move_target_proseSumOrderByAggregateInput;
}
