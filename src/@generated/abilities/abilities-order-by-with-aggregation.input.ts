import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { abilitiesCountOrderByAggregateInput } from './abilities-count-order-by-aggregate.input';
import { abilitiesAvgOrderByAggregateInput } from './abilities-avg-order-by-aggregate.input';
import { abilitiesMaxOrderByAggregateInput } from './abilities-max-order-by-aggregate.input';
import { abilitiesMinOrderByAggregateInput } from './abilities-min-order-by-aggregate.input';
import { abilitiesSumOrderByAggregateInput } from './abilities-sum-order-by-aggregate.input';

@InputType()
export class abilitiesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => abilitiesCountOrderByAggregateInput, {nullable:true})
    _count?: abilitiesCountOrderByAggregateInput;

    @Field(() => abilitiesAvgOrderByAggregateInput, {nullable:true})
    _avg?: abilitiesAvgOrderByAggregateInput;

    @Field(() => abilitiesMaxOrderByAggregateInput, {nullable:true})
    _max?: abilitiesMaxOrderByAggregateInput;

    @Field(() => abilitiesMinOrderByAggregateInput, {nullable:true})
    _min?: abilitiesMinOrderByAggregateInput;

    @Field(() => abilitiesSumOrderByAggregateInput, {nullable:true})
    _sum?: abilitiesSumOrderByAggregateInput;
}
