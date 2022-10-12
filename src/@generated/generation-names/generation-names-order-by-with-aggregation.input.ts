import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { generation_namesCountOrderByAggregateInput } from './generation-names-count-order-by-aggregate.input';
import { generation_namesAvgOrderByAggregateInput } from './generation-names-avg-order-by-aggregate.input';
import { generation_namesMaxOrderByAggregateInput } from './generation-names-max-order-by-aggregate.input';
import { generation_namesMinOrderByAggregateInput } from './generation-names-min-order-by-aggregate.input';
import { generation_namesSumOrderByAggregateInput } from './generation-names-sum-order-by-aggregate.input';

@InputType()
export class generation_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => generation_namesCountOrderByAggregateInput, {nullable:true})
    _count?: generation_namesCountOrderByAggregateInput;

    @Field(() => generation_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: generation_namesAvgOrderByAggregateInput;

    @Field(() => generation_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: generation_namesMaxOrderByAggregateInput;

    @Field(() => generation_namesMinOrderByAggregateInput, {nullable:true})
    _min?: generation_namesMinOrderByAggregateInput;

    @Field(() => generation_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: generation_namesSumOrderByAggregateInput;
}
