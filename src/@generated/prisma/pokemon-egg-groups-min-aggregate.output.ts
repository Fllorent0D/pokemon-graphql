import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_egg_groupsMinAggregate {

    @Field(() => Int, {nullable:true})
    species_id?: number;

    @Field(() => Int, {nullable:true})
    egg_group_id?: number;
}
