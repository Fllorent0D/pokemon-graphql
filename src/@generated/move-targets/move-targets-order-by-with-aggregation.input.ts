import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_targetsCountOrderByAggregateInput } from './move-targets-count-order-by-aggregate.input';
import { move_targetsAvgOrderByAggregateInput } from './move-targets-avg-order-by-aggregate.input';
import { move_targetsMaxOrderByAggregateInput } from './move-targets-max-order-by-aggregate.input';
import { move_targetsMinOrderByAggregateInput } from './move-targets-min-order-by-aggregate.input';
import { move_targetsSumOrderByAggregateInput } from './move-targets-sum-order-by-aggregate.input';

@InputType()
export class move_targetsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_targetsCountOrderByAggregateInput, {nullable:true})
    _count?: move_targetsCountOrderByAggregateInput;

    @Field(() => move_targetsAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_targetsAvgOrderByAggregateInput;

    @Field(() => move_targetsMaxOrderByAggregateInput, {nullable:true})
    _max?: move_targetsMaxOrderByAggregateInput;

    @Field(() => move_targetsMinOrderByAggregateInput, {nullable:true})
    _min?: move_targetsMinOrderByAggregateInput;

    @Field(() => move_targetsSumOrderByAggregateInput, {nullable:true})
    _sum?: move_targetsSumOrderByAggregateInput;
}
