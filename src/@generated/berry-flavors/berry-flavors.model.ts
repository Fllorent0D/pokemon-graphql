import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { contest_types } from '../contest-types/contest-types.model';
import { berries } from '../berries/berries.model';

@ObjectType()
export class berry_flavors {

    @Field(() => Int, {nullable:false})
    berry_id!: number;

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => Int, {nullable:false})
    flavor!: number;

    @Field(() => contest_types, {nullable:false})
    contest_types?: contest_types;

    @Field(() => berries, {nullable:false})
    berries?: berries;
}
