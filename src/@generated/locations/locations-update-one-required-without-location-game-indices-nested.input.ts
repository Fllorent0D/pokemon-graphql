import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutLocation_game_indicesInput } from './locations-create-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutLocation_game_indicesInput } from './locations-create-or-connect-without-location-game-indices.input';
import { locationsUpsertWithoutLocation_game_indicesInput } from './locations-upsert-without-location-game-indices.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { locationsUpdateWithoutLocation_game_indicesInput } from './locations-update-without-location-game-indices.input';

@InputType()
export class locationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput {

    @Field(() => locationsCreateWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => locationsCreateWithoutLocation_game_indicesInput)
    create?: locationsCreateWithoutLocation_game_indicesInput;

    @Field(() => locationsCreateOrConnectWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutLocation_game_indicesInput)
    connectOrCreate?: locationsCreateOrConnectWithoutLocation_game_indicesInput;

    @Field(() => locationsUpsertWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => locationsUpsertWithoutLocation_game_indicesInput)
    upsert?: locationsUpsertWithoutLocation_game_indicesInput;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: locationsWhereUniqueInput;

    @Field(() => locationsUpdateWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => locationsUpdateWithoutLocation_game_indicesInput)
    update?: locationsUpdateWithoutLocation_game_indicesInput;
}
