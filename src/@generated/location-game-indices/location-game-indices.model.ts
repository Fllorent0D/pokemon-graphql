import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generations } from '../generations/generations.model';
import { locations } from '../locations/locations.model';

@ObjectType()
export class location_game_indices {

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => generations, {nullable:false})
    generations?: generations;

    @Field(() => locations, {nullable:false})
    locations?: locations;
}
