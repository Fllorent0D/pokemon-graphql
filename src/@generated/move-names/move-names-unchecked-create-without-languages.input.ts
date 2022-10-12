import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
