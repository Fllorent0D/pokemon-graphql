import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { language_namesCountOrderByAggregateInput } from './language-names-count-order-by-aggregate.input';
import { language_namesAvgOrderByAggregateInput } from './language-names-avg-order-by-aggregate.input';
import { language_namesMaxOrderByAggregateInput } from './language-names-max-order-by-aggregate.input';
import { language_namesMinOrderByAggregateInput } from './language-names-min-order-by-aggregate.input';
import { language_namesSumOrderByAggregateInput } from './language-names-sum-order-by-aggregate.input';

@InputType()
export class language_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => language_namesCountOrderByAggregateInput, {nullable:true})
    _count?: language_namesCountOrderByAggregateInput;

    @Field(() => language_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: language_namesAvgOrderByAggregateInput;

    @Field(() => language_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: language_namesMaxOrderByAggregateInput;

    @Field(() => language_namesMinOrderByAggregateInput, {nullable:true})
    _min?: language_namesMinOrderByAggregateInput;

    @Field(() => language_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: language_namesSumOrderByAggregateInput;
}
