import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesWhereInput } from '../item-game-indices/item-game-indices-where.input';
import { Type } from 'class-transformer';
import { item_game_indicesOrderByWithRelationInput } from '../item-game-indices/item-game-indices-order-by-with-relation.input';
import { item_game_indicesWhereUniqueInput } from '../item-game-indices/item-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Item_game_indicesScalarFieldEnum } from './item-game-indices-scalar-field.enum';

@ArgsType()
export class FindFirstitemGameIndicesArgs {

    @Field(() => item_game_indicesWhereInput, {nullable:true})
    @Type(() => item_game_indicesWhereInput)
    where?: item_game_indicesWhereInput;

    @Field(() => [item_game_indicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_game_indicesOrderByWithRelationInput>;

    @Field(() => item_game_indicesWhereUniqueInput, {nullable:true})
    cursor?: item_game_indicesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Item_game_indicesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Item_game_indicesScalarFieldEnum>;
}
