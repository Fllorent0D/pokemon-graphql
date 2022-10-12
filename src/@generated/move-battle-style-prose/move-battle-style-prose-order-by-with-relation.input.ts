import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { move_battle_stylesOrderByWithRelationInput } from '../move-battle-styles/move-battle-styles-order-by-with-relation.input';

@InputType()
export class move_battle_style_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => move_battle_stylesOrderByWithRelationInput, {nullable:true})
    move_battle_styles?: move_battle_stylesOrderByWithRelationInput;
}
