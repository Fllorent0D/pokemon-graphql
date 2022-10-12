import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Language_namesAvgAggregate {

    @Field(() => Float, {nullable:true})
    language_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
