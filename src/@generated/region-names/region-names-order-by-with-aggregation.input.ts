import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { region_namesCountOrderByAggregateInput } from './region-names-count-order-by-aggregate.input';
import { region_namesAvgOrderByAggregateInput } from './region-names-avg-order-by-aggregate.input';
import { region_namesMaxOrderByAggregateInput } from './region-names-max-order-by-aggregate.input';
import { region_namesMinOrderByAggregateInput } from './region-names-min-order-by-aggregate.input';
import { region_namesSumOrderByAggregateInput } from './region-names-sum-order-by-aggregate.input';

@InputType()
export class region_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => region_namesCountOrderByAggregateInput, {nullable:true})
    _count?: region_namesCountOrderByAggregateInput;

    @Field(() => region_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: region_namesAvgOrderByAggregateInput;

    @Field(() => region_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: region_namesMaxOrderByAggregateInput;

    @Field(() => region_namesMinOrderByAggregateInput, {nullable:true})
    _min?: region_namesMinOrderByAggregateInput;

    @Field(() => region_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: region_namesSumOrderByAggregateInput;
}
