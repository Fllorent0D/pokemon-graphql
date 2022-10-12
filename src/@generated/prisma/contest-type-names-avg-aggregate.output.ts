import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Contest_type_namesAvgAggregate {

    @Field(() => Float, {nullable:true})
    contest_type_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
