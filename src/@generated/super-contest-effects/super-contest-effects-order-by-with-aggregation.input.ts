import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { super_contest_effectsCountOrderByAggregateInput } from './super-contest-effects-count-order-by-aggregate.input';
import { super_contest_effectsAvgOrderByAggregateInput } from './super-contest-effects-avg-order-by-aggregate.input';
import { super_contest_effectsMaxOrderByAggregateInput } from './super-contest-effects-max-order-by-aggregate.input';
import { super_contest_effectsMinOrderByAggregateInput } from './super-contest-effects-min-order-by-aggregate.input';
import { super_contest_effectsSumOrderByAggregateInput } from './super-contest-effects-sum-order-by-aggregate.input';

@InputType()
export class super_contest_effectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => super_contest_effectsCountOrderByAggregateInput, {nullable:true})
    _count?: super_contest_effectsCountOrderByAggregateInput;

    @Field(() => super_contest_effectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: super_contest_effectsAvgOrderByAggregateInput;

    @Field(() => super_contest_effectsMaxOrderByAggregateInput, {nullable:true})
    _max?: super_contest_effectsMaxOrderByAggregateInput;

    @Field(() => super_contest_effectsMinOrderByAggregateInput, {nullable:true})
    _min?: super_contest_effectsMinOrderByAggregateInput;

    @Field(() => super_contest_effectsSumOrderByAggregateInput, {nullable:true})
    _sum?: super_contest_effectsSumOrderByAggregateInput;
}
