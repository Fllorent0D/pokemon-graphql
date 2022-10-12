import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { super_contest_combosCountOrderByAggregateInput } from './super-contest-combos-count-order-by-aggregate.input';
import { super_contest_combosAvgOrderByAggregateInput } from './super-contest-combos-avg-order-by-aggregate.input';
import { super_contest_combosMaxOrderByAggregateInput } from './super-contest-combos-max-order-by-aggregate.input';
import { super_contest_combosMinOrderByAggregateInput } from './super-contest-combos-min-order-by-aggregate.input';
import { super_contest_combosSumOrderByAggregateInput } from './super-contest-combos-sum-order-by-aggregate.input';

@InputType()
export class super_contest_combosOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: keyof typeof SortOrder;

    @Field(() => super_contest_combosCountOrderByAggregateInput, {nullable:true})
    _count?: super_contest_combosCountOrderByAggregateInput;

    @Field(() => super_contest_combosAvgOrderByAggregateInput, {nullable:true})
    _avg?: super_contest_combosAvgOrderByAggregateInput;

    @Field(() => super_contest_combosMaxOrderByAggregateInput, {nullable:true})
    _max?: super_contest_combosMaxOrderByAggregateInput;

    @Field(() => super_contest_combosMinOrderByAggregateInput, {nullable:true})
    _min?: super_contest_combosMinOrderByAggregateInput;

    @Field(() => super_contest_combosSumOrderByAggregateInput, {nullable:true})
    _sum?: super_contest_combosSumOrderByAggregateInput;
}
