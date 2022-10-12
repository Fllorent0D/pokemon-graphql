import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class growth_rate_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
