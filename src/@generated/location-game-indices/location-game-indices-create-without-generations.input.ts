import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { locationsCreateNestedOneWithoutLocation_game_indicesInput } from '../locations/locations-create-nested-one-without-location-game-indices.input';

@InputType()
export class location_game_indicesCreateWithoutGenerationsInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => locationsCreateNestedOneWithoutLocation_game_indicesInput, {nullable:false})
    locations!: locationsCreateNestedOneWithoutLocation_game_indicesInput;
}
