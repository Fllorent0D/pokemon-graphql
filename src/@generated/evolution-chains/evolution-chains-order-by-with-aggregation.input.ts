import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { evolution_chainsCountOrderByAggregateInput } from './evolution-chains-count-order-by-aggregate.input';
import { evolution_chainsAvgOrderByAggregateInput } from './evolution-chains-avg-order-by-aggregate.input';
import { evolution_chainsMaxOrderByAggregateInput } from './evolution-chains-max-order-by-aggregate.input';
import { evolution_chainsMinOrderByAggregateInput } from './evolution-chains-min-order-by-aggregate.input';
import { evolution_chainsSumOrderByAggregateInput } from './evolution-chains-sum-order-by-aggregate.input';

@InputType()
export class evolution_chainsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    baby_trigger_item_id?: keyof typeof SortOrder;

    @Field(() => evolution_chainsCountOrderByAggregateInput, {nullable:true})
    _count?: evolution_chainsCountOrderByAggregateInput;

    @Field(() => evolution_chainsAvgOrderByAggregateInput, {nullable:true})
    _avg?: evolution_chainsAvgOrderByAggregateInput;

    @Field(() => evolution_chainsMaxOrderByAggregateInput, {nullable:true})
    _max?: evolution_chainsMaxOrderByAggregateInput;

    @Field(() => evolution_chainsMinOrderByAggregateInput, {nullable:true})
    _min?: evolution_chainsMinOrderByAggregateInput;

    @Field(() => evolution_chainsSumOrderByAggregateInput, {nullable:true})
    _sum?: evolution_chainsSumOrderByAggregateInput;
}
