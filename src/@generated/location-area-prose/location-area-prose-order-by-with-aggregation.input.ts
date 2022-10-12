import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { location_area_proseCountOrderByAggregateInput } from './location-area-prose-count-order-by-aggregate.input';
import { location_area_proseAvgOrderByAggregateInput } from './location-area-prose-avg-order-by-aggregate.input';
import { location_area_proseMaxOrderByAggregateInput } from './location-area-prose-max-order-by-aggregate.input';
import { location_area_proseMinOrderByAggregateInput } from './location-area-prose-min-order-by-aggregate.input';
import { location_area_proseSumOrderByAggregateInput } from './location-area-prose-sum-order-by-aggregate.input';

@InputType()
export class location_area_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => location_area_proseCountOrderByAggregateInput, {nullable:true})
    _count?: location_area_proseCountOrderByAggregateInput;

    @Field(() => location_area_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: location_area_proseAvgOrderByAggregateInput;

    @Field(() => location_area_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: location_area_proseMaxOrderByAggregateInput;

    @Field(() => location_area_proseMinOrderByAggregateInput, {nullable:true})
    _min?: location_area_proseMinOrderByAggregateInput;

    @Field(() => location_area_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: location_area_proseSumOrderByAggregateInput;
}
