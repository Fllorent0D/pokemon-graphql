import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { generationsCountOrderByAggregateInput } from './generations-count-order-by-aggregate.input';
import { generationsAvgOrderByAggregateInput } from './generations-avg-order-by-aggregate.input';
import { generationsMaxOrderByAggregateInput } from './generations-max-order-by-aggregate.input';
import { generationsMinOrderByAggregateInput } from './generations-min-order-by-aggregate.input';
import { generationsSumOrderByAggregateInput } from './generations-sum-order-by-aggregate.input';

@InputType()
export class generationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    main_region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canonical_pokedex_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => generationsCountOrderByAggregateInput, {nullable:true})
    _count?: generationsCountOrderByAggregateInput;

    @Field(() => generationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: generationsAvgOrderByAggregateInput;

    @Field(() => generationsMaxOrderByAggregateInput, {nullable:true})
    _max?: generationsMaxOrderByAggregateInput;

    @Field(() => generationsMinOrderByAggregateInput, {nullable:true})
    _min?: generationsMinOrderByAggregateInput;

    @Field(() => generationsSumOrderByAggregateInput, {nullable:true})
    _sum?: generationsSumOrderByAggregateInput;
}
