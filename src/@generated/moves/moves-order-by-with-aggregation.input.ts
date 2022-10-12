import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { movesCountOrderByAggregateInput } from './moves-count-order-by-aggregate.input';
import { movesAvgOrderByAggregateInput } from './moves-avg-order-by-aggregate.input';
import { movesMaxOrderByAggregateInput } from './moves-max-order-by-aggregate.input';
import { movesMinOrderByAggregateInput } from './moves-min-order-by-aggregate.input';
import { movesSumOrderByAggregateInput } from './moves-sum-order-by-aggregate.input';

@InputType()
export class movesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contest_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    super_contest_effect_id?: keyof typeof SortOrder;

    @Field(() => movesCountOrderByAggregateInput, {nullable:true})
    _count?: movesCountOrderByAggregateInput;

    @Field(() => movesAvgOrderByAggregateInput, {nullable:true})
    _avg?: movesAvgOrderByAggregateInput;

    @Field(() => movesMaxOrderByAggregateInput, {nullable:true})
    _max?: movesMaxOrderByAggregateInput;

    @Field(() => movesMinOrderByAggregateInput, {nullable:true})
    _min?: movesMinOrderByAggregateInput;

    @Field(() => movesSumOrderByAggregateInput, {nullable:true})
    _sum?: movesSumOrderByAggregateInput;
}
