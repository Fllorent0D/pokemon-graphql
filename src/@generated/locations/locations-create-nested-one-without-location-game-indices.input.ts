import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutLocation_game_indicesInput } from './locations-create-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutLocation_game_indicesInput } from './locations-create-or-connect-without-location-game-indices.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class locationsCreateNestedOneWithoutLocation_game_indicesInput {

    @Field(() => locationsCreateWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => locationsCreateWithoutLocation_game_indicesInput)
    create?: locationsCreateWithoutLocation_game_indicesInput;

    @Field(() => locationsCreateOrConnectWithoutLocation_game_indicesInput, {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutLocation_game_indicesInput)
    connectOrCreate?: locationsCreateOrConnectWithoutLocation_game_indicesInput;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: locationsWhereUniqueInput;
}
