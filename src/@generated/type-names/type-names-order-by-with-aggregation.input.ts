import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { type_namesCountOrderByAggregateInput } from './type-names-count-order-by-aggregate.input';
import { type_namesAvgOrderByAggregateInput } from './type-names-avg-order-by-aggregate.input';
import { type_namesMaxOrderByAggregateInput } from './type-names-max-order-by-aggregate.input';
import { type_namesMinOrderByAggregateInput } from './type-names-min-order-by-aggregate.input';
import { type_namesSumOrderByAggregateInput } from './type-names-sum-order-by-aggregate.input';

@InputType()
export class type_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => type_namesCountOrderByAggregateInput, {nullable:true})
    _count?: type_namesCountOrderByAggregateInput;

    @Field(() => type_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: type_namesAvgOrderByAggregateInput;

    @Field(() => type_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: type_namesMaxOrderByAggregateInput;

    @Field(() => type_namesMinOrderByAggregateInput, {nullable:true})
    _min?: type_namesMinOrderByAggregateInput;

    @Field(() => type_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: type_namesSumOrderByAggregateInput;
}
