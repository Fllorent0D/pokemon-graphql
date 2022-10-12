import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class super_contest_effect_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    super_contest_effect_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;
}
