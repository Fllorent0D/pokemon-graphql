import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_meta_ailment_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    move_meta_ailment_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
