import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesWhereInput } from '../move-battle-styles/move-battle-styles-where.input';

@InputType()
export class Move_battle_stylesRelationFilter {

    @Field(() => move_battle_stylesWhereInput, {nullable:true})
    is?: move_battle_stylesWhereInput;

    @Field(() => move_battle_stylesWhereInput, {nullable:true})
    isNot?: move_battle_stylesWhereInput;
}
