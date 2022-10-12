import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutItem_game_indicesInput } from './items-update-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_game_indicesInput } from './items-create-without-item-game-indices.input';

@InputType()
export class itemsUpsertWithoutItem_game_indicesInput {

    @Field(() => itemsUpdateWithoutItem_game_indicesInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_game_indicesInput)
    update!: itemsUpdateWithoutItem_game_indicesInput;

    @Field(() => itemsCreateWithoutItem_game_indicesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_game_indicesInput)
    create!: itemsCreateWithoutItem_game_indicesInput;
}
