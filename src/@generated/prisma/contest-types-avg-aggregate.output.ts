import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Contest_typesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
