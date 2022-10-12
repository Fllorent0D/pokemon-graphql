import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { regionsCountOrderByAggregateInput } from './regions-count-order-by-aggregate.input';
import { regionsAvgOrderByAggregateInput } from './regions-avg-order-by-aggregate.input';
import { regionsMaxOrderByAggregateInput } from './regions-max-order-by-aggregate.input';
import { regionsMinOrderByAggregateInput } from './regions-min-order-by-aggregate.input';
import { regionsSumOrderByAggregateInput } from './regions-sum-order-by-aggregate.input';

@InputType()
export class regionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => regionsCountOrderByAggregateInput, {nullable:true})
    _count?: regionsCountOrderByAggregateInput;

    @Field(() => regionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: regionsAvgOrderByAggregateInput;

    @Field(() => regionsMaxOrderByAggregateInput, {nullable:true})
    _max?: regionsMaxOrderByAggregateInput;

    @Field(() => regionsMinOrderByAggregateInput, {nullable:true})
    _min?: regionsMinOrderByAggregateInput;

    @Field(() => regionsSumOrderByAggregateInput, {nullable:true})
    _sum?: regionsSumOrderByAggregateInput;
}
