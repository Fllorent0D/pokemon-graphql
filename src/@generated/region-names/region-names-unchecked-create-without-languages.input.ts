import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class region_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    region_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
