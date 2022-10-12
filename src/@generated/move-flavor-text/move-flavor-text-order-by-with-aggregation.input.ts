import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_flavor_textCountOrderByAggregateInput } from './move-flavor-text-count-order-by-aggregate.input';
import { move_flavor_textAvgOrderByAggregateInput } from './move-flavor-text-avg-order-by-aggregate.input';
import { move_flavor_textMaxOrderByAggregateInput } from './move-flavor-text-max-order-by-aggregate.input';
import { move_flavor_textMinOrderByAggregateInput } from './move-flavor-text-min-order-by-aggregate.input';
import { move_flavor_textSumOrderByAggregateInput } from './move-flavor-text-sum-order-by-aggregate.input';

@InputType()
export class move_flavor_textOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => move_flavor_textCountOrderByAggregateInput, {nullable:true})
    _count?: move_flavor_textCountOrderByAggregateInput;

    @Field(() => move_flavor_textAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_flavor_textAvgOrderByAggregateInput;

    @Field(() => move_flavor_textMaxOrderByAggregateInput, {nullable:true})
    _max?: move_flavor_textMaxOrderByAggregateInput;

    @Field(() => move_flavor_textMinOrderByAggregateInput, {nullable:true})
    _min?: move_flavor_textMinOrderByAggregateInput;

    @Field(() => move_flavor_textSumOrderByAggregateInput, {nullable:true})
    _sum?: move_flavor_textSumOrderByAggregateInput;
}
