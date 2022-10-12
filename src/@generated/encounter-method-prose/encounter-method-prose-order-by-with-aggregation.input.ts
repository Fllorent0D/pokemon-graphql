import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_method_proseCountOrderByAggregateInput } from './encounter-method-prose-count-order-by-aggregate.input';
import { encounter_method_proseAvgOrderByAggregateInput } from './encounter-method-prose-avg-order-by-aggregate.input';
import { encounter_method_proseMaxOrderByAggregateInput } from './encounter-method-prose-max-order-by-aggregate.input';
import { encounter_method_proseMinOrderByAggregateInput } from './encounter-method-prose-min-order-by-aggregate.input';
import { encounter_method_proseSumOrderByAggregateInput } from './encounter-method-prose-sum-order-by-aggregate.input';

@InputType()
export class encounter_method_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => encounter_method_proseCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_method_proseCountOrderByAggregateInput;

    @Field(() => encounter_method_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_method_proseAvgOrderByAggregateInput;

    @Field(() => encounter_method_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_method_proseMaxOrderByAggregateInput;

    @Field(() => encounter_method_proseMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_method_proseMinOrderByAggregateInput;

    @Field(() => encounter_method_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_method_proseSumOrderByAggregateInput;
}
