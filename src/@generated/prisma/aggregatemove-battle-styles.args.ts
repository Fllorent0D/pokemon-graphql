import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesWhereInput } from '../move-battle-styles/move-battle-styles-where.input';
import { Type } from 'class-transformer';
import { move_battle_stylesOrderByWithRelationInput } from '../move-battle-styles/move-battle-styles-order-by-with-relation.input';
import { move_battle_stylesWhereUniqueInput } from '../move-battle-styles/move-battle-styles-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveBattleStylesArgs {

    @Field(() => move_battle_stylesWhereInput, {nullable:true})
    @Type(() => move_battle_stylesWhereInput)
    where?: move_battle_stylesWhereInput;

    @Field(() => [move_battle_stylesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_battle_stylesOrderByWithRelationInput>;

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:true})
    cursor?: move_battle_stylesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
