import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { location_game_indicesUpdateWithoutLocationsInput } from './location-game-indices-update-without-locations.input';

@InputType()
export class location_game_indicesUpdateWithWhereUniqueWithoutLocationsInput {

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => location_game_indicesWhereUniqueInput)
    where!: location_game_indicesWhereUniqueInput;

    @Field(() => location_game_indicesUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => location_game_indicesUpdateWithoutLocationsInput)
    data!: location_game_indicesUpdateWithoutLocationsInput;
}
