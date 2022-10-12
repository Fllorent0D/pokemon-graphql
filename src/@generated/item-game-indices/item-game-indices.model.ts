import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generations } from '../generations/generations.model';
import { items } from '../items/items.model';

@ObjectType()
export class item_game_indices {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => generations, {nullable:false})
    generations?: generations;

    @Field(() => items, {nullable:false})
    items?: items;
}
