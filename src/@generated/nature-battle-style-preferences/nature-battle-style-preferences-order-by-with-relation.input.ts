import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_battle_stylesOrderByWithRelationInput } from '../move-battle-styles/move-battle-styles-order-by-with-relation.input';
import { naturesOrderByWithRelationInput } from '../natures/natures-order-by-with-relation.input';

@InputType()
export class nature_battle_style_preferencesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    low_hp_preference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    high_hp_preference?: keyof typeof SortOrder;

    @Field(() => move_battle_stylesOrderByWithRelationInput, {nullable:true})
    move_battle_styles?: move_battle_stylesOrderByWithRelationInput;

    @Field(() => naturesOrderByWithRelationInput, {nullable:true})
    natures?: naturesOrderByWithRelationInput;
}
