import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_battle_style_proseOrderByRelationAggregateInput } from '../move-battle-style-prose/move-battle-style-prose-order-by-relation-aggregate.input';
import { nature_battle_style_preferencesOrderByRelationAggregateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-order-by-relation-aggregate.input';

@InputType()
export class move_battle_stylesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_battle_style_proseOrderByRelationAggregateInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseOrderByRelationAggregateInput;

    @Field(() => nature_battle_style_preferencesOrderByRelationAggregateInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesOrderByRelationAggregateInput;
}
