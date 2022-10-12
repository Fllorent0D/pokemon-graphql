import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Egg_groupsCount {

    @Field(() => Int, {nullable:false})
    egg_group_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_egg_groups!: number;
}
