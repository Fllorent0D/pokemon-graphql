import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_pocket_namesCountOrderByAggregateInput } from './item-pocket-names-count-order-by-aggregate.input';
import { item_pocket_namesAvgOrderByAggregateInput } from './item-pocket-names-avg-order-by-aggregate.input';
import { item_pocket_namesMaxOrderByAggregateInput } from './item-pocket-names-max-order-by-aggregate.input';
import { item_pocket_namesMinOrderByAggregateInput } from './item-pocket-names-min-order-by-aggregate.input';
import { item_pocket_namesSumOrderByAggregateInput } from './item-pocket-names-sum-order-by-aggregate.input';

@InputType()
export class item_pocket_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_pocket_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => item_pocket_namesCountOrderByAggregateInput, {nullable:true})
    _count?: item_pocket_namesCountOrderByAggregateInput;

    @Field(() => item_pocket_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_pocket_namesAvgOrderByAggregateInput;

    @Field(() => item_pocket_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: item_pocket_namesMaxOrderByAggregateInput;

    @Field(() => item_pocket_namesMinOrderByAggregateInput, {nullable:true})
    _min?: item_pocket_namesMinOrderByAggregateInput;

    @Field(() => item_pocket_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: item_pocket_namesSumOrderByAggregateInput;
}
