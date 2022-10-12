import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { nature_namesCountOrderByAggregateInput } from './nature-names-count-order-by-aggregate.input';
import { nature_namesAvgOrderByAggregateInput } from './nature-names-avg-order-by-aggregate.input';
import { nature_namesMaxOrderByAggregateInput } from './nature-names-max-order-by-aggregate.input';
import { nature_namesMinOrderByAggregateInput } from './nature-names-min-order-by-aggregate.input';
import { nature_namesSumOrderByAggregateInput } from './nature-names-sum-order-by-aggregate.input';

@InputType()
export class nature_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => nature_namesCountOrderByAggregateInput, {nullable:true})
    _count?: nature_namesCountOrderByAggregateInput;

    @Field(() => nature_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: nature_namesAvgOrderByAggregateInput;

    @Field(() => nature_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: nature_namesMaxOrderByAggregateInput;

    @Field(() => nature_namesMinOrderByAggregateInput, {nullable:true})
    _min?: nature_namesMinOrderByAggregateInput;

    @Field(() => nature_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: nature_namesSumOrderByAggregateInput;
}
