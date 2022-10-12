import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_namesCountOrderByAggregateInput } from './move-names-count-order-by-aggregate.input';
import { move_namesAvgOrderByAggregateInput } from './move-names-avg-order-by-aggregate.input';
import { move_namesMaxOrderByAggregateInput } from './move-names-max-order-by-aggregate.input';
import { move_namesMinOrderByAggregateInput } from './move-names-min-order-by-aggregate.input';
import { move_namesSumOrderByAggregateInput } from './move-names-sum-order-by-aggregate.input';

@InputType()
export class move_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => move_namesCountOrderByAggregateInput, {nullable:true})
    _count?: move_namesCountOrderByAggregateInput;

    @Field(() => move_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_namesAvgOrderByAggregateInput;

    @Field(() => move_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: move_namesMaxOrderByAggregateInput;

    @Field(() => move_namesMinOrderByAggregateInput, {nullable:true})
    _min?: move_namesMinOrderByAggregateInput;

    @Field(() => move_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: move_namesSumOrderByAggregateInput;
}
