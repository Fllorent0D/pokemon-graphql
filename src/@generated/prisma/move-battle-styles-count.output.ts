import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_battle_stylesCount {

    @Field(() => Int, {nullable:false})
    move_battle_style_prose!: number;

    @Field(() => Int, {nullable:false})
    nature_battle_style_preferences!: number;
}
