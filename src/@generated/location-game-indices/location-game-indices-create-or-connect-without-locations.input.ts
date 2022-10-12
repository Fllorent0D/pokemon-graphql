import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { location_game_indicesCreateWithoutLocationsInput } from './location-game-indices-create-without-locations.input';

@InputType()
export class location_game_indicesCreateOrConnectWithoutLocationsInput {

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => location_game_indicesWhereUniqueInput)
    where!: location_game_indicesWhereUniqueInput;

    @Field(() => location_game_indicesCreateWithoutLocationsInput, {nullable:false})
    @Type(() => location_game_indicesCreateWithoutLocationsInput)
    create!: location_game_indicesCreateWithoutLocationsInput;
}
