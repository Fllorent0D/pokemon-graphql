import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_pocketsCountOrderByAggregateInput } from './item-pockets-count-order-by-aggregate.input';
import { item_pocketsAvgOrderByAggregateInput } from './item-pockets-avg-order-by-aggregate.input';
import { item_pocketsMaxOrderByAggregateInput } from './item-pockets-max-order-by-aggregate.input';
import { item_pocketsMinOrderByAggregateInput } from './item-pockets-min-order-by-aggregate.input';
import { item_pocketsSumOrderByAggregateInput } from './item-pockets-sum-order-by-aggregate.input';

@InputType()
export class item_pocketsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => item_pocketsCountOrderByAggregateInput, {nullable:true})
    _count?: item_pocketsCountOrderByAggregateInput;

    @Field(() => item_pocketsAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_pocketsAvgOrderByAggregateInput;

    @Field(() => item_pocketsMaxOrderByAggregateInput, {nullable:true})
    _max?: item_pocketsMaxOrderByAggregateInput;

    @Field(() => item_pocketsMinOrderByAggregateInput, {nullable:true})
    _min?: item_pocketsMinOrderByAggregateInput;

    @Field(() => item_pocketsSumOrderByAggregateInput, {nullable:true})
    _sum?: item_pocketsSumOrderByAggregateInput;
}
