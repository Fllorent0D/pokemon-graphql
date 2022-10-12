import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Move_meta_ailment_namesAvgAggregate {

    @Field(() => Float, {nullable:true})
    move_meta_ailment_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
