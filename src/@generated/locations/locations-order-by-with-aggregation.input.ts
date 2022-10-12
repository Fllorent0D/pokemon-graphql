import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { locationsCountOrderByAggregateInput } from './locations-count-order-by-aggregate.input';
import { locationsAvgOrderByAggregateInput } from './locations-avg-order-by-aggregate.input';
import { locationsMaxOrderByAggregateInput } from './locations-max-order-by-aggregate.input';
import { locationsMinOrderByAggregateInput } from './locations-min-order-by-aggregate.input';
import { locationsSumOrderByAggregateInput } from './locations-sum-order-by-aggregate.input';

@InputType()
export class locationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => locationsCountOrderByAggregateInput, {nullable:true})
    _count?: locationsCountOrderByAggregateInput;

    @Field(() => locationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: locationsAvgOrderByAggregateInput;

    @Field(() => locationsMaxOrderByAggregateInput, {nullable:true})
    _max?: locationsMaxOrderByAggregateInput;

    @Field(() => locationsMinOrderByAggregateInput, {nullable:true})
    _min?: locationsMinOrderByAggregateInput;

    @Field(() => locationsSumOrderByAggregateInput, {nullable:true})
    _sum?: locationsSumOrderByAggregateInput;
}
