import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Version_namesMaxAggregate {

    @Field(() => Int, {nullable:true})
    version_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;

    @Field(() => String, {nullable:true})
    name?: string;
}
