import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Contest_effectsCount {

    @Field(() => Int, {nullable:false})
    contest_effect_prose!: number;

    @Field(() => Int, {nullable:false})
    moves!: number;
}
