import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutLocation_game_indicesInput } from './generations-create-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutLocation_game_indicesInput } from './generations-create-or-connect-without-location-game-indices.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutLocation_game_indicesInput {

    @Field(() => generationsCreateWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateWithoutLocation_game_indicesInput)
    create?: generationsCreateWithoutLocation_game_indicesInput;

    @Field(() => generationsCreateOrConnectWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutLocation_game_indicesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutLocation_game_indicesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}
