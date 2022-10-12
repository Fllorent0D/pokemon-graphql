import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class contest_effect_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    contest_effect_id!: number;

    @Field(() => String, {nullable:true})
    flavor_text?: string;

    @Field(() => String, {nullable:true})
    effect?: string;
}
