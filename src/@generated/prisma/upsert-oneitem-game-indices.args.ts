import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesWhereUniqueInput } from '../item-game-indices/item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { item_game_indicesCreateInput } from '../item-game-indices/item-game-indices-create.input';
import { item_game_indicesUpdateInput } from '../item-game-indices/item-game-indices-update.input';

@ArgsType()
export class UpsertOneitemGameIndicesArgs {

    @Field(() => item_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => item_game_indicesWhereUniqueInput)
    where!: item_game_indicesWhereUniqueInput;

    @Field(() => item_game_indicesCreateInput, {nullable:false})
    @Type(() => item_game_indicesCreateInput)
    create!: item_game_indicesCreateInput;

    @Field(() => item_game_indicesUpdateInput, {nullable:false})
    @Type(() => item_game_indicesUpdateInput)
    update!: item_game_indicesUpdateInput;
}
