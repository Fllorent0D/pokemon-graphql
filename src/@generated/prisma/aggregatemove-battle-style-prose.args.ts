import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseWhereInput } from '../move-battle-style-prose/move-battle-style-prose-where.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseOrderByWithRelationInput } from '../move-battle-style-prose/move-battle-style-prose-order-by-with-relation.input';
import { move_battle_style_proseWhereUniqueInput } from '../move-battle-style-prose/move-battle-style-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseWhereInput, {nullable:true})
    @Type(() => move_battle_style_proseWhereInput)
    where?: move_battle_style_proseWhereInput;

    @Field(() => [move_battle_style_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_battle_style_proseOrderByWithRelationInput>;

    @Field(() => move_battle_style_proseWhereUniqueInput, {nullable:true})
    cursor?: move_battle_style_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
