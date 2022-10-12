import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class location_game_indicesUncheckedCreateWithoutGenerationsInput {

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;
}
