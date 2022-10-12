import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { location_game_indicesUpdateWithoutGenerationsInput } from './location-game-indices-update-without-generations.input';
import { location_game_indicesCreateWithoutGenerationsInput } from './location-game-indices-create-without-generations.input';

@InputType()
export class location_game_indicesUpsertWithWhereUniqueWithoutGenerationsInput {

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => location_game_indicesWhereUniqueInput)
    where!: location_game_indicesWhereUniqueInput;

    @Field(() => location_game_indicesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => location_game_indicesUpdateWithoutGenerationsInput)
    update!: location_game_indicesUpdateWithoutGenerationsInput;

    @Field(() => location_game_indicesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => location_game_indicesCreateWithoutGenerationsInput)
    create!: location_game_indicesCreateWithoutGenerationsInput;
}
