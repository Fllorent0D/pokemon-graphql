import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Berry_firmnessCount {

    @Field(() => Int, {nullable:false})
    berries!: number;

    @Field(() => Int, {nullable:false})
    berry_firmness_names!: number;
}
