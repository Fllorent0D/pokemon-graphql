import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_battle_style_proseCountOrderByAggregateInput } from './move-battle-style-prose-count-order-by-aggregate.input';
import { move_battle_style_proseAvgOrderByAggregateInput } from './move-battle-style-prose-avg-order-by-aggregate.input';
import { move_battle_style_proseMaxOrderByAggregateInput } from './move-battle-style-prose-max-order-by-aggregate.input';
import { move_battle_style_proseMinOrderByAggregateInput } from './move-battle-style-prose-min-order-by-aggregate.input';
import { move_battle_style_proseSumOrderByAggregateInput } from './move-battle-style-prose-sum-order-by-aggregate.input';

@InputType()
export class move_battle_style_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => move_battle_style_proseCountOrderByAggregateInput, {nullable:true})
    _count?: move_battle_style_proseCountOrderByAggregateInput;

    @Field(() => move_battle_style_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_battle_style_proseAvgOrderByAggregateInput;

    @Field(() => move_battle_style_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: move_battle_style_proseMaxOrderByAggregateInput;

    @Field(() => move_battle_style_proseMinOrderByAggregateInput, {nullable:true})
    _min?: move_battle_style_proseMinOrderByAggregateInput;

    @Field(() => move_battle_style_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: move_battle_style_proseSumOrderByAggregateInput;
}
