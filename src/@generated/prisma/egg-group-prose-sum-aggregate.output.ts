import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Egg_group_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    egg_group_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
