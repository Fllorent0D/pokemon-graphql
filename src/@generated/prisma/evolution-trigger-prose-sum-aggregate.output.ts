import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Evolution_trigger_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    evolution_trigger_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
