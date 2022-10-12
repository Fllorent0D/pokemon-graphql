import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Contest_typesSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;
}
