import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutItem_game_indicesInput } from './generations-create-without-item-game-indices.input';

@InputType()
export class generationsCreateOrConnectWithoutItem_game_indicesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutItem_game_indicesInput, {nullable:false})
    @Type(() => generationsCreateWithoutItem_game_indicesInput)
    create!: generationsCreateWithoutItem_game_indicesInput;
}
