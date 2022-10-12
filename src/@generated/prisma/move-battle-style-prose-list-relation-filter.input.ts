import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseWhereInput } from '../move-battle-style-prose/move-battle-style-prose-where.input';

@InputType()
export class Move_battle_style_proseListRelationFilter {

    @Field(() => move_battle_style_proseWhereInput, {nullable:true})
    every?: move_battle_style_proseWhereInput;

    @Field(() => move_battle_style_proseWhereInput, {nullable:true})
    some?: move_battle_style_proseWhereInput;

    @Field(() => move_battle_style_proseWhereInput, {nullable:true})
    none?: move_battle_style_proseWhereInput;
}
