import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Stat_hintsCount {

    @Field(() => Int, {nullable:false})
    stat_hint_names!: number;
}
