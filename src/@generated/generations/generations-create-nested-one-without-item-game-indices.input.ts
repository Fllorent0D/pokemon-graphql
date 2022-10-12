import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutItem_game_indicesInput } from './generations-create-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutItem_game_indicesInput } from './generations-create-or-connect-without-item-game-indices.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutItem_game_indicesInput {

    @Field(() => generationsCreateWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateWithoutItem_game_indicesInput)
    create?: generationsCreateWithoutItem_game_indicesInput;

    @Field(() => generationsCreateOrConnectWithoutItem_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutItem_game_indicesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutItem_game_indicesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}
