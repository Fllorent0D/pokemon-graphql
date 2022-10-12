import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Super_contest_effectsSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;
}
