import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutLocation_game_indicesInput } from './generations-create-without-location-game-indices.input';

@InputType()
export class generationsCreateOrConnectWithoutLocation_game_indicesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutLocation_game_indicesInput, {nullable:false})
    @Type(() => generationsCreateWithoutLocation_game_indicesInput)
    create!: generationsCreateWithoutLocation_game_indicesInput;
}
