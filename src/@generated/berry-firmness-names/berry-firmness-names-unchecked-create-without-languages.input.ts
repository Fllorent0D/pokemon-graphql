import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class berry_firmness_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    berry_firmness_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
