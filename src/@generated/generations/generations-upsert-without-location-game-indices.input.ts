import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutLocation_game_indicesInput } from './generations-update-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutLocation_game_indicesInput } from './generations-create-without-location-game-indices.input';

@InputType()
export class generationsUpsertWithoutLocation_game_indicesInput {

    @Field(() => generationsUpdateWithoutLocation_game_indicesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutLocation_game_indicesInput)
    update!: generationsUpdateWithoutLocation_game_indicesInput;

    @Field(() => generationsCreateWithoutLocation_game_indicesInput, {nullable:false})
    @Type(() => generationsCreateWithoutLocation_game_indicesInput)
    create!: generationsCreateWithoutLocation_game_indicesInput;
}
