import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { nature_battle_style_preferencesCountOrderByAggregateInput } from './nature-battle-style-preferences-count-order-by-aggregate.input';
import { nature_battle_style_preferencesAvgOrderByAggregateInput } from './nature-battle-style-preferences-avg-order-by-aggregate.input';
import { nature_battle_style_preferencesMaxOrderByAggregateInput } from './nature-battle-style-preferences-max-order-by-aggregate.input';
import { nature_battle_style_preferencesMinOrderByAggregateInput } from './nature-battle-style-preferences-min-order-by-aggregate.input';
import { nature_battle_style_preferencesSumOrderByAggregateInput } from './nature-battle-style-preferences-sum-order-by-aggregate.input';

@InputType()
export class nature_battle_style_preferencesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    low_hp_preference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    high_hp_preference?: keyof typeof SortOrder;

    @Field(() => nature_battle_style_preferencesCountOrderByAggregateInput, {nullable:true})
    _count?: nature_battle_style_preferencesCountOrderByAggregateInput;

    @Field(() => nature_battle_style_preferencesAvgOrderByAggregateInput, {nullable:true})
    _avg?: nature_battle_style_preferencesAvgOrderByAggregateInput;

    @Field(() => nature_battle_style_preferencesMaxOrderByAggregateInput, {nullable:true})
    _max?: nature_battle_style_preferencesMaxOrderByAggregateInput;

    @Field(() => nature_battle_style_preferencesMinOrderByAggregateInput, {nullable:true})
    _min?: nature_battle_style_preferencesMinOrderByAggregateInput;

    @Field(() => nature_battle_style_preferencesSumOrderByAggregateInput, {nullable:true})
    _sum?: nature_battle_style_preferencesSumOrderByAggregateInput;
}
