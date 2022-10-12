import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class growth_rate_proseUncheckedCreateWithoutGrowth_ratesInput {

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
