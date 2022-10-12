import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_battle_stylesCountOrderByAggregateInput } from './move-battle-styles-count-order-by-aggregate.input';
import { move_battle_stylesAvgOrderByAggregateInput } from './move-battle-styles-avg-order-by-aggregate.input';
import { move_battle_stylesMaxOrderByAggregateInput } from './move-battle-styles-max-order-by-aggregate.input';
import { move_battle_stylesMinOrderByAggregateInput } from './move-battle-styles-min-order-by-aggregate.input';
import { move_battle_stylesSumOrderByAggregateInput } from './move-battle-styles-sum-order-by-aggregate.input';

@InputType()
export class move_battle_stylesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_battle_stylesCountOrderByAggregateInput, {nullable:true})
    _count?: move_battle_stylesCountOrderByAggregateInput;

    @Field(() => move_battle_stylesAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_battle_stylesAvgOrderByAggregateInput;

    @Field(() => move_battle_stylesMaxOrderByAggregateInput, {nullable:true})
    _max?: move_battle_stylesMaxOrderByAggregateInput;

    @Field(() => move_battle_stylesMinOrderByAggregateInput, {nullable:true})
    _min?: move_battle_stylesMinOrderByAggregateInput;

    @Field(() => move_battle_stylesSumOrderByAggregateInput, {nullable:true})
    _sum?: move_battle_stylesSumOrderByAggregateInput;
}
