import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_flag_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}
