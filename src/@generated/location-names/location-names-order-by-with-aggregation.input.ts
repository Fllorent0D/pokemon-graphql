import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { location_namesCountOrderByAggregateInput } from './location-names-count-order-by-aggregate.input';
import { location_namesAvgOrderByAggregateInput } from './location-names-avg-order-by-aggregate.input';
import { location_namesMaxOrderByAggregateInput } from './location-names-max-order-by-aggregate.input';
import { location_namesMinOrderByAggregateInput } from './location-names-min-order-by-aggregate.input';
import { location_namesSumOrderByAggregateInput } from './location-names-sum-order-by-aggregate.input';

@InputType()
export class location_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    location_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => location_namesCountOrderByAggregateInput, {nullable:true})
    _count?: location_namesCountOrderByAggregateInput;

    @Field(() => location_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: location_namesAvgOrderByAggregateInput;

    @Field(() => location_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: location_namesMaxOrderByAggregateInput;

    @Field(() => location_namesMinOrderByAggregateInput, {nullable:true})
    _min?: location_namesMinOrderByAggregateInput;

    @Field(() => location_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: location_namesSumOrderByAggregateInput;
}
