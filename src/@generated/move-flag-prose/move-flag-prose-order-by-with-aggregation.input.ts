import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_flag_proseCountOrderByAggregateInput } from './move-flag-prose-count-order-by-aggregate.input';
import { move_flag_proseAvgOrderByAggregateInput } from './move-flag-prose-avg-order-by-aggregate.input';
import { move_flag_proseMaxOrderByAggregateInput } from './move-flag-prose-max-order-by-aggregate.input';
import { move_flag_proseMinOrderByAggregateInput } from './move-flag-prose-min-order-by-aggregate.input';
import { move_flag_proseSumOrderByAggregateInput } from './move-flag-prose-sum-order-by-aggregate.input';

@InputType()
export class move_flag_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => move_flag_proseCountOrderByAggregateInput, {nullable:true})
    _count?: move_flag_proseCountOrderByAggregateInput;

    @Field(() => move_flag_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_flag_proseAvgOrderByAggregateInput;

    @Field(() => move_flag_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: move_flag_proseMaxOrderByAggregateInput;

    @Field(() => move_flag_proseMinOrderByAggregateInput, {nullable:true})
    _min?: move_flag_proseMinOrderByAggregateInput;

    @Field(() => move_flag_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: move_flag_proseSumOrderByAggregateInput;
}
