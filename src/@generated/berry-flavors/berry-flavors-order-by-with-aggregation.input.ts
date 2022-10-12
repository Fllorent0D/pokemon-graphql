import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { berry_flavorsCountOrderByAggregateInput } from './berry-flavors-count-order-by-aggregate.input';
import { berry_flavorsAvgOrderByAggregateInput } from './berry-flavors-avg-order-by-aggregate.input';
import { berry_flavorsMaxOrderByAggregateInput } from './berry-flavors-max-order-by-aggregate.input';
import { berry_flavorsMinOrderByAggregateInput } from './berry-flavors-min-order-by-aggregate.input';
import { berry_flavorsSumOrderByAggregateInput } from './berry-flavors-sum-order-by-aggregate.input';

@InputType()
export class berry_flavorsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    berry_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor?: keyof typeof SortOrder;

    @Field(() => berry_flavorsCountOrderByAggregateInput, {nullable:true})
    _count?: berry_flavorsCountOrderByAggregateInput;

    @Field(() => berry_flavorsAvgOrderByAggregateInput, {nullable:true})
    _avg?: berry_flavorsAvgOrderByAggregateInput;

    @Field(() => berry_flavorsMaxOrderByAggregateInput, {nullable:true})
    _max?: berry_flavorsMaxOrderByAggregateInput;

    @Field(() => berry_flavorsMinOrderByAggregateInput, {nullable:true})
    _min?: berry_flavorsMinOrderByAggregateInput;

    @Field(() => berry_flavorsSumOrderByAggregateInput, {nullable:true})
    _sum?: berry_flavorsSumOrderByAggregateInput;
}
