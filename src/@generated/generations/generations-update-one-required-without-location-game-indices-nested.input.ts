import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutLocation_game_indicesInput } from './generations-create-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutLocation_game_indicesInput } from './generations-create-or-connect-without-location-game-indices.input';
import { generationsUpsertWithoutLocation_game_indicesInput } from './generations-upsert-without-location-game-indices.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutLocation_game_indicesInput } from './generations-update-without-location-game-indices.input';

@InputType()
export class generationsUpdateOneRequiredWithoutLocation_game_indicesNestedInput {

    @Field(() => generationsCreateWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateWithoutLocation_game_indicesInput)
    create?: generationsCreateWithoutLocation_game_indicesInput;

    @Field(() => generationsCreateOrConnectWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutLocation_game_indicesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutLocation_game_indicesInput;

    @Field(() => generationsUpsertWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutLocation_game_indicesInput)
    upsert?: generationsUpsertWithoutLocation_game_indicesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutLocation_game_indicesInput)
    update?: generationsUpdateWithoutLocation_game_indicesInput;
}
