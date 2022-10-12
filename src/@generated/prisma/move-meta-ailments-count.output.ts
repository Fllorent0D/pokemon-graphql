import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_meta_ailmentsCount {

    @Field(() => Int, {nullable:false})
    move_meta!: number;

    @Field(() => Int, {nullable:false})
    move_meta_ailment_names!: number;
}
