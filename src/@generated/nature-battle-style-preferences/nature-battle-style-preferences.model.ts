import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_battle_styles } from '../move-battle-styles/move-battle-styles.model';
import { natures } from '../natures/natures.model';

@ObjectType()
export class nature_battle_style_preferences {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => move_battle_styles, {nullable:false})
    move_battle_styles?: move_battle_styles;

    @Field(() => natures, {nullable:false})
    natures?: natures;
}
