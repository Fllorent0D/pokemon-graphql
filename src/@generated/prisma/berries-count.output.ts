import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BerriesCount {

    @Field(() => Int, {nullable:false})
    berry_flavors!: number;
}
