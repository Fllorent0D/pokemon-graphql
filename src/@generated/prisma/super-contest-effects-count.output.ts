import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Super_contest_effectsCount {

    @Field(() => Int, {nullable:false})
    moves!: number;

    @Field(() => Int, {nullable:false})
    super_contest_effect_prose!: number;
}
