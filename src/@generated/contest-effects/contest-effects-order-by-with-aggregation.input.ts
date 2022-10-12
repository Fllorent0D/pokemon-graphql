import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_effectsCountOrderByAggregateInput } from './contest-effects-count-order-by-aggregate.input';
import { contest_effectsAvgOrderByAggregateInput } from './contest-effects-avg-order-by-aggregate.input';
import { contest_effectsMaxOrderByAggregateInput } from './contest-effects-max-order-by-aggregate.input';
import { contest_effectsMinOrderByAggregateInput } from './contest-effects-min-order-by-aggregate.input';
import { contest_effectsSumOrderByAggregateInput } from './contest-effects-sum-order-by-aggregate.input';

@InputType()
export class contest_effectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => contest_effectsCountOrderByAggregateInput, {nullable:true})
    _count?: contest_effectsCountOrderByAggregateInput;

    @Field(() => contest_effectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: contest_effectsAvgOrderByAggregateInput;

    @Field(() => contest_effectsMaxOrderByAggregateInput, {nullable:true})
    _max?: contest_effectsMaxOrderByAggregateInput;

    @Field(() => contest_effectsMinOrderByAggregateInput, {nullable:true})
    _min?: contest_effectsMinOrderByAggregateInput;

    @Field(() => contest_effectsSumOrderByAggregateInput, {nullable:true})
    _sum?: contest_effectsSumOrderByAggregateInput;
}
