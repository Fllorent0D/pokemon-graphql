import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Berry_firmness_namesAvgAggregate {

    @Field(() => Float, {nullable:true})
    berry_firmness_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
