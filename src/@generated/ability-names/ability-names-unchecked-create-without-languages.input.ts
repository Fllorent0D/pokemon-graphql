import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ability_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}