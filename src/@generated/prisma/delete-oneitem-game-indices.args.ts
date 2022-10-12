import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesWhereUniqueInput } from '../item-game-indices/item-game-indices-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemGameIndicesArgs {

    @Field(() => item_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => item_game_indicesWhereUniqueInput)
    where!: item_game_indicesWhereUniqueInput;
}
