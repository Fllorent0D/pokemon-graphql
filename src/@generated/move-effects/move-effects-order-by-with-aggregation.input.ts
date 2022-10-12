import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_effectsCountOrderByAggregateInput } from './move-effects-count-order-by-aggregate.input';
import { move_effectsAvgOrderByAggregateInput } from './move-effects-avg-order-by-aggregate.input';
import { move_effectsMaxOrderByAggregateInput } from './move-effects-max-order-by-aggregate.input';
import { move_effectsMinOrderByAggregateInput } from './move-effects-min-order-by-aggregate.input';
import { move_effectsSumOrderByAggregateInput } from './move-effects-sum-order-by-aggregate.input';

@InputType()
export class move_effectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => move_effectsCountOrderByAggregateInput, {nullable:true})
    _count?: move_effectsCountOrderByAggregateInput;

    @Field(() => move_effectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_effectsAvgOrderByAggregateInput;

    @Field(() => move_effectsMaxOrderByAggregateInput, {nullable:true})
    _max?: move_effectsMaxOrderByAggregateInput;

    @Field(() => move_effectsMinOrderByAggregateInput, {nullable:true})
    _min?: move_effectsMinOrderByAggregateInput;

    @Field(() => move_effectsSumOrderByAggregateInput, {nullable:true})
    _sum?: move_effectsSumOrderByAggregateInput;
}
