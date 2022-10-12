import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Contest_typesCount {

    @Field(() => Int, {nullable:false})
    berry_flavors!: number;

    @Field(() => Int, {nullable:false})
    contest_type_names!: number;

    @Field(() => Int, {nullable:false})
    moves!: number;

    @Field(() => Int, {nullable:false})
    natures_contest_typesTonatures_likes_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    natures_contest_typesTonatures_hates_flavor_id!: number;
}
