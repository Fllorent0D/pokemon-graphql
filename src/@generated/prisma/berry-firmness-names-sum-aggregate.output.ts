import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Berry_firmness_namesSumAggregate {

    @Field(() => Int, {nullable:true})
    berry_firmness_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
