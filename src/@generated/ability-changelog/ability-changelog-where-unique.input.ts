import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ability_changelogWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}