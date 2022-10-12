import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class contest_effect_proseUncheckedCreateWithoutContest_effectsInput {

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    flavor_text?: string;

    @Field(() => String, {nullable:true})
    effect?: string;
}
