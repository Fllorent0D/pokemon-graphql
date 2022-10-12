import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { moves } from '../moves/moves.model';
import { items } from '../items/items.model';
import { version_groups } from '../version-groups/version-groups.model';

@ObjectType()
export class machines {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => moves, {nullable:false})
    moves?: moves;

    @Field(() => items, {nullable:false})
    items?: items;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;
}
