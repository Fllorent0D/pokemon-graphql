import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { evolution_triggersCountOrderByAggregateInput } from './evolution-triggers-count-order-by-aggregate.input';
import { evolution_triggersAvgOrderByAggregateInput } from './evolution-triggers-avg-order-by-aggregate.input';
import { evolution_triggersMaxOrderByAggregateInput } from './evolution-triggers-max-order-by-aggregate.input';
import { evolution_triggersMinOrderByAggregateInput } from './evolution-triggers-min-order-by-aggregate.input';
import { evolution_triggersSumOrderByAggregateInput } from './evolution-triggers-sum-order-by-aggregate.input';

@InputType()
export class evolution_triggersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => evolution_triggersCountOrderByAggregateInput, {nullable:true})
    _count?: evolution_triggersCountOrderByAggregateInput;

    @Field(() => evolution_triggersAvgOrderByAggregateInput, {nullable:true})
    _avg?: evolution_triggersAvgOrderByAggregateInput;

    @Field(() => evolution_triggersMaxOrderByAggregateInput, {nullable:true})
    _max?: evolution_triggersMaxOrderByAggregateInput;

    @Field(() => evolution_triggersMinOrderByAggregateInput, {nullable:true})
    _min?: evolution_triggersMinOrderByAggregateInput;

    @Field(() => evolution_triggersSumOrderByAggregateInput, {nullable:true})
    _sum?: evolution_triggersSumOrderByAggregateInput;
}
