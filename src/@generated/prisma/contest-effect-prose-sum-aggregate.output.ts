import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Contest_effect_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    contest_effect_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
