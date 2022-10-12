import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Move_battle_style_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    move_battle_style_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
