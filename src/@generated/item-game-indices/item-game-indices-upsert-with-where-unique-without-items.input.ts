import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_game_indicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { item_game_indicesUpdateWithoutItemsInput } from './item-game-indices-update-without-items.input';
import { item_game_indicesCreateWithoutItemsInput } from './item-game-indices-create-without-items.input';

@InputType()
export class item_game_indicesUpsertWithWhereUniqueWithoutItemsInput {

    @Field(() => item_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => item_game_indicesWhereUniqueInput)
    where!: item_game_indicesWhereUniqueInput;

    @Field(() => item_game_indicesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_game_indicesUpdateWithoutItemsInput)
    update!: item_game_indicesUpdateWithoutItemsInput;

    @Field(() => item_game_indicesCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_game_indicesCreateWithoutItemsInput)
    create!: item_game_indicesCreateWithoutItemsInput;
}
