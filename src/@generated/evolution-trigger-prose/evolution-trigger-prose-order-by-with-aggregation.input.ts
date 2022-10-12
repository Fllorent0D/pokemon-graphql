import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { evolution_trigger_proseCountOrderByAggregateInput } from './evolution-trigger-prose-count-order-by-aggregate.input';
import { evolution_trigger_proseAvgOrderByAggregateInput } from './evolution-trigger-prose-avg-order-by-aggregate.input';
import { evolution_trigger_proseMaxOrderByAggregateInput } from './evolution-trigger-prose-max-order-by-aggregate.input';
import { evolution_trigger_proseMinOrderByAggregateInput } from './evolution-trigger-prose-min-order-by-aggregate.input';
import { evolution_trigger_proseSumOrderByAggregateInput } from './evolution-trigger-prose-sum-order-by-aggregate.input';

@InputType()
export class evolution_trigger_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => evolution_trigger_proseCountOrderByAggregateInput, {nullable:true})
    _count?: evolution_trigger_proseCountOrderByAggregateInput;

    @Field(() => evolution_trigger_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: evolution_trigger_proseAvgOrderByAggregateInput;

    @Field(() => evolution_trigger_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: evolution_trigger_proseMaxOrderByAggregateInput;

    @Field(() => evolution_trigger_proseMinOrderByAggregateInput, {nullable:true})
    _min?: evolution_trigger_proseMinOrderByAggregateInput;

    @Field(() => evolution_trigger_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: evolution_trigger_proseSumOrderByAggregateInput;
}
