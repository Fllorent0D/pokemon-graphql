import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsCreateNestedOneWithoutLocation_game_indicesInput } from '../generations/generations-create-nested-one-without-location-game-indices.input';

@InputType()
export class location_game_indicesCreateWithoutLocationsInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => generationsCreateNestedOneWithoutLocation_game_indicesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutLocation_game_indicesInput;
}
