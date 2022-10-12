import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesUpdateInput } from '../item-game-indices/item-game-indices-update.input';
import { Type } from 'class-transformer';
import { item_game_indicesWhereUniqueInput } from '../item-game-indices/item-game-indices-where-unique.input';

@ArgsType()
export class UpdateOneitemGameIndicesArgs {

    @Field(() => item_game_indicesUpdateInput, {nullable:false})
    @Type(() => item_game_indicesUpdateInput)
    data!: item_game_indicesUpdateInput;

    @Field(() => item_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => item_game_indicesWhereUniqueInput)
    where!: item_game_indicesWhereUniqueInput;
}
