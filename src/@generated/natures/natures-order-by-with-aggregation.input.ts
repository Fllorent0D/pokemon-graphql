import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { naturesCountOrderByAggregateInput } from './natures-count-order-by-aggregate.input';
import { naturesAvgOrderByAggregateInput } from './natures-avg-order-by-aggregate.input';
import { naturesMaxOrderByAggregateInput } from './natures-max-order-by-aggregate.input';
import { naturesMinOrderByAggregateInput } from './natures-min-order-by-aggregate.input';
import { naturesSumOrderByAggregateInput } from './natures-sum-order-by-aggregate.input';

@InputType()
export class naturesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decreased_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    increased_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hates_flavor_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes_flavor_id?: keyof typeof SortOrder;

    @Field(() => naturesCountOrderByAggregateInput, {nullable:true})
    _count?: naturesCountOrderByAggregateInput;

    @Field(() => naturesAvgOrderByAggregateInput, {nullable:true})
    _avg?: naturesAvgOrderByAggregateInput;

    @Field(() => naturesMaxOrderByAggregateInput, {nullable:true})
    _max?: naturesMaxOrderByAggregateInput;

    @Field(() => naturesMinOrderByAggregateInput, {nullable:true})
    _min?: naturesMinOrderByAggregateInput;

    @Field(() => naturesSumOrderByAggregateInput, {nullable:true})
    _sum?: naturesSumOrderByAggregateInput;
}
