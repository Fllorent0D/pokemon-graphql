import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { stat_hintsCountOrderByAggregateInput } from './stat-hints-count-order-by-aggregate.input';
import { stat_hintsAvgOrderByAggregateInput } from './stat-hints-avg-order-by-aggregate.input';
import { stat_hintsMaxOrderByAggregateInput } from './stat-hints-max-order-by-aggregate.input';
import { stat_hintsMinOrderByAggregateInput } from './stat-hints-min-order-by-aggregate.input';
import { stat_hintsSumOrderByAggregateInput } from './stat-hints-sum-order-by-aggregate.input';

@InputType()
export class stat_hintsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gene_mod_5?: keyof typeof SortOrder;

    @Field(() => stat_hintsCountOrderByAggregateInput, {nullable:true})
    _count?: stat_hintsCountOrderByAggregateInput;

    @Field(() => stat_hintsAvgOrderByAggregateInput, {nullable:true})
    _avg?: stat_hintsAvgOrderByAggregateInput;

    @Field(() => stat_hintsMaxOrderByAggregateInput, {nullable:true})
    _max?: stat_hintsMaxOrderByAggregateInput;

    @Field(() => stat_hintsMinOrderByAggregateInput, {nullable:true})
    _min?: stat_hintsMinOrderByAggregateInput;

    @Field(() => stat_hintsSumOrderByAggregateInput, {nullable:true})
    _sum?: stat_hintsSumOrderByAggregateInput;
}
