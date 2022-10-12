import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Language_namesSumAggregate {

    @Field(() => Int, {nullable:true})
    language_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
