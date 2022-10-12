import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class generation_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
