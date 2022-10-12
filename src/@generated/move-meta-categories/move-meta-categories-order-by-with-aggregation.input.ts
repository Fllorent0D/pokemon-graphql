import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_meta_categoriesCountOrderByAggregateInput } from './move-meta-categories-count-order-by-aggregate.input';
import { move_meta_categoriesAvgOrderByAggregateInput } from './move-meta-categories-avg-order-by-aggregate.input';
import { move_meta_categoriesMaxOrderByAggregateInput } from './move-meta-categories-max-order-by-aggregate.input';
import { move_meta_categoriesMinOrderByAggregateInput } from './move-meta-categories-min-order-by-aggregate.input';
import { move_meta_categoriesSumOrderByAggregateInput } from './move-meta-categories-sum-order-by-aggregate.input';

@InputType()
export class move_meta_categoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_meta_categoriesCountOrderByAggregateInput, {nullable:true})
    _count?: move_meta_categoriesCountOrderByAggregateInput;

    @Field(() => move_meta_categoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_meta_categoriesAvgOrderByAggregateInput;

    @Field(() => move_meta_categoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: move_meta_categoriesMaxOrderByAggregateInput;

    @Field(() => move_meta_categoriesMinOrderByAggregateInput, {nullable:true})
    _min?: move_meta_categoriesMinOrderByAggregateInput;

    @Field(() => move_meta_categoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: move_meta_categoriesSumOrderByAggregateInput;
}
