import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesWhereInput } from '../item-game-indices/item-game-indices-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemGameIndicesArgs {

    @Field(() => item_game_indicesWhereInput, {nullable:true})
    @Type(() => item_game_indicesWhereInput)
    where?: item_game_indicesWhereInput;
}
