import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class contest_type_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    flavor?: string;

    @Field(() => String, {nullable:true})
    color?: string;
}
