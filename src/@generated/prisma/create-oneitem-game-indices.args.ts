import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesCreateInput } from '../item-game-indices/item-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemGameIndicesArgs {

    @Field(() => item_game_indicesCreateInput, {nullable:false})
    @Type(() => item_game_indicesCreateInput)
    data!: item_game_indicesCreateInput;
}
