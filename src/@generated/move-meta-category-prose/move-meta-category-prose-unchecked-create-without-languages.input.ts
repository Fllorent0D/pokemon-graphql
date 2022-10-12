import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_meta_category_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    move_meta_category_id!: number;

    @Field(() => String, {nullable:false})
    description!: string;
}
