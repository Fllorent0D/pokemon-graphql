import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class stat_hint_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    stat_hint_id!: number;

    @Field(() => String, {nullable:false})
    message!: string;
}
