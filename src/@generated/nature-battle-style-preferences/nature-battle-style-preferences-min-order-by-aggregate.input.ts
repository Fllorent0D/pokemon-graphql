import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class nature_battle_style_preferencesMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    low_hp_preference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    high_hp_preference?: keyof typeof SortOrder;
}
