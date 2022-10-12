import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ability_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => String, {nullable:true})
    short_effect?: string;
}
