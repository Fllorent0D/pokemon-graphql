import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_effect_proseCountOrderByAggregateInput } from './move-effect-prose-count-order-by-aggregate.input';
import { move_effect_proseAvgOrderByAggregateInput } from './move-effect-prose-avg-order-by-aggregate.input';
import { move_effect_proseMaxOrderByAggregateInput } from './move-effect-prose-max-order-by-aggregate.input';
import { move_effect_proseMinOrderByAggregateInput } from './move-effect-prose-min-order-by-aggregate.input';
import { move_effect_proseSumOrderByAggregateInput } from './move-effect-prose-sum-order-by-aggregate.input';

@InputType()
export class move_effect_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    short_effect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => move_effect_proseCountOrderByAggregateInput, {nullable:true})
    _count?: move_effect_proseCountOrderByAggregateInput;

    @Field(() => move_effect_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_effect_proseAvgOrderByAggregateInput;

    @Field(() => move_effect_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: move_effect_proseMaxOrderByAggregateInput;

    @Field(() => move_effect_proseMinOrderByAggregateInput, {nullable:true})
    _min?: move_effect_proseMinOrderByAggregateInput;

    @Field(() => move_effect_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: move_effect_proseSumOrderByAggregateInput;
}
