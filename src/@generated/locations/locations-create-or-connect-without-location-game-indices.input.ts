import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutLocation_game_indicesInput } from './locations-create-without-location-game-indices.input';

@InputType()
export class locationsCreateOrConnectWithoutLocation_game_indicesInput {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsCreateWithoutLocation_game_indicesInput, {nullable:false})
    @Type(() => locationsCreateWithoutLocation_game_indicesInput)
    create!: locationsCreateWithoutLocation_game_indicesInput;
}
