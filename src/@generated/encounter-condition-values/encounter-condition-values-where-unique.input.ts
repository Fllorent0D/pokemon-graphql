import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class encounter_condition_valuesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
