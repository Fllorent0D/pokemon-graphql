import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Super_contest_effect_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    super_contest_effect_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
