import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Berry_flavorsAvgAggregate {

    @Field(() => Float, {nullable:true})
    berry_id?: number;

    @Field(() => Float, {nullable:true})
    contest_type_id?: number;

    @Field(() => Float, {nullable:true})
    flavor?: number;
}
