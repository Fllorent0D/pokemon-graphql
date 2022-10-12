import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutItem_game_indicesInput } from './generations-update-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutItem_game_indicesInput } from './generations-create-without-item-game-indices.input';

@InputType()
export class generationsUpsertWithoutItem_game_indicesInput {

    @Field(() => generationsUpdateWithoutItem_game_indicesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutItem_game_indicesInput)
    update!: generationsUpdateWithoutItem_game_indicesInput;

    @Field(() => generationsCreateWithoutItem_game_indicesInput, {nullable:false})
    @Type(() => generationsCreateWithoutItem_game_indicesInput)
    create!: generationsCreateWithoutItem_game_indicesInput;
}
