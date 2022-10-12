import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { statsCountOrderByAggregateInput } from './stats-count-order-by-aggregate.input';
import { statsAvgOrderByAggregateInput } from './stats-avg-order-by-aggregate.input';
import { statsMaxOrderByAggregateInput } from './stats-max-order-by-aggregate.input';
import { statsMinOrderByAggregateInput } from './stats-min-order-by-aggregate.input';
import { statsSumOrderByAggregateInput } from './stats-sum-order-by-aggregate.input';

@InputType()
export class statsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: keyof typeof SortOrder;

    @Field(() => statsCountOrderByAggregateInput, {nullable:true})
    _count?: statsCountOrderByAggregateInput;

    @Field(() => statsAvgOrderByAggregateInput, {nullable:true})
    _avg?: statsAvgOrderByAggregateInput;

    @Field(() => statsMaxOrderByAggregateInput, {nullable:true})
    _max?: statsMaxOrderByAggregateInput;

    @Field(() => statsMinOrderByAggregateInput, {nullable:true})
    _min?: statsMinOrderByAggregateInput;

    @Field(() => statsSumOrderByAggregateInput, {nullable:true})
    _sum?: statsSumOrderByAggregateInput;
}
