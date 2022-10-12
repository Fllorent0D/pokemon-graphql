import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { item_game_indicesUpdateWithoutGenerationsInput } from './item-game-indices-update-without-generations.input';
import { item_game_indicesCreateWithoutGenerationsInput } from './item-game-indices-create-without-generations.input';

@InputType()
export class item_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput {

    @Field(() => item_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => item_game_indicesWhereUniqueInput)
    where!: item_game_indicesWhereUniqueInput;

    @Field(() => item_game_indicesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => item_game_indicesUpdateWithoutGenerationsInput)
    update!: item_game_indicesUpdateWithoutGenerationsInput;

    @Field(() => item_game_indicesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => item_game_indicesCreateWithoutGenerationsInput)
    create!: item_game_indicesCreateWithoutGenerationsInput;
}
