import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_game_indicesUpdateManyMutationInput } from '../item-game-indices/item-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_game_indicesWhereInput } from '../item-game-indices/item-game-indices-where.input';

@ArgsType()
export class UpdateManyitemGameIndicesArgs {

    @Field(() => item_game_indicesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_game_indicesUpdateManyMutationInput)
    data!: item_game_indicesUpdateManyMutationInput;

    @Field(() => item_game_indicesWhereInput, {nullable:true})
    @Type(() => item_game_indicesWhereInput)
    where?: item_game_indicesWhereInput;
}
