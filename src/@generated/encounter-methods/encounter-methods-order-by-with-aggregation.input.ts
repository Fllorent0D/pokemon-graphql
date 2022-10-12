import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_methodsCountOrderByAggregateInput } from './encounter-methods-count-order-by-aggregate.input';
import { encounter_methodsAvgOrderByAggregateInput } from './encounter-methods-avg-order-by-aggregate.input';
import { encounter_methodsMaxOrderByAggregateInput } from './encounter-methods-max-order-by-aggregate.input';
import { encounter_methodsMinOrderByAggregateInput } from './encounter-methods-min-order-by-aggregate.input';
import { encounter_methodsSumOrderByAggregateInput } from './encounter-methods-sum-order-by-aggregate.input';

@InputType()
export class encounter_methodsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => encounter_methodsCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_methodsCountOrderByAggregateInput;

    @Field(() => encounter_methodsAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_methodsAvgOrderByAggregateInput;

    @Field(() => encounter_methodsMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_methodsMaxOrderByAggregateInput;

    @Field(() => encounter_methodsMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_methodsMinOrderByAggregateInput;

    @Field(() => encounter_methodsSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_methodsSumOrderByAggregateInput;
}
