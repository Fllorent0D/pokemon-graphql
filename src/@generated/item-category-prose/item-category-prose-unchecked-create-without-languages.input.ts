import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_category_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    item_category_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
