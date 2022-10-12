import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_flags } from '../item-flags/item-flags.model';
import { items } from '../items/items.model';

@ObjectType()
export class item_flag_map {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => item_flags, {nullable:false})
    item_flags?: item_flags;

    @Field(() => items, {nullable:false})
    items?: items;
}
