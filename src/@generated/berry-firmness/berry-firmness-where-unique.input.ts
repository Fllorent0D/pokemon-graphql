import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class berry_firmnessWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
