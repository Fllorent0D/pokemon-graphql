import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsUpdateWithoutLocation_game_indicesInput } from './locations-update-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutLocation_game_indicesInput } from './locations-create-without-location-game-indices.input';

@InputType()
export class locationsUpsertWithoutLocation_game_indicesInput {

    @Field(() => locationsUpdateWithoutLocation_game_indicesInput, {nullable:false})
    @Type(() => locationsUpdateWithoutLocation_game_indicesInput)
    update!: locationsUpdateWithoutLocation_game_indicesInput;

    @Field(() => locationsCreateWithoutLocation_game_indicesInput, {nullable:false})
    @Type(() => locationsCreateWithoutLocation_game_indicesInput)
    create!: locationsCreateWithoutLocation_game_indicesInput;
}
