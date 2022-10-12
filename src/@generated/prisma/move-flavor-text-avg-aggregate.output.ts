import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Move_flavor_textAvgAggregate {

    @Field(() => Float, {nullable:true})
    move_id?: number;

    @Field(() => Float, {nullable:true})
    version_group_id?: number;

    @Field(() => Float, {nullable:true})
    language_id?: number;
}
