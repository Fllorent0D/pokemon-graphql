import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_categoriesCountOrderByAggregateInput } from './item-categories-count-order-by-aggregate.input';
import { item_categoriesAvgOrderByAggregateInput } from './item-categories-avg-order-by-aggregate.input';
import { item_categoriesMaxOrderByAggregateInput } from './item-categories-max-order-by-aggregate.input';
import { item_categoriesMinOrderByAggregateInput } from './item-categories-min-order-by-aggregate.input';
import { item_categoriesSumOrderByAggregateInput } from './item-categories-sum-order-by-aggregate.input';

@InputType()
export class item_categoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pocket_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => item_categoriesCountOrderByAggregateInput, {nullable:true})
    _count?: item_categoriesCountOrderByAggregateInput;

    @Field(() => item_categoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_categoriesAvgOrderByAggregateInput;

    @Field(() => item_categoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: item_categoriesMaxOrderByAggregateInput;

    @Field(() => item_categoriesMinOrderByAggregateInput, {nullable:true})
    _min?: item_categoriesMinOrderByAggregateInput;

    @Field(() => item_categoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: item_categoriesSumOrderByAggregateInput;
}
