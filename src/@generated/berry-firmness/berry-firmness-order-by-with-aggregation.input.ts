import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { berry_firmnessCountOrderByAggregateInput } from './berry-firmness-count-order-by-aggregate.input';
import { berry_firmnessAvgOrderByAggregateInput } from './berry-firmness-avg-order-by-aggregate.input';
import { berry_firmnessMaxOrderByAggregateInput } from './berry-firmness-max-order-by-aggregate.input';
import { berry_firmnessMinOrderByAggregateInput } from './berry-firmness-min-order-by-aggregate.input';
import { berry_firmnessSumOrderByAggregateInput } from './berry-firmness-sum-order-by-aggregate.input';

@InputType()
export class berry_firmnessOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => berry_firmnessCountOrderByAggregateInput, {nullable:true})
    _count?: berry_firmnessCountOrderByAggregateInput;

    @Field(() => berry_firmnessAvgOrderByAggregateInput, {nullable:true})
    _avg?: berry_firmnessAvgOrderByAggregateInput;

    @Field(() => berry_firmnessMaxOrderByAggregateInput, {nullable:true})
    _max?: berry_firmnessMaxOrderByAggregateInput;

    @Field(() => berry_firmnessMinOrderByAggregateInput, {nullable:true})
    _min?: berry_firmnessMinOrderByAggregateInput;

    @Field(() => berry_firmnessSumOrderByAggregateInput, {nullable:true})
    _sum?: berry_firmnessSumOrderByAggregateInput;
}
