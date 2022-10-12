import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_combosCountOrderByAggregateInput } from './contest-combos-count-order-by-aggregate.input';
import { contest_combosAvgOrderByAggregateInput } from './contest-combos-avg-order-by-aggregate.input';
import { contest_combosMaxOrderByAggregateInput } from './contest-combos-max-order-by-aggregate.input';
import { contest_combosMinOrderByAggregateInput } from './contest-combos-min-order-by-aggregate.input';
import { contest_combosSumOrderByAggregateInput } from './contest-combos-sum-order-by-aggregate.input';

@InputType()
export class contest_combosOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: keyof typeof SortOrder;

    @Field(() => contest_combosCountOrderByAggregateInput, {nullable:true})
    _count?: contest_combosCountOrderByAggregateInput;

    @Field(() => contest_combosAvgOrderByAggregateInput, {nullable:true})
    _avg?: contest_combosAvgOrderByAggregateInput;

    @Field(() => contest_combosMaxOrderByAggregateInput, {nullable:true})
    _max?: contest_combosMaxOrderByAggregateInput;

    @Field(() => contest_combosMinOrderByAggregateInput, {nullable:true})
    _min?: contest_combosMinOrderByAggregateInput;

    @Field(() => contest_combosSumOrderByAggregateInput, {nullable:true})
    _sum?: contest_combosSumOrderByAggregateInput;
}
