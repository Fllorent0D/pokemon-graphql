import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Evolution_trigger_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    evolution_trigger_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
