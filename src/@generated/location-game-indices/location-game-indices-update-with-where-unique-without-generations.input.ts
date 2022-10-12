import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { location_game_indicesUpdateWithoutGenerationsInput } from './location-game-indices-update-without-generations.input';

@InputType()
export class location_game_indicesUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => location_game_indicesWhereUniqueInput)
    where!: location_game_indicesWhereUniqueInput;

    @Field(() => location_game_indicesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => location_game_indicesUpdateWithoutGenerationsInput)
    data!: location_game_indicesUpdateWithoutGenerationsInput;
}
