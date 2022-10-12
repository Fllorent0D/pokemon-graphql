import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { location_area_encounter_ratesCountOrderByAggregateInput } from './location-area-encounter-rates-count-order-by-aggregate.input';
import { location_area_encounter_ratesAvgOrderByAggregateInput } from './location-area-encounter-rates-avg-order-by-aggregate.input';
import { location_area_encounter_ratesMaxOrderByAggregateInput } from './location-area-encounter-rates-max-order-by-aggregate.input';
import { location_area_encounter_ratesMinOrderByAggregateInput } from './location-area-encounter-rates-min-order-by-aggregate.input';
import { location_area_encounter_ratesSumOrderByAggregateInput } from './location-area-encounter-rates-sum-order-by-aggregate.input';

@InputType()
export class location_area_encounter_ratesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;

    @Field(() => location_area_encounter_ratesCountOrderByAggregateInput, {nullable:true})
    _count?: location_area_encounter_ratesCountOrderByAggregateInput;

    @Field(() => location_area_encounter_ratesAvgOrderByAggregateInput, {nullable:true})
    _avg?: location_area_encounter_ratesAvgOrderByAggregateInput;

    @Field(() => location_area_encounter_ratesMaxOrderByAggregateInput, {nullable:true})
    _max?: location_area_encounter_ratesMaxOrderByAggregateInput;

    @Field(() => location_area_encounter_ratesMinOrderByAggregateInput, {nullable:true})
    _min?: location_area_encounter_ratesMinOrderByAggregateInput;

    @Field(() => location_area_encounter_ratesSumOrderByAggregateInput, {nullable:true})
    _sum?: location_area_encounter_ratesSumOrderByAggregateInput;
}
