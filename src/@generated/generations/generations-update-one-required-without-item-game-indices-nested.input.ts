import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutItem_game_indicesInput } from './generations-create-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutItem_game_indicesInput } from './generations-create-or-connect-without-item-game-indices.input';
import { generationsUpsertWithoutItem_game_indicesInput } from './generations-upsert-without-item-game-indices.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutItem_game_indicesInput } from './generations-update-without-item-game-indices.input';

@InputType()
export class generationsUpdateOneRequiredWithoutItem_game_indicesNestedInput {

    @Field(() => generationsCreateWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateWithoutItem_game_indicesInput)
    create?: generationsCreateWithoutItem_game_indicesInput;

    @Field(() => generationsCreateOrConnectWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutItem_game_indicesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutItem_game_indicesInput;

    @Field(() => generationsUpsertWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutItem_game_indicesInput)
    upsert?: generationsUpsertWithoutItem_game_indicesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutItem_game_indicesInput)
    update?: generationsUpdateWithoutItem_game_indicesInput;
}
