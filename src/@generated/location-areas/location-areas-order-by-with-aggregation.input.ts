import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { location_areasCountOrderByAggregateInput } from './location-areas-count-order-by-aggregate.input';
import { location_areasAvgOrderByAggregateInput } from './location-areas-avg-order-by-aggregate.input';
import { location_areasMaxOrderByAggregateInput } from './location-areas-max-order-by-aggregate.input';
import { location_areasMinOrderByAggregateInput } from './location-areas-min-order-by-aggregate.input';
import { location_areasSumOrderByAggregateInput } from './location-areas-sum-order-by-aggregate.input';

@InputType()
export class location_areasOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_index?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => location_areasCountOrderByAggregateInput, {nullable:true})
    _count?: location_areasCountOrderByAggregateInput;

    @Field(() => location_areasAvgOrderByAggregateInput, {nullable:true})
    _avg?: location_areasAvgOrderByAggregateInput;

    @Field(() => location_areasMaxOrderByAggregateInput, {nullable:true})
    _max?: location_areasMaxOrderByAggregateInput;

    @Field(() => location_areasMinOrderByAggregateInput, {nullable:true})
    _min?: location_areasMinOrderByAggregateInput;

    @Field(() => location_areasSumOrderByAggregateInput, {nullable:true})
    _sum?: location_areasSumOrderByAggregateInput;
}
